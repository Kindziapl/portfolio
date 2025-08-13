import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="w-full h-[100svh] flex flex-row justify-center items-center font-heading font-size-3xl overflow-hidden relative">
      <Image
        src="/assets/background/bg-image.jpg"
        width={1730}
        height={1177}
        alt=""
        className="w-full absolute object-cover h-full"
      />
      <div className="w-3/5 h-full flex align-middle items-center justify-center ">
        <div className="w-full h-full bg-background/75 z-10">
          <h3> Welcome to Kindziapl Workshop</h3>
          <h2> Here you can see all my work</h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;
