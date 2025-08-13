import React from "react";
import SectionLayout1 from "../custom-compontnts/SectionLayout1";

const mojeinfo: InfoType[] = [
  {
    type: "Cosplay",
    title: "Star Guardian Xayah",
    subtitle: "(League of Legends)",
    date: "2020",
    materials: "Eva foam, textyles, faux-fur",
    techniques: "Sewing, foam carving, airbrush painting",
    imgSrc: "/assets/pictures/xayah-pic-1.jpg",
    visualInfluence: [
      "/assets/pictures/xayah-ref-1.jpg",
      "/assets/pictures/xayah-ref-2.jpg",
    ],
    buttons: ["Skirt", "Ears", "Feathers"],
  },
  {
    type: "Cosplay",
    title: "Hiryuu (retrofit)",
    subtitle: "(Azur Lane)",
    date: "2021",
    materials: "Eva foam, textyles, faux-fur, worbla",
    techniques: "Sewing, foam carving, airbrush painting, 3d&nbsp;modeling",
    imgSrc: "/assets/pictures/hiryuu-pic-1.jpg",
    visualInfluence: [
      "/assets/pictures/hiryuu-ref-1.jpg",
      "/assets/pictures/hiryuu-ref-2.jpg",
    ],
    buttons: ["Wig", "Ears", "Cape"],
  },
  {
    type: "Cosplay",
    title: "Blood Moon Sivir",
    subtitle: "(League of Legends)",
    date: "2019",
    materials: "Eva foam, textyles",
    techniques: "Sewing, foam carving, airbrush painting",
    imgSrc: "/assets/pictures/sivir-pic-1.jpg",
    visualInfluence: [
      "/assets/pictures/sivir-ref-1.jpg",
      "/assets/pictures/sivir-ref-2.jpg",
    ],
    buttons: ["Mask", "Weapon"],
  },
  {
    type: "Cosplay",
    title: "FFNF Richelieu",
    subtitle: "(Azur Lane)",
    date: "2022",
    materials: "Eva foam, textyles, PLA",
    techniques: "Sewing, foam carving, 3d modeling, wig&nbsp;styling",
    imgSrc: "/assets/pictures/richelieu-pic-1.jpg",
    visualInfluence: [
      "/assets/pictures/richelieu-ref-1.jpg",
      "/assets/pictures/richelieu-ref-2.jpg",
    ],
    buttons: ["Wig", "Flag"],
  },
  {
    type: "Cosplay",
    title: "Pestonya Shortcake Wanko",
    subtitle: "(Overlord)",
    date: "2025",
    materials: "Eva foam, textyles, PLA, faux fur",
    techniques: "Sewing, foam carving, 3d modeling, wig&nbsp;styling, corset ",
    imgSrc: "/assets/pictures/pestonya-pic-1.jpg",
    visualInfluence: [
      "/assets/pictures/pestonya-ref-1.jpg",
      "/assets/pictures/pestonya-ref-2.jpg",
    ],
    buttons: ["Head", "Corset", "Sewing"],
  },
];

export type InfoType = {
  type: "Cosplay" | "Inne";
  title: string;
  subtitle: string;
  date: string;
  materials: string;
  techniques: string;
  imgSrc: string;
  visualInfluence: string[];
  buttons: string[];
};

const Section2 = () => {
  return (
    <>
      <SectionLayout1 data={mojeinfo} />
    </>
  );
};

export default Section2;
