# E-commerce Admin Dashboard (AdminCart-SSR)

A modern, full-featured admin dashboard for e-commerce management built with **Next.js 15**, **TypeScript**, **Prisma**, and **NextAuth**.

---

## ✨ Features

### 🔐 Authentication
- **NextAuth v5** with multiple providers
- Email/password authentication with bcrypt hashing
- Google OAuth (ready for credentials)
- Facebook OAuth (ready for credentials)
- Beautiful gradient login and register pages
- Password strength indicator
- Protected routes with middleware
- JWT-based sessions with role support
- User profile dropdown with logout

---

### 🎨 Modern UI/UX
- **Gradient Design System** (Blue, Purple, Pink)
- **Framer Motion** animations for smooth transitions
- Animated components:
  - Counter animations on stat cards
  - Hover effects on all interactive elements
  - Page transitions and loading states
- **Toast Notifications** using Sonner
- Fully responsive and mobile-friendly layouts

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
- Form validation with Zod
- Server-side rendering for performance

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth v5
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + custom components
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts (with gradient fills)
- **Animations**: Framer Motion
- **Notifications**: Sonner
- **Icons**: Lucide React

---

## 📋 Prerequisites

- Node.js 18+
- npm
- PostgreSQL database
- (Optional) Google OAuth credentials
- (Optional) Facebook OAuth credentials

---

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd CDC_Admin_Dashboard_2
npm install
