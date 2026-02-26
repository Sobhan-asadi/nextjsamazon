import { loadEnvConfig } from "@next/env";
import { cwd } from "process";
import data from "../data";
import { connectToDatabase } from "./indext";
import Product from "./models/product.model";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;
    await connectToDatabase(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);

    console.log({ createdProducts, message: "seeded database successfully" });
  } catch (error) {
    console.log(error);
    throw new Error("Faild to seed databaase");
  }
};

main();
