import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="w-full h-[100svh] flex flex-row justify-center items-center bg-primary font-heading font-size-3xl">
        <Image
          src="/assets/background/bg-image.jpg"
          width={1730}
          height={1177}
          alt=""
          className="absolute w-full overflow-hidden"
        />
        <div className="w-3/5 h-full flex align-middle items-center justify-center bg-background text-txt text-4xl z-10 opacity-75">
          <div className="card flex items-center align-middle justify-center">
            Moja stronka UwU
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
