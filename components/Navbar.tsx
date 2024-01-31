import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

function Navbar() {
  return (
    <header className="fixed w-full z-10">
      <nav className="backdrop-blur-md shadow-md mx-auto max-w-[1440px] flex justify-between items-center px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="car logo"
            className="object-contain"
          />
        </Link>
        <div>
          <CustomButton title="Sign In" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
