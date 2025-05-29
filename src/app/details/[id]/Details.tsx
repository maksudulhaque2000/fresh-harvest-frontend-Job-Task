"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";

import "swiper/css/pagination";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "@/app/components/shared/SectionHeading";
import { Pagination } from "swiper/modules";

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
  message?: string;
  data: T;
}

interface DetailsProps {
  productData: Product;
}

const Details: React.FC<DetailsProps> = ({ productData }) => {
  const { categoryId, description, images, price, productName, id } = productData;

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoryRes = await fetch(
          "https://code-commando.com/api/v1/categories"
        );
        const categoryJson: ApiResponse<Category[]> = await categoryRes.json();
        if (categoryJson.success) {
          setCategories(categoryJson.data);
          const cat = categoryJson.data.find((c) => c.id === categoryId);
          if (cat) setCategoryName(cat.categoryName);
        }

        const productRes = await fetch(
          "https://code-commando.com/api/v1/products"
        );
        const productJson: ApiResponse<Product[]> = await productRes.json();
        if (productJson.success) {
          setRelatedProducts(
            productJson.data.filter((p) => p.categoryId === categoryId && p.id !== id)
          );
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchCategoriesAndProducts();
  }, [categoryId, id]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="container mt-20 mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mx-auto p-4 mt-5">
        <div className="flex justify-center md:w-1/2">
          <Swiper
            loop
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper w-full h-[400px] md:h-[500px] border rounded-lg shadow-md"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`${productName} image ${idx + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-5 md:w-1/2">
          <button className="text-[#749B3F] bg-[#749B3F]/10 font-medium py-1 px-2 rounded">
            {categoryName}
          </button>
          <h3 className="text-3xl lg:text-5xl font-rubik font-medium pt-2">
            {productName}
          </h3>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-yellow-500"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.418 8.261L12 18.902l-7.418 4.631L6 15.272 0 9.423l8.332-1.268z" />
              </svg>
            ))}
            <span className="font-bold">5.0 (1 REVIEW)</span>
          </div>

          <p className="text-2xl font-bold text-[#FF6A1A] mt-3">
            ${price}/kg
          </p>
          <p className="text-lg text-gray-700 mt-3">{description}</p>

          <div className="flex items-center justify-around mt-4 border border-gray-300 rounded-md w-full md:w-fit">
            <span className="block p-2">Quantity</span>
            <button
              onClick={handleDecrement}
              className="w-12 h-12 text-xl text-gray-700 flex items-center justify-center border-r border-gray-300"
            >
              –
            </button>
            <div className="w-16 h-12 text-lg flex items-center justify-center font-semibold">
              {quantity}
            </div>
            <button
              onClick={handleIncrement}
              className="w-12 h-12 text-xl text-gray-700 flex items-center justify-center border-l border-gray-300"
            >
              +
            </button>
          </div>

          <div className="flex mt-5 gap-5 flex-col sm:flex-row">
            <button className="flex text-[#4A4A52] rounded-md gap-2 justify-center items-center bg-gray-300 font-bold px-8 py-4">
              <FaHeart /> Save as Favorite
            </button>
            <button className="flex gap-2 justify-center rounded-md items-center text-white bg-[#FF6A1A] font-bold px-8 py-4">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-start mt-5">
        <button className="w-[140px] h-[45px] bg-[#749B3F] text-white rounded-md">
          Description
        </button>
        <button className="w-[140px] h-[45px] bg-white text-slate-500 border border-slate-500 rounded-md">
          Reviews(1)
        </button>
      </div>

      <div className="mt-5 max-w-[894px] bg-[#F4F6F6] rounded-lg py-10 px-10 mb-20">
        {description}
      </div>

      <div className="text-center mt-20 mb-20">
        <SectionHeading
          subheading={"Our Products"}
          heading={"Related Products"}
          paragraph={
            "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 justify-center items-center gap-6">
          {relatedProducts.slice(0, 8).map((prod) => (
            <Link href={`/product-details/${prod.id}`} key={prod.id}>
              <div className="border p-2 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative w-[258px] h-[208px]">
                  <Image
                    src={prod.images[0] || "/404.png"}
                    alt={prod.productName}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4 text-center">
                  {prod.productName}
                </h3>
                <p className="text-center font-bold">
                  ${prod.price.toFixed(2)}
                </p>
                <button className="w-full border-[#D9D9D9] hover:border-white text-[#212337] border-2 p-2 mt-4 rounded-lg bg-white hover:text-white hover:bg-[#FF6A1A] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
