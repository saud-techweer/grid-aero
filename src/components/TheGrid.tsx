"use client";
import React from "react";
import SectionTitle from "./SectionTitle";

const TheGrid: React.FC = () => {
  return (
    <section className="relative w-full bg-[#96aa96]">
      <div className="overflow-hidden px-4 sm:px-6 lg:px-28 md:py-20">
        {/* Top heading */}
        <h2
          className="text-[clamp(33px,5vw,80px)] font-bold leading-tight tracking-[-0.04em] text-white text-left sm:text-center max-w-6xl mx-auto"
          style={{
            marginTop: "8.71%", // 278 / 863
          }}
        >
          We’re building the
          <br />
          pickup truck of the skies
        </h2>

        <p className="text-[clamp(18px,2.5vw,35px)] leading-[1.4] tracking-[-0.02em] text-white text-left sm:text-center max-w-3xl mx-auto mt-10 md:mb-[13.85%] sm:mb-0">
          Uncrewed, long-range cargo aircraft that move heavy payloads across
          thousands of miles.
          <br />
          <br />
          Uniquely low-cost, rugged, and built for strategic reach, our
          distributed fleet powers resilient logistics at scale.
        </p>
      </div>

      {/* Background section */}
      <div className="relative w-full overflow-hidden h-[435px] sm:h-[600px] lg:h-[750px] xl:h-[863px]">
        <div
          className="absolute top-0 bg-cover bg-no-repeat bg-center"
          style={{
            left: "2.1528%", // 31 / 1440
            width: "99.6528%", // 1434 / 1440
            height: "100%",
            backgroundImage: "url('/TheGridBg.png')",
          }}
        >
          <SectionTitle text="The Grid" />

          {/* Bottom label (hidden on mobile) */}
          <p
            className="absolute bottom-0 left-0 text-white/60 mb-[3.7%] hidden sm:block"
            style={{
              left: "8.3682%", // 120 / 1434
            }}
          >
            Tactical Waypoint Alpha (TWP-A) : Lat/Long: 48.8566° N / 2.3522° E
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheGrid;
