'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/app/loading";
import SectionHeading from "../shared/SectionHeading";

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

interface Category {
  id: string;
  categoryName: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

const FreshProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productResponse = await fetch(
          "https://test-2-tan-chi.vercel.app/api/v1/products"
        );
        if (!productResponse.ok) {
          throw new Error(`HTTP error! status: ${productResponse.status}`);
        }
        const productData: ApiResponse<Product[]> = await productResponse.json();

        if (productData.success) {
          setProducts(productData.data);
          setFilteredProducts(productData.data);
        } else {
          throw new Error(productData.message || "Failed to fetch products");
        }

        const categoryResponse = await fetch(
          "https://test-2-tan-chi.vercel.app/api/v1/category"
        );
        if (!categoryResponse.ok) {
          throw new Error(`HTTP error! status: ${categoryResponse.status}`);
        }
        const categoryData: ApiResponse<Category[]> = await categoryResponse.json();

        if (categoryData.success) {
          setCategories(categoryData.data);
        } else {
          throw new Error(categoryData.message || "Failed to fetch categories");
        }
      } catch (err: any) {
        setError(err.message || "Failed to load products or categories");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);

  const handleCategoryFilter = (categoryIdToFilter: string): void => {
    setSelectedCategory(categoryIdToFilter);

    if (categoryIdToFilter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product: Product) => product.categoryId === categoryIdToFilter)
      );
    }
  };

 
  if (loading) {
    return <Loading/>;
  }

 
  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4 mt-10">
      <div className="mb-6 text-center">
        <SectionHeading
          subheading={'Our Products'}
          heading={'Our Fresh Products'}
          paragraph={"We pride ourselves on providing a wide variety of fresh and flavourful, fruits, vegetables and ingredients"}
        />
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["All", ...categories.map((cat: Category) => cat.id)].map(
            (categoryId: string, index: number) => {
              const categoryName =
                categoryId === "All"
                  ? "All"
                  : categories.find((cat: Category) => cat.id === categoryId)?.categoryName;
              return (
                <button
                  key={index}
                  onClick={() => handleCategoryFilter(categoryId)}
                  className={`px-5 py-3 font-semibold rounded-lg m-2 border ${
                    selectedCategory === categoryId
                      ? "bg-[#749B3F] text-white"
                      : "text-[#A6A6A6] border-gray-300 hover:border-[#749B3F] hover:text-[#176D38]"
                  } transition-colors duration-200`}
                >
                  {categoryName}
                </button>
              );
            }
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 8).map((product: Product) => (
            <Link href={`/details/${product.id}`} key={product.id}>
              <div className="border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white">
                <img
                  src={product.images[0] || "/404.png"}
                  alt={product.productName}
                  className="w-[258px] h-[208px] object-contain rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4 text-center">
                  {product.productName}
                </h3>
                <p className="text-center font-bold text-gray-700">${product.price.toFixed(2)}</p>
                <button className="w-full border-[#D9D9D9] hover:border-white text-[#212337] border-2 p-2 mt-4 rounded-lg bg-white hover:text-white hover:bg-[#FF6A1A] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-2xl my-4">No products available right Now...</p>
        )}
      </div>
      <div className="flex justify-center">
          <Link href={"/shop"}>
          <button className="border border-[#FF6A1A] text-[#FF6A1A] font-bold bg-transparent px-5 py-3 text-center max-w-[203px] hover:bg-[#FF6A1A] my-10 rounded-lg hover:text-white transition-colors duration-300">
            See all Products
          </button>
          </Link> 
      </div>
    </div>
  );
};

export default FreshProducts;