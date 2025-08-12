// import Image from "next/image";
// import Title from "./Title";

// export default function Applications() {
//   return (
//     <section className="relative mx-auto bg-[#F6F6F6] overflow-hidden">
//       {/* Background Illustration */}
//       <div className="absolute z-0" style={{ bottom: "-20%", left: "-10%" }}>
//         <Image
//           src="/ApplicationDots.svg" // change to your illustration path
//           alt="Background Illustration"
//           className="object-contain"
//           width={1168}
//           height={689}
//         />
//       </div>

//       {/* Title */}
//       <div className="pt-[200px] px-[20px] md:pl-[120px] relative z-10">
//         <Title text="Applications" barColor="bg-black" textColor="text-black" />
//       </div>

//       {/* Images */}
//       <div className="flex flex-col lg:flex-row gap-[20px] mt-[120px] px-[20px] md:px-[120px] relative z-10">
//         {/* Left Image */}
//         <div className="w-full lg:w-[590px] aspect-[590/323] relative">
//           <Image
//             src="/defense.png"
//             alt="Defense Aircraft"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Right Image */}
//         <div className="w-full lg:w-[590px] aspect-[590/323] relative">
//           <Image
//             src="/commercial.png"
//             alt="Commercial Aircraft"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="flex flex-col lg:flex-row gap-[20px] mt-[51px] px-[20px] md:px-[120px] pb-9 relative z-10">
//         {/* Defense */}
//         <div className="w-full lg:w-[590px]">
//           <h3 className="text-[22px] md:text-[27px] font-bold mb-[20px] md:mb-[27px]">
//             Defense
//           </h3>
//           <ul className="list-square pl-[20px] space-y-[8px] text-[14px] md:text-[16px] leading-[24px]">
//             <li>Assured Logistics in contested and denied environments</li>
//             <li>Intelligence, Surveillance &amp; Reconnaissance (ISR)</li>
//             <li>Air-to-Air Refueling</li>
//             <li>Drone Mothership Operations</li>
//           </ul>
//         </div>

//         {/* Commercial */}
//         <div className="w-full lg:w-[590px]">
//           <h3 className="text-[22px] md:text-[27px] font-bold mb-[20px] md:mb-[27px]">
//             Commercial
//           </h3>
//           <ul className="list-square pl-[20px] space-y-[8px] text-[14px] md:text-[16px] leading-[24px]">
//             <li>Short-Haul Regional Cargo</li>
//             <li>Distributed E-Commerce Networks</li>
//             <li>Essential Air Services</li>
//             <li>Humanitarian and Disaster Response</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Title from "./Title";
import { suisse } from "@/styles/fonts";

export default function Applications() {
  return (
    <section className="relative mx-auto bg-[#EEE] overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src="/ApplicationDots.png"
          alt="Background Illustration"
          className="object-contain"
          width={1168}
          height={689}
        />
      </div>

      {/* Title */}
      <div className="pt-[200px] px-[20px] md:pl-[120px] relative z-10">
        <Title text="Applications" barColor="bg-black" textColor="text-black" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] my-[120px] px-[20px] md:px-[120px] relative z-10">
        {/* Defense Image */}
        <div className="aspect-[590/323] relative order-1">
          <Image
            src="/defense.png"
            alt="Defense Aircraft"
            fill
            className="object-cover"
          />
        </div>

        {/* Commercial Image */}
        <div className="aspect-[590/323] relative order-3 lg:order-2">
          <Image
            src="/commercial.png"
            alt="Commercial Aircraft"
            fill
            className="object-cover"
          />
        </div>

        {/* Defense Text */}
        <div className="order-2 lg:order-3">
          <h3 className="text-[22px] md:text-[27px] font-bold mb-[20px] md:mb-[27px]">
            Defense
          </h3>
          <ul
            className={`${suisse.className} list-square pl-[20px] space-y-[8px] text-[14px] md:text-[16px] leading-[24px]`}
          >
            <li>Assured Logistics in contested and denied environments</li>
            <li>Intelligence, Surveillance &amp; Reconnaissance (ISR)</li>
            <li>Air-to-Air Refueling</li>
            <li>Drone Mothership Operations</li>
          </ul>
        </div>

        {/* Commercial Text */}
        <div className="order-4">
          <h3 className="text-[22px] md:text-[27px] font-bold mb-[20px] md:mb-[27px]">
            Commercial
          </h3>
          <ul
            className={`${suisse.className}list-square pl-[20px] space-y-[8px] text-[14px] md:text-[16px] leading-[24px]`}
          >
            <li>Short-Haul Regional Cargo</li>
            <li>Distributed E-Commerce Networks</li>
            <li>Essential Air Services</li>
            <li>Humanitarian and Disaster Response</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
