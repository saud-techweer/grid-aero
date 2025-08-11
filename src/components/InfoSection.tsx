"use client";
import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="bg-[#EEE] w-full">
      <div className="flex items-center px-[120px] py-[169px] max-lg:px-6 max-lg:py-12">
        <div className="w-full max-w-[600px]">
          <p className="font-inter font-bold leading-[120%] tracking-[-0.88px] text-black mb-6 text-[44px] max-lg:text-[24px]">
            [ From A to B. One aircraft or a thousand. The Grid scales. The
            cargo moves ]
          </p>
          <p className="font-['Suisse_Intl_Mono'] leading-[180%] tracking-[-0.32px] text-black text-[16px] max-lg:text-[12px]">
            The Grid is a scalable network of autonomous aircraft. It delivers
            strategic reach, operational flexibility, and resilient logistics at
            any scale. Each Lifter expands the network’s capability, adding
            range, redundancy, and adaptability wherever it's needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
