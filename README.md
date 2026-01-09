# E-commerce Admin Dashboard (AdminCart-SSR)

A modern, full-featured admin dashboard for e-commerce management built with **Next.js 15**, **TypeScript**, **Prisma**, and **NextAuth**.

---

## ✨ Features

### 🔐 Authentication
- NextAuth v5 with multiple providers
- Email/password authentication with bcrypt hashing
- Google OAuth (ready for credentials)
- Facebook OAuth (ready for credentials)
- Gradient login and register pages
- Password strength indicator
- Protected routes with middleware
- JWT-based sessions with role support
- User profile dropdown with logout

---

### 🎨 Modern UI/UX
- Gradient design system (Blue, Purple, Pink)
- Framer Motion animations
- Animated components:
  - Counter animations on stat cards
  - Hover effects on interactive elements
  - Page transitions and loading states
- Toast notifications with Sonner
- Fully responsive layouts

---

### 📊 Dashboard Features
- Real-time statistics with animated counters
- Gradient-enhanced charts using Recharts
- Top products stock overview
- Total products, stock, and inventory value metrics

---

### 📦 Product Management
- Full CRUD operations
- Category management
- Stock level indicators (color-coded)
- Image URL support
- Zod-based form validation
- Server-side rendering for performance

---

## 🚀 Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Database: PostgreSQL with Prisma ORM
- Authentication: NextAuth v5
- Styling: Tailwind CSS
- UI Components: Radix UI + custom components
- Forms: React Hook Form + Zod
- Charts: Recharts
- Animations: Framer Motion
- Notifications: Sonner
- Icons: Lucide React

---

## 📋 Prerequisites

- Node.js 18+
- npm
- PostgreSQL database
- Optional Google OAuth credentials
- Optional Facebook OAuth credentials

---

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd CDC_Admin_Dashboard_2
npm install
```

---

### 2. Database Setup

```bash
createdb cdc_dashboard

psql -c "CREATE USER arsh_vats WITH PASSWORD 'admin123';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE cdc_dashboard TO arsh_vats;"
```

---

### 3. Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://neondb_owner:npg_K0FdP3nDyebU@ep-still-bar-afuf26zt-pooler.c-2.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-in-production

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

---

### 4. Database Migration

```bash
npx prisma migrate dev --name init
npx prisma generate
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
```

---

### 5. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 📱 Usage

### First Time Setup
1. Register at `/register`
2. Login at `/login`
3. View dashboard at `/dashboard`
4. Manage products at `/products`

---

### Creating Products
1. Click **Create New**
2. Fill product details:
   - Name (required)
   - Description (optional)
   - Price (required)
   - Stock quantity (required)
   - Category (required)
   - Image URL (optional)
3. Submit the form

---

## 🔐 OAuth Setup (Optional)

### Google OAuth
- Redirect URI:
  ```
  http://localhost:3000/api/auth/callback/google
  ```

### Facebook OAuth
- Redirect URI:
  ```
  http://localhost:3000/api/auth/callback/facebook
  ```

---

## 🗂️ Project Structure

```text
├── actions/
│   ├── auth-actions.ts
│   └── product-actions.ts
├── app/
│   ├── (admin)/
│   │   ├── dashboard/
│   │   ├── products/
│   │   └── layout.tsx
│   ├── login/
│   ├── register/
│   ├── api/auth/
│   └── layout.tsx
├── components/
│   ├── charts/
│   ├── dashboard/
│   ├── layout/
│   ├── ui/
│   └── providers.tsx
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── types/
│   └── next-auth.d.ts
└── middleware.ts
```

---

## 📊 Database Schema

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  role      Role     @default(ADMIN)
  name      String?
  createdAt DateTime @default(now())
}

model Category {
  id       String    @id @default(cuid())
  name     String
  slug     String    @unique
  products Product[]
}

model Product {
  id          String   @id @default(cuid())
  name        String
  description String?
  price       Decimal  @db.Decimal(10, 2)
  stock       Int      @default(0)
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  image       String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## 🔒 Security Features
- Password hashing with bcryptjs
- JWT-based authentication
- Protected API routes
- CSRF protection
- Type-safe Prisma queries

---

## 🚀 Production Deployment

```bash
npm run build
npm start
```

---

## 📝 License
MIT License

---

Built with ❤️ using Next.js 15, TypeScript, and modern web technologies.
