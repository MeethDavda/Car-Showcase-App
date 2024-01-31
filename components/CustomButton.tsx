"use client";

import { CustomButtonProps } from "@/types";
import React from "react";

function CustomButton({ title, handleClick }: CustomButtonProps) {
  return (
    <div>
      <button
        className="py-2 px-4  bg-primary-blue rounded-full text-white hover:px-8 hover:duration-150 hover:ease-in ease-out transition-all"
        disabled={false}
        type="button"
        onClick={handleClick}
      >
        <span>{title}</span>
      </button>
    </div>
  );
}

export default CustomButton;
