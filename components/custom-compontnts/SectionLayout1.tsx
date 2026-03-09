import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { InfoType } from "../page-cosplay/Section2";
import { Inknut_Antiqua } from "next/font/google";
import DOMPurify from "isomorphic-dompurify";
import { GalleryModal } from "./GalleryModal";

const inknutAntiqua = Inknut_Antiqua({
  weight: "300",
  subsets: ["latin"],
});

const SectionLayout1 = ({ data }: { data: InfoType[] }) => {
  const [pictureOneNumber, setPictureOneNumber] = useState(0);
  const [pictureTwoNumber, setPictureTwoNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changePictureNumber = (index: number) => {
    if (pictureOneNumber == 0) {
      setPictureOneNumber(1);
      setPictureTwoNumber(0);
    } else if (pictureOneNumber == 1) {
      setPictureOneNumber(0);
      setPictureTwoNumber(1);
    }
  };

  const openGallery = () => {
    setIsModalOpen(true);
  };
  const handleNavigate = (direction: "prev" | "next" | number) => {
    if (typeof direction === "number") {
      setCurrentImageIndex(direction);
    } else if (direction === "next" && currentImageIndex < 0) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (direction === "prev" && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  useEffect(() => {});

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
                onClick={() => changePictureNumber(index)}
                src={item.visualInfluence[pictureOneNumber]}
                width={574}
                height={717}
                alt="reference picture 1"
                className="max-w-[250px] rounded-2xl mt-[70px] -ml-3 border-3 border-primary z-10"
              />
              <Image
                src={item.visualInfluence[pictureTwoNumber]}
                width={574}
                height={717}
                alt="reference picture 2"
                className="max-w-[150px] rounded-2xl -mt-[100px] ml-[150px] border-2 border-primary opacity-50"
              />
            </div>

            <Image
              src={item.imgSrc}
              width={1000}
              height={1000}
              alt="cosplay photo"
              className="max-w-[600px] h-full pl-5"
            />
          </div>
          <div className="w-full bg-secondary h-[25px]"></div>
          {isModalOpen && (
            <GalleryModal
              images={[]}
              currentIndex={1}
              onClose={() => setIsModalOpen(false)}
              onNavigate={handleNavigate}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default SectionLayout1;
