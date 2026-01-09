// Script to create categories via API
const categories = [
  "Books",
  "Electronics",
  "Clothing",
  "Home and Garden"
];

async function createCategories() {
  console.log("🌱 Creating categories...");
  
  for (const category of categories) {
    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: category }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(`✅ Created category: ${category}`);
      } else {
        console.log(`⚠️  ${category}: ${data.error}`);
      }
    } catch (error) {
      console.error(`❌ Error creating ${category}:`, error.message);
    }
  }

  console.log("🎉 Done!");
}

createCategories();
