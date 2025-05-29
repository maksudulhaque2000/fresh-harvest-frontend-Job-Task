
const About: React.FC = () => {
  return (
    <>
      <section className="container mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-6">
          <div className="relative w-full lg:w-[50%] flex justify-center ">
            <div>
              <img
                className="w-full object-cover"
                src="/images/about/about01.png"
                alt="about"
              />
            </div>

            <div className="absolute w-[40%] lg:w-[28%] bg-white shadow-md flex flex-col justify-center items-center text-center rounded-xl top-[75%] left-[65%] p-2 space-y-2">
              <img
                className="bg-gray-100 w-full h-20 object-contain"
                src="/images/about/about02.png"
                alt="about"
              />
              <h4 className="font-rubik font-medium">Mushroom</h4>
              <p className="font-questrial">$2.3/kg</p>
              <button className="w-full text-xs font-rubik font-medium border rounded-md py-1 hover:bg-[#FF6A1A] hover:text-white">Add to Curd</button>
            </div>
          </div>

          <div className="w-full lg:w-[50%] space-y-4 mt-20 md:mt-0">
            <button className="text-[#749B3F] bg-[#749B3F]/10 font-medium py-1 px-2 rounded">About Us</button>
            <h3 className="font-rubik font-medium text-3xl md:text-4xl lg:text-5xl">About Fresh Harvest</h3>
            <p className="max-w-lg text-base font-questrial text-[#4A4A52]">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
            <button className="text-[#FF6A1A] font-semibold border border-[#FF6A1A] py-1 px-3 rounded">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;