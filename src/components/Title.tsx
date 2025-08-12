import React from "react";

type TitleProps = {
  text: string;
  barColor?: string; // Tailwind bg color class
  textColor?: string; // Tailwind text color class
  cs?: string;
};

const Title: React.FC<TitleProps> = ({
  text,
  barColor = "bg-white",
  textColor = "text-white",
  cs = "",
}) => {
  return (
    <div className={`flex items-center ${cs}`}>
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

export default Title;
