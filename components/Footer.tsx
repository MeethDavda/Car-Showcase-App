import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";

function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap flex-1 flex-row  justify-between content-center px-10 py-5 max-w-[1000px] mx-auto">
        <div className="mt-5 w-44">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="car logo"
            className="object-contain"
          />
          <p className="mt-5 font-light">
            CarHub 2023 <br /> All rights are reserved &copy;
          </p>
        </div>

        {footerLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-2 w-40 mt-10">
            <p className="font-bold">{link.title}</p>
            {link.links.map((item) => (
              <a href={item.url} key={item.title}>
                {item.title}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-full flex-1 text-gray-500 font-extralight gap-5 px-3 py-2 max-w-[1000px] mx-auto">
        <div>&copy;2023 CarHub. All rights reserved</div>
        <div>Privacy & Policy</div>
        <div> Terms & Conditions</div>
      </div>
    </footer>
  );
}

export default Footer;
