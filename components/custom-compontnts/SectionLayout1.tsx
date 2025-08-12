import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { InfoType } from "../landing-page/Section2";
import { Inknut_Antiqua } from "next/font/google";
import DOMPurify from "isomorphic-dompurify";

const inknutAntiqua = Inknut_Antiqua({
  weight: "300",
});

const SectionLayout1 = ({ data }: { data: InfoType[] }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className="section-layout">
            <div className="min-w-[30%] h-full flex flex-col float-left text-txt text-2xl py-10">
              <span className="text-info font-[inknutAntiqua]">
                {item.type}
              </span>
              <span className="text-primary text-4xl">
                {item.title} <br />
              </span>
              <span className="text-txt text-4xl font-[inknutAntiqua]">
                {item.subtitle}
              </span>
              <span className="text-head"> Date: </span>
              <span className="text-info font-[inknutAntiqua]">
                {" "}
                {item.date}
              </span>
              <span className="text-head"> Materials used: </span>
              <span
                className="text-info font-[inknutAntiqua]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.materials),
                }}
              />

              <span className="text-head"> Techniques used: </span>
              <span
                className="text-info font-[inknutAntiqua]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.techniques),
                }}
              ></span>

              <span className="text-head pt-20 pb-5">
                Click for the progress:
              </span>
              <div className="w-full flex flex-row gap-2">
                {item.buttons.map((button, index) => (
                  <Button key={index} variant="default" size="lg">
                    {button}
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-full h-full flex flex-col">
              <Image
                src={item.visualInfluence[0]}
                width={574}
                height={717}
                alt="no nie pykło xd"
                className="w-[250px] rounded-2xl mt-[70px] -ml-3 border-3 border-primary z-10"
              />
              <Image
                src={item.visualInfluence[1]}
                width={574}
                height={717}
                alt="no nie pykło xd"
                className="w-[150px] rounded-2xl -mt-[100px] ml-[150px] border-2 border-primary opacity-50"
              />
            </div>

            <Image
              src={item.imgSrc}
              width={574}
              height={717}
              alt="no nie pykło xd"
              className=""
            />
          </div>
          <div className="w-full bg-secondary h-[25px]"></div>
        </div>
      ))}
    </>
  );
};

export default SectionLayout1;
