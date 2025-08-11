import React from "react";

type SectionTitleProps = {
  text: string;
  barColor?: string; // Tailwind bg color class
  textColor?: string; // Tailwind text color class
  left?: string; // CSS value like "8.3682%"
  top?: string; // CSS value like "31.7497%"
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  barColor = "bg-white",
  textColor = "text-white",
  left = "8.3682%", // 120 / 1434
  top = "31.7497%", // 274 / 863
}) => {
  return (
    <div className="absolute flex items-center" style={{ left, top }}>
      {/* Bar */}
      <div
        className={`${barColor} w-[8px] h-[124px] sm:w-[12px] sm:h-[200px] xl:w-[16px] xl:h-[278px]`}
      />
      {/* Heading */}
      <h2
        className={`ml-[29px] font-['Inter'] font-bold ${textColor} tracking-[-0.04em] text-[48px] sm:text-[72px] lg:text-[90px] xl:text-[110px] leading-none`}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
