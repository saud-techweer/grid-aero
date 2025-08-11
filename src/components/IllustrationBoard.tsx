"use client";
import Image from "next/image";

export default function IllustrationBoard() {
  return (
    <div className="relative w-full aspect-[1440/1000] bg-gray-300">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover grayscale"
        style={{ backgroundImage: "url('/Illustrations/background.png')" }}
      />

      {/* 1st illustration */}
      <div className="absolute max-sm:left-[0.4%] min-md:right-[7.4%] bottom-[9.191%] h-[63.736%] w-[2.222%]">
        <Image
          src="/Illustrations/illustrationText.svg"
          alt="Illustration 1"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* 2nd illustration */}
      <div className="absolute z-10 max-sm:left-0 min-md:right-0 bottom-[-4%] h-[21.379%] w-[9.861%]">
        <Image
          src="/Illustrations/dotSquare.svg"
          alt="Illustration 2"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
