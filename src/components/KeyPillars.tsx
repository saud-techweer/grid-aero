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
      <div className="mx-auto px-6 lg:px-20 py-16 space-y-20">
        {/* Section Title */}
        <Title text="Key Pillars" barColor="bg-white" textColor="text-white" />

        {/* Pillars */}
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
          >
            {idx % 2 === 0 ? (
              <>
                {/* Content first */}
                <div>
                  <h3 className="font-bold text-[20px] sm:text-[24px] xl:text-[28px] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                {/* Image */}
                <div>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image first */}
                <div>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-bold text-[20px] sm:text-[24px] xl:text-[28px] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyPillars;
