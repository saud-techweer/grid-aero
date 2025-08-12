import React from "react";
import Title from "./Title";

type Pillar = {
  title: string;
  description: string;
  image: string;
};

interface KeyPillarsProps {
  pillars: Pillar[];
}

const KeyPillars: React.FC<KeyPillarsProps> = ({ pillars }) => {
  return (
    <section className="bg-black text-white w-full">
      {/* container uses vw-based padding so layout scales */}
      <div className="relative mx-auto px-[5vw] lg:px-[8.33vw] py-16 space-y-20">
        <Title
          text="Key Pillars"
          barColor="bg-white"
          textColor="text-white"
          cs="relative mt-[-15%] z-100"
        />

        {pillars.map((pillar, idx) => {
          const isEven = idx % 2 === 0;

          // markup order is content then image. We reverse on mobile so image is first on small screens.
          // on md+ we switch between normal row and row-reverse to place image left/right.
          const rowClass = isEven
            ? "flex flex-col-reverse md:flex-row items-center gap-12"
            : "flex flex-col-reverse md:flex-row-reverse items-center gap-12";

          return (
            <div key={pillar.title} className={rowClass}>
              {/* content block */}
              <div className="w-full md:w-1/2 flex items-center md:justify-start">
                <div className="max-w-[488px]">
                  <h3 className="font-bold text-[20px] sm:text-[24px] xl:text-[28px] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* image block */}
              <div
                className={
                  // center image on mobile; on md align to start or end based on desired side
                  `w-full md:w-1/2 flex items-center justify-center ${
                    isEven ? "md:justify-end z-15" : "md:justify-start"
                  }`
                }
              >
                <div className="relative aspect-[488/375] w-full max-w-[488px]">
                  {/* Top line - centered to viewport */}
                  <div
                    className={`absolute top-0 bg-white/50 hidden md:block lg:w-[84.58vw] md:w-[91.6vw] ${
                      isEven ? "-right-3" : "-left-3"
                    }`}
                    style={{
                      height: "0.5px",
                    }}
                  />
                  {/* Bottom line - centered to viewport */}
                  <div
                    className={`absolute bottom-0 bg-white/50 hidden md:block lg:w-[84.58vw] md:w-[91.6vw] ${
                      isEven ? "-right-3" : "-left-3"
                    }`}
                    style={{
                      height: "0.5px",
                    }}
                  />
                  {/* Left line */}
                  <div
                    className="absolute left-0 bg-white/50 hidden md:block "
                    style={{
                      width: "0.5px",
                      height: "calc(100% * 1.096)",
                      top: "-5%",
                    }}
                  />
                  {/* Right line */}
                  <div
                    className="absolute right-0 bg-white/50 hidden md:block "
                    style={{
                      width: "0.5px",
                      height: "calc(100% * 1.096)",
                      top: "-5%",
                    }}
                  />
                  {/* Image */}
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* SVG Illustration (only shown once) */}
        <img
          src="/Dots.svg"
          alt="Illustration"
          className="absolute hidden lg:block"
          style={{
            height: "auto",
            left: "37.85%",
            bottom: "20%",
            zIndex: "10",
          }}
        />
      </div>
    </section>
  );
};

export default KeyPillars;
