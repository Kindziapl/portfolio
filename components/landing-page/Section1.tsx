import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <div className="w-full h-svh flex flex-row justify-center items-center font-heading font-size-3xl overflow-hidden relative">
      <Image
        src="./assets/background/bg-image.jpg"
        width={1730}
        height={1177}
        alt=""
        className="w-full absolute object-cover h-full"
      />
      <div className="w-3/5 h-full flex align-middle items-center justify-center ">
        <div className="w-full px-10 h-full flex flex-col items-center justify-center bg-background/75 z-10 gap-10">
          <h3 className="text-primary text-5xl text-center">
            {" "}
            Welcome to Kindziapl Workshop <br />
            <span className="text-txt text-4xl font-[inknutAntiqua]">
              {" "}
              Here you can see all my work
            </span>
          </h3>
          <div className="text-center px-10 ">
            <h2 className="text-primary text-2xl">
              IT professional by day cosplayer by night
            </h2>
            <h2 className="text-txt text-2xl -mt-8 font-[inknutAntiqua]">
              <br />
              She has always wanted to combine her passion for crafting and the
              arts with her determination to learn about computers and
              technology.
              <br />
              She learned the basics of sewing from her grandmother and the
              basics of pattern making and XPS foam from the internet. Her first
              costume, made in 4th grade of primary school, was of Morgana from
              League of Legends, created from old clothes and crepe paper.
              <br />
              However, her cosplay journey truly began when she discovered{" "}
              <Link
                className="text-primary"
                href="https://www.kamuicosplay.com"
                target="_blank"
              >
                Kamui Cosplay's tutorials
              </Link>
              . These opened her eyes to new materials and easy techniques, and
              her first cosplay worth sharing was Blood Moon Elise from League
              of Legends. This was the first cosplay she took to the local
              competition during LAN Party, where it won first place.
              <br />
              This event finally made her realise that cosplay is not weird and
              that people enjoy seeing their favourite characters brought to
              life. This gave her even more motivation to create even better
              cosplays, and she dreams of becoming one of the best-known
              cosplayers.
              <br />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
