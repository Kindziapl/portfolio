import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section1IT = () => {
  return (
    <div className="w-full h-svh flex flex-row justify-center items-center font-heading font-size-3xl overflow-hidden relative">
      <Image
        src="./assets/it/background/background.png"
        width={1730}
        height={1177}
        alt=""
        className="w-full absolute object-cover h-full"
      />
      <div className="w-3/5 h-full flex align-middle items-center justify-center ">
        <div className="w-full px-10 h-full flex flex-col items-center justify-center bg-background-d/75 z-10 gap-10">
          <h3 className="text-primary-d text-5xl text-center font-bold font-[cousine]">
            {" "}
            Welcome to Kindziapl Workshop <br />
            <span className="text-txt-d text-4xl font-normal font-[cousine]">
              {" "}
              Here you can see all my work
            </span>
          </h3>
          <div className="text-center px-10 ">
            <h2 className="text-primary-d font-bold text-2xl font-[cousine]">
              IT professional by day cosplayer by night.
            </h2>
            <h2 className="text-txt-d text-2xl -mt-8 font-[cousine]">
              <br />
              In her childhood always different from others - enjoyed climbing
              trees, fighting sticks and playing computer games. She was told
              many times that games and technology in all aren't for girls.
              <br />
              Determined to prove everyone that women can be equally good at ICT
              as men she went to technical school and passed the exams to become
              IT Technician.
              <br />
              But her journey didn't stop there. She went to the University of
              Silesia, unsure of which IT sector she wanted to work in. During
              her studies she enjoyed attending Game Jams and learning Assembly
              Language (really). For the Thesis she decided to combine her two
              hobbies - cosplay and technology - by creating a "Control system
              with a mobile application for a mechanism implemented in an
              interactive costume" (an animatronic tail!).
              <br />
              And though since her childhood, women in IT sector have become
              more popular, she still continues a fight for her own rightful
              place and respect.
              <br />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1IT;
