"use client";

import { CarProps } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from ".";

interface carProps {
  car: CarProps;
}

function CarCard({ car }: carProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-200 mt-5 p-3 rounded-lg">
      <div>
        <h2 className="font-semibold text-xl">
          {make} {model}
        </h2>
      </div>
      <p className="text-xl flex mt-3 font-extrabold">
        <span className="font-light text-sm self-start">$</span>
        54
        <span className="font-light text-sm self-end">/day</span>
      </p>
      <div className="h-40 relative w-full object-contain my-3">
        <Image
          src="/hero.png"
          fill
          className="object-contain"
          alt="car image"
        />
      </div>
      <div className="relative w-full mt-8 group">
        <div className="flex justify-between w-full gap-3">
          <div className="flex justify-center items-center flex-col">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="car logo"
            />
            <p className="text-xs font-light mt-2">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <Image src="/tire.svg" width={20} height={20} alt="car logo" />
            <p className="text-xs font-light mt-2">{drive.toUpperCase()}</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <Image src="/gas.svg" width={20} height={20} alt="car logo" />
            <p className="text-xs font-light mt-2">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-7">
          <CustomButton title="View More" handleClick={() => setIsOpen(true)} />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
