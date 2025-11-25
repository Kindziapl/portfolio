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

const Section2IT = () => {
  return (
    <>
      <div>
        <div className="section-layout bg-background-d font-[cousine]">
          <div className="min-w-[30%]  h-full flex flex-col float-left text-txt text-2xl py-10">
            <span className="text-primary-d font-bold  text-5xl">
              Global Game Jam <br />
            </span>
            <span className="text-txt-d text-4xl ">University of Silesia</span>
            <span className="text-head-d"> Date: </span>
            <span className="text-info-d "> 2024</span>
            <span className="text-head-d"> Place: </span>
            <span
              className="text-info-d "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("Cieszyn"),
              }}
            />

            <span className="text-head-d"> Time limit: </span>
            <span
              className="text-info-d "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("48h"),
              }}
            ></span>

            <span className="text-head-d pt-20 ">Link to the game:</span>
            <span className="text-info-d ">
              {" "}
              <Link
                className="text-txt-d underline"
                href="https://globalgamejam.org/games/2024/just-quest-6"
                target="_blank"
              >
                globalgamejam.org/games/2024/just-quest-6
              </Link>
            </span>
          </div>

          <Image
            src="./assets/it/pictures/AgonicLaughter.PNG"
            width={1000}
            height={1000}
            alt="no nie pykło xd"
            className="w-full max-w-[800px] h-fit border-primary-d border-2 rounded-2xl overflow-hidden object-clip"
          />
        </div>
        <div className="w-full bg-secondary-d h-[25px]"></div>
      </div>
    </>
  );
};

export default Section2IT;
