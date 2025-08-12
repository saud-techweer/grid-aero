// components/Footer.js
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EEE] py-[45px]">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-start px-[5vw] lg:px-[8.33vw]">
        {/* Left Section */}
        <div className="flex flex-col gap-[45px]">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <div>
              <Image src={"/Logo.svg"} width={110} height={27} alt="Logo" />
            </div>
            <p className="text-sm text-gray-700">
              © 2025 GridAero. All Rights Reserved.
            </p>
          </div>

          {/* Privacy Policy */}
          <a
            href="#"
            className="text-sm text-gray-600 underline underline-offset-2"
          >
            Privacy Policy
          </a>

          {/* Contact & LinkedIn */}
          <div className="flex items-center gap-[33px]">
            <a
              href="#"
              className="border border-gray-400 px-6 py-2 flex items-center gap-2 text-sm"
            >
              CONTACT <span className="text-lg">»</span>
            </a>
            <a
              href="#"
              className="bg-black text-white p-3 flex items-center justify-center"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Design credit */}
          <p className="text-sm text-gray-600">
            Designed by{" "}
            <a href="#" className="underline underline-offset-2 text-gray-800">
              Passage Studio
            </a>
          </p>
        </div>

        {/* Right Section - Large Icon */}
        <div className="mt-[45px] md:mt-0">
          <div className="flex justify-end items-start">
            <Image src={"/Subtract.svg"} width={304} height={304} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
