// src/app/shop/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '../components/shared/SectionHeading';



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
  message: string;
  data: T;
}

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://code-commando.com/api/v1/products", {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    const result: ApiResponse<Product[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'API returned an error');
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching products for Shop page:", error);
    throw error;
  }
}

export default async function ShopPage() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await getProducts();
  } catch (err: any) {
    error = err.message || "Failed to load products.";
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Products</h1>
        <p className="text-lg text-gray-700 mb-6">{error}</p>
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 mt-10">
      <SectionHeading
        subheading={"Our Shop"}
        heading={"Discover Fresh & Healthy Products"}
        paragraph={"Explore our wide range of farm-fresh fruits, vegetables, and organic produce, delivered right to your doorstep."}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <Link href={`/details/${product.id}`} key={product.id}>
              <div className="border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={product.images[0] || "/404.png"}
                    alt={product.productName}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.productName}</h3>
                <p className="text-xl font-semibold text-[#749B3F] mb-4">${product.price.toFixed(2)}</p>
                <button className="w-full border-[#D9D9D9] hover:border-white text-[#212337] border-2 p-2 mt-4 rounded-lg bg-white hover:text-white hover:bg-[#FF6A1A] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-xl py-10">No products found at the moment. Please check back later!</p>
        )}
      </div>
    </div>
  );
}