'use client';

export default function Banner() {
  return (
    <div>
      <section>
        <div className="object-contain py-8" style={{
          backgroundImage: "url('/images/banner/bannerBG.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>

          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center">
              <div className="w-full md:w-[55%] ">
                
                <button className="text-[#749B3F] bg-[#749B3F]/10 font-medium py-1 px-2 rounded"> Welcome to Fresh Harvest</button>
                <h1 className="font-rubik font-medium text-[36px] lg:text-[80px] leading-none my-6">Fresh Fruits and Vegetables</h1>
                <p className="max-w-lg text-base font-Questrial text-[#4A4A52]">
                  At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
                </p>
                <button className="bg-[#FF6A1A] text-white font-medium py-1 px-2 mt-4 rounded">Shop Now</button>


                <div className="bg-gray-200 py-4 rounded-xl flex flex-col md:flex-row justify-between items-center px-4 lg:ml-60 lg:mr-8 mt-8 lg:w-88">
                  <div className="pl-2 space-y-2">
                    <p className="font-rubik text-[#749B3F]">Special Offer</p>
                    <h4 className="text-xl font-rubik font-semibold">Fresh Salad</h4>
                    <h5 className="font-rubik font-semibold"> <span className="text-[#749B3F]">Up to</span> <span className="border border-red-400 rounded-full">70%</span> off</h5>
                    <button className="bg-[#749B3F] text-white font-bold uppercase rounded-full py-2 px-4">code: <span className="text-red-400">fresh25</span></button>
                  </div>
                  <div>
                    <img className="object-cover" src="/images/banner/photo02.png" alt="banner photo" />
                  </div>
                </div>
                <p>Download App:</p>
                <div className="flex gap-4 mt-2">
                  <img src="/images/banner/photo03.png" alt="banner appStore" />
                  <img src="/images/banner/photo04.png" alt="banner googlePry" />
                </div>
              </div>
              <div className="w-full md:w-[45%] ">
                <img className="" src="/images/banner/photo01.png" alt="banner photo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
