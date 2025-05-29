'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../shared/SectionHeading";

interface Review {
  name: string;
  image: string;
  reviewText: string;
  designation: string;
}

const CustomersFeedback: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Alice Johnson",
      image:
        "https://i.ibb.co.com/TcdKqK4/Rectangle-3.png",
      reviewText:
        "The seasonal fruit bundle was amazing! Fresh, juicy, and well-packed. The variety of fruits exceeded my expectations, and I was particularly impressed by how fresh everything was upon arrival. I’ve tried many other services before, but this one truly stands out for its quality and attention to detail. Highly recommend it to anyone looking for premium produce delivered right to their doorstep. Will definitely order again!",
      designation: "Food Blogger",
    },
    {
      name: "Michael Lee",
      image: "https://i.ibb.co/nskVT9Z/348s.jpg",
      reviewText:
        "Great discounts and exceptional service! The fruits were as fresh as advertised, and the packaging ensured they arrived in perfect condition. I especially appreciated the timely delivery and the variety offered in the seasonal bundle. As a nutritionist, I am always on the lookout for high-quality produce, and this service definitely checks all the boxes. It’s rare to find such a perfect combination of value, quality, and reliability. Kudos to the team!",
      designation: "Nutritionist",
    },
    {
      name: "Sophia Ramirez",
      image:
        "https://i.ibb.co.com/D45bV0s/Card-of-Mich-Facts-about-Mens-Health-featured-image-scaled.jpg",
      reviewText:
        "I loved the variety in the bundle. From apples to bananas, everything was top-notch and bursting with flavor. The care taken in packaging was evident, and the delivery was right on time, which is always a huge plus for me. The service is an absolute lifesaver for someone like me who is always on the go. Kudos to the team for providing such an amazing experience. This has become my go-to service for fresh produce!",
      designation: "Health Enthusiast",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-6 py-10">
        <div className="flex justify-center">
          <img className="object-contain" src="/images/leaf/leafLeft.png" alt="left image" />
          <SectionHeading
            subheading={'Testimonial'}
            heading={'What Our Customers Say'}
            paragraph={"Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest"}
          />
          <img className="object-contain mt-20" src="/images/leaf/leafLeft.png" alt="right image" />
        </div>
        <div className="container mx-auto px-6">
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review: Review, index: number) => (
              <SwiperSlide key={index}>
                <div className="pb-24 flex flex-col justify-center sm:flex-row mx-auto items-center gap-14">
                  <div className="relative z-10 w-[287px] h-[396px] rounded-[200px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={review.image}
                      alt={review.name}
                    />
                  </div>
                  <div className="bg-[#F4F6F6] max-w-[643px] p-6 rounded-lg text-center sm:text-left">
                    <p className="mb-4 text-[#4A4A52]">{review.reviewText}</p>
                    <div className="flex text-[18px] justify-center sm:justify-start items-center gap-2">
                      <p className="font-bold text-lg">{review.name}</p>
                      <span className="text-[#212337] text-sm">
                        --{review.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CustomersFeedback;