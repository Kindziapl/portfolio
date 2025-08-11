import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Section2 = () => {
  return (
    <>
      <div className="section-layout">
        <div className="w-2/5 h-full flex flex-col float-left text-txt text-2xl py-10">
          <span className="text-info">Cosplay</span>
          <span className="text-primary text-4xl">
            Star Guardian Xayah <br />
          </span>
          <span className="text-txt text-4xl">(League of Legends)</span>
          <span className="text-head"> Date: </span>
          <span className="text-info"> 2021</span>
          <span className="text-head"> Materials used: </span>
          <span className="text-info"> Eva foam, textyles, faux-fur</span>
          <span className="text-head"> Techniques used: </span>
          <span className="text-info">
            {" "}
            Sewing, foam carving, airbrush painting
          </span>

          <span className="text-head pt-20 pb-5">Click for the progress:</span>
          <div className="w-full flex flex-row gap-2">
            <Button variant="default" size="lg">
              Skirt
            </Button>
            <Button variant="default" size="lg">
              Ears
            </Button>
            <Button variant="default" size="lg">
              Feathers
            </Button>
          </div>
        </div>

        <Image
          src="/assets/pictures/xayah.jpg"
          width={574}
          height={717}
          alt="no nie pykło xd"
          className=""
        />
      </div>
      <div className="w-full bg-secondary h-[25px]"></div>
    </>
  );
};

export default Section2;
