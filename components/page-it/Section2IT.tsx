import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { InfoType } from "../page-cosplay/Section2";
import { Inknut_Antiqua } from "next/font/google";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

const inknutAntiqua = Inknut_Antiqua({
  weight: "300",
  subsets: ["latin"],
});

export type gamesInfo = {
  gameTitle: string;
  eventTitle: string;
  org: string;
  date: string;
  place: string;
  time: string;
  link?: string;
  image: {
    src: string;
    alt: string;
  };
};

const games: gamesInfo[] = [
  {
    gameTitle: "Agonic Laughter",
    eventTitle: "Global Game Jam",
    org: "University of Silesia",
    date: "2024",
    place: "Cieszyn, Śląskie, Polska",
    time: "48h",
    link: "https://globalgamejam.org/games/2024/just-quest-6",
    image: {
      src: "./assets/it/pictures/AgonicLaughter.PNG",
      alt: "Agonic Laughter",
    },
  },
  {
    gameTitle: "Feather Fighters",
    eventTitle: "Sosnowiec Game Jam",
    org: "University of Silesia",
    date: "2024",
    place: "Sosonowiec, Śląskie, Polska",
    time: "48h",
    image: {
      src: "./assets/it/pictures/gamejam2.png",
      alt: "Feather Fighters",
    },
  },
  {
    gameTitle: "",
    eventTitle: "Guard Game Jam",
    org: "University of Silesia",
    date: "2025",
    place: "Katowice, Śląskie, Polska",
    time: "48h",
    image: {
      src: "./assets/placeholder.png",
      alt: "TBD",
    },
  },
];

const Section2IT = () => {
  return (
    <>
      {games.map((item, index) => (
        <div key={index}>
          <div className="section-layout bg-background-d font-[cousine]">
            <div className="min-w-[30%]  h-full flex flex-col float-left text-txt text-2xl py-10">
              <span className="text-info-d">{item.gameTitle}</span>
              <span className="text-primary-d font-bold  text-5xl">
                {item.eventTitle} <br />
              </span>
              <span className="text-txt-d text-4xl ">{item.org}</span>
              <span className="text-head-d"> Date: </span>
              <span className="text-info-d "> {item.date}</span>
              <span className="text-head-d"> Place: </span>
              <span className="text-info-d ">{item.place}</span>

              <span className="text-head-d"> Time limit: </span>
              <span className="text-info-d ">{item.time}</span>
              {item.link && (
                <>
                  <span className="text-head-d pt-20 ">Link to the game:</span>
                  <span className="text-info-d ">
                    {" "}
                    <Link
                      className="text-txt-d underline"
                      href={item.link}
                      target="_blank"
                    >
                      {item.link}
                    </Link>
                  </span>
                </>
              )}
            </div>

            <Image
              src={item.image.src}
              width={1000}
              height={1000}
              alt={item.image.src}
              className="w-full ml-5 max-w-[800px] h-fit border-primary-d border-2 rounded-2xl overflow-hidden object-clip"
            />
          </div>
          <div className="w-full bg-secondary-d h-[25px]"></div>
        </div>
      ))}
      <div className="section-layout bg-background-d font-[cousine] ">
        <div className="w-full max-w-1/2 h-full flex flex-col">
          <span className="text-info-d ">Thesis</span>
          <span className="text-primary-d text-4xl">
            Control system with a mobile application for a mechanism implemented
            in an interactive costume <br />
          </span>
          <span className="text-txt-d text-4xl ">University of Silesia</span>
          <span className="text-head-d"> Date: </span>
          <span className="text-info-d "> 2025</span>
          <span className="text-head-d"> About: </span>
          <span className="text-info-d ">
            {" "}
            For my Thesis, I created a model of a tail that is controlled by two
            lines wound around step motors. The motors are controlled by an
            Arduino Uno. I also created an Android app to control it remotely
            via Bluetooth.{" "}
          </span>
        </div>
        <div className="w-full max-w-1/2 h-full flex flex-row gap-2 items-center justify-center">
          <Image
            src="./assets/it/pictures/inz/aplikacja.jpg"
            alt="aplikacja"
            height={400}
            width={400}
            className="w-[200px] h-fit overflow-hidden border-primary-d border-2 rounded-2xl"
          />

          <div className="h-full flex flex-col items-center gap-2">
            <Image
              src="./assets/it/pictures/inz/konst.png"
              alt="konstrukcja"
              height={400}
              width={400}
              className="w-[200px] h-fit overflow-hidden border-primary-d border-2 rounded-2xl"
            />
            <Image
              src="./assets/it/pictures/inz/uklad_zdj.jpg"
              alt="uklad"
              height={400}
              width={400}
              className="w-[200px] h-fit overflow-hidden border-primary-d border-2 rounded-2xl"
            />
          </div>
          <Image
            src="./assets/it/pictures/inz/ogon_zdj.jpg"
            alt="ogon"
            height={400}
            width={400}
            className="w-[200px] h-fit overflow-hidden border-primary-d border-2 rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full bg-secondary-d h-[25px]"></div>
    </>
  );
};

export default Section2IT;
