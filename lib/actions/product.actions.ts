"use server";
import { connectToDatabase } from "../db/indext";
import Product from "../db/models/product.model";

export async function getAllCategories() {
  await connectToDatabase();
  const categories = await Product.find({ isPublished: true }).distinct(
    "category",
  );
  return categories;
}

export async function getProductsForCard({
  tag,
  limit = 4,
}: {
  tag: string;
  limit?: number;
}) {
  await connectToDatabase();

  try {
    const products = await Product.find({
      tags: tag,
      isPublished: true,
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    const formattedProducts = products.map((product) => ({
      name: product.name,
      href: `/product/${product.slug}`,
      image: product.images?.[0] || "",
    }));

    return formattedProducts;
  } catch (error) {
    console.error(`getProductsForCard "${tag}":`, error);
    return [];
  }
}
