// export default function Hero() {
//   return (
//     <section className="flex flex-col lg:flex-row items-start lg:items-center gap-6 py-10">
//       <div className="w-4 h-64 bg-black" />
//       <h1 className="text-4xl md:text-6xl lg:text-[110px] font-bold leading-tight tracking-tighter">
//         World’s Most Resilient Air Cargo Network
//       </h1>
//     </section>
//   );
// }

import { suisse } from "@/styles/fonts";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-28 mt-[148px]">
      <div className="flex flex-col gap-6 pb-[70px]">
        {/* Inner flex-row keeps vertical bar and heading aligned side-by-side */}
        <div className="flex flex-row items-start gap-6">
          <div className="w-4 bg-black shrink-0 self-stretch" />
          <h1 className="font-['Inter'] text-[42px] sm:text-[64px] lg:text-[96px] xl:text-[110px] font-bold leading-tight text-black tracking-[-0.04em] max-w-full lg:max-w-[60%]">
            World’s Most Resilient Air Cargo Network
          </h1>
        </div>

        <p
          className={`${suisse.className} text-[18px] sm:text-[20px] lg:text-[23px] leading-[1.6] text-black tracking-[-0.02em] max-w-3xl`}
        >
          The future of air cargo is distributed, uncrewed, and radically
          affordable.
          <br />
          Grid is building it.
        </p>
      </div>
    </section>
  );
};

export default Hero;
