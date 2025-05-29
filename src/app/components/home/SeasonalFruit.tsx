'use client';

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const SeasonalFruit: React.FC = () => { 
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date().getTime() + (48 * 60 * 60 * 1000);
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: TimeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="mt-10 lg:mt-24"
      style={{
        backgroundImage: "url('/images/specialOffer/specialfood01.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 py-10 lg:py-[120px]">
        <button className="text-[#749B3F] bg-[#749B3F]/10 font-rubik font-medium py-1 px-2 rounded">Special Offer</button>
        <h2 className="font-medium text-[#212337] text-[60px] lg:text-[80px] leading-none">
          Seasonal Fruit Bundle
        </h2>
        <h2 className="font-medium text-[30px] lg:text-[48px]">
          Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
        </h2>
        <div className="flex gap-5 mt-5">
          <div className="w-[70px] lg:w-[98px] h-[100px] lg:h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[25px] lg:text-[40px] font-bold">
              {timeLeft.days || "0"}
            </span>
            <span className="text-[18px]">Days</span>
          </div>
          <div className="w-[70px] lg:w-[98px] h-[100px] lg:h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[25px] lg:text-[40px] font-bold">
              {timeLeft.hours || "0"}
            </span>
            <span className="text-[18px]">Hours</span>
          </div>
          <div className="w-[70px] lg:w-[98px] h-[100px] lg:h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[25px] lg:text-[40px] font-bold">
              {timeLeft.minutes || "0"}
            </span>
            <span className="text-[18px]">Minutes</span>
          </div>
          <div className="w-[70px] lg:w-[98px] h-[100px] lg:h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[25px] lg:text-[40px] font-bold">
              {timeLeft.seconds || "0"}
            </span>
            <span className="text-[18px]">Seconds</span>
          </div>
        </div>

        <div className="bg-[#176D38] w-[301px] mt-10 rounded-[92px] text-center">
          <p className="text-[32px] py-3 font-rubik">
            CODE : <span className="text-[#FAC714]">FRUIT28</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeasonalFruit;