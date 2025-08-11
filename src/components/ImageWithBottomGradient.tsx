import React from "react";

type ImageWithBottomGradientProps = {
  imageUrl: string;
  alt?: string;
};

const ImageWithBottomGradient: React.FC<ImageWithBottomGradientProps> = ({
  imageUrl,
  alt = "",
}) => {
  return (
    <div
      className="relative w-full h-[931px] overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="img"
      aria-label={alt}
    >
      {/* SVG overlay at the bottom */}
      <img
        src="/gradient.svg"
        alt=""
        className="absolute bottom-[-3px] left-0 w-full pointer-events-none"
      />
    </div>
  );
};

export default ImageWithBottomGradient;
