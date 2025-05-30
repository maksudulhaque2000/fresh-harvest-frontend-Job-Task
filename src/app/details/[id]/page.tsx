import React from "react";
import Details from "./Details";

interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const  resolve  = await params;
  const { id } = resolve;
  

  const res = await fetch(`https://code-commando.com/api/v1/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load product");
  }

  const json: ApiResponse<Product> = await res.json();
  if (!json.success) {
    throw new Error(json.message || "API returned an error");
  }

  return <Details productData={json.data} />;
}