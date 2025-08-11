"use client";
import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#96aa96] overflow-hidden px-4 sm:px-6 lg:px-28 py-20">
      {/* Top Dots */}
      <div className="flex justify-end mb-6">
        <div className="w-[6px] h-[6px] bg-black/30 border border-black/30" />
      </div>

      <div className="flex justify-end mb-10">
        <div className="flex gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-[6px] h-[6px] bg-black/30 border border-black/30"
            />
          ))}
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-['Inter'] text-[36px] sm:text-[54px] md:text-[66px] lg:text-[77px] font-bold leading-tight tracking-[-0.04em] text-white text-center max-w-6xl mx-auto">
        We’re building the
        <br />
        pickup truck of the skies
      </h2>

      {/* Subtext */}
      <p className="font-['Inter'] text-[20px] sm:text-[26px] md:text-[30px] lg:text-[35px] leading-[1.4] tracking-[-0.02em] text-white text-center max-w-3xl mx-auto mt-10">
        Uncrewed, long-range cargo aircraft that move heavy payloads across
        thousands of miles.
        <br />
        <br />
        Uniquely low-cost, rugged, and built for strategic reach, our
        distributed fleet powers resilient logistics at scale.
      </p>

      {/* Image and Label */}
      <div className="relative w-full max-w-[1322px] mx-auto mt-24">
        <div className="px-6 md:px-12 xl:px-24 mt-24 mb-[100px]">
          <div className="inline-flex items-stretch gap-6">
            <div className="w-4 bg-white" />
            <h2 className="font-['Inter'] text-[42px] sm:text-[64px] lg:text-[96px] xl:text-[110px] font-bold leading-tight text-white tracking-[-0.04em] max-w-full ">
              The Grid
            </h2>
          </div>
        </div>

        {/* Tactical label */}
        <p className="absolute bottom-0 left-0 font-['Suisse_Int\'l_Mono'] text-[10px] sm:text-[11px] text-white/60 leading-5 tracking-[-0.25px] pt-[50px]">
          Tactical Waypoint Alpha (TWP-A) : Lat/Long: 48.8566° N / 2.3522° E
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
