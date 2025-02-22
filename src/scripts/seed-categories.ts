import db from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Card and vehicles",
  "Comedy",
  "Education",
  "gaming",
  "Entertainment",
  "File and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Sciences and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toUpperCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
