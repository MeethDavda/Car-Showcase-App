"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

export default function Hero() {
  function handleScroll() {}
  return (
    <div className="flex w-full justify-center flex-wrap items-center flex-col xl:flex-row max-w-[1440px] min-h-sreen">
      <div className="xl:pt-3 pt-36 x-10 px-10 lg:px-16 xl:w-2/5 w-full">
        <div className="font-bold text-4xl lg:text-6xl">
          Find, book or rent a car- quickly and easily!
        </div>
        <div className="mt-4 font-thin lg:text-2xl ">
          Streamline your rental car experience with our effortless booking
          process
        </div>
        <div className="mt-5">
          <CustomButton title="Explore" handleClick={handleScroll} />
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay "></div>
        </div>
      </div>
    </div>
  );
}
