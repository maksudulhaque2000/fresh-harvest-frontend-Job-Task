import { FaArrowRight } from "react-icons/fa6";

import Link from "next/link";
import SectionHeading from "../components/shared/SectionHeading";

interface BlogItem {
  image: string;
  date: string;
  description: string;
}

const Blogs: React.FC = () => {
  const blogs: BlogItem[] = [
    {
      image: "/images/blogs/blog01.png",
      date: "May 23, 2024",
      description: "Exploring Seasonal Delights:A Guide to What's Fresh Right No"
    },
    {
      image: "/images/blogs/blog02.png",
      date: "May 23, 2024",
      description: "Mastering Salad Creations:Tips and Tricks for Bullding Delicious and Nutritious Salads"
    },
    {
      image: "/images/blogs/blog01.png",
      date: "May 23, 2024",
      description: "Exploring Seasonal Delights:A Guide to What's Fresh Right No"
    },
    {
      image: "/images/blogs/blog02.png",
      date: "May 23, 2024",
      description: "Mastering Salad Creations:Tips and Tricks for Bullding Delicious and Nutritious Salads"
    },
    {
      image: "/images/blogs/blog01.png",
      date: "May 23, 2024",
      description: "Exploring Seasonal Delights:A Guide to What's Fresh Right No"
    },
    {
      image: "/images/blogs/blog01.png",
      date: "May 23, 2024",
      description: "Exploring Seasonal Delights:A Guide to What's Fresh Right No"
    },
  ];

  return (
    <>
      <section className="container mx-auto px-6 bg-white py-10">
        <div className="flex justify-center items-center">
          <div>
            <SectionHeading
              subheading={'Our Blog'}
              heading={'Fresh Harvest Blog'}
              paragraph={'Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.'}
            />
          </div>
          <div>
            <img className="object-contain" src="/images/leaf/leafRight.png" alt="leaf" />
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {
              blogs.map((blog: BlogItem, idx: number) => {
                return (
                  <div key={idx}>
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={blog.image}
                      alt={blog.description}
                    />
                    <div className="mt-4">
                      <span className="text-[#4A4A52] font-questrial">{blog.date}</span>
                      <h1 className="mt-2 text-[18px] font-medium text-gray-800 font-rubik ">
                        {blog.description}
                      </h1>
                      <Link href={`/blogs/${blog.id}`} className="flex items-center gap-2 text-[#FF6A1A] font-semibold mt-2">
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;