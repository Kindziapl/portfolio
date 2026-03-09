import React from "react";
import SectionLayout1 from "../custom-compontnts/SectionLayout1";

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

const mojeinfo: InfoType[] = [
  {
    type: "Cosplay",
    title: "Star Guardian Xayah",
    subtitle: "(League of Legends)",
    date: "2020",
    materials: "Eva foam, textyles, faux-fur",
    techniques: "Sewing, foam carving, airbrush painting",
    imgSrc: "./assets/cosplay/pictures/xayah/gallery/xayah-pic-1.jpg",
    visualInfluence: [
      "./assets/cosplay/pictures/xayah/references/xayah-ref-1.jpg",
      "./assets/cosplay/pictures/xayah/references/xayah-ref-2.jpg",
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
    imgSrc: "./assets/cosplay/pictures/hiryuu/gallery/hiryuu-pic-1.jpg",
    visualInfluence: [
      "./assets/cosplay/pictures/hiryuu/references/hiryuu-ref-1.jpg",
      "./assets/cosplay/pictures/hiryuu/references/hiryuu-ref-2.jpg",
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
    imgSrc: "./assets/cosplay/pictures/sivir/gallery//sivir-pic-1.jpg",
    visualInfluence: [
      "./assets/cosplay/pictures/sivir/references/sivir-ref-1.jpg",
      "./assets/cosplay/pictures/sivir/references/sivir-ref-2.jpg",
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
    imgSrc: "./assets/cosplay/pictures/richelieu/gallery/richelieu-pic-1.jpg",
    visualInfluence: [
      "./assets/cosplay/pictures/richelieu/references/richelieu-ref-1.jpg",
      "./assets/cosplay/pictures/richelieu/references/richelieu-ref-2.jpg",
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
    imgSrc: "./assets/cosplay/pictures/pestonya/gallery/pestonya-pic-1.jpg",
    visualInfluence: [
      "./assets/cosplay/pictures/pestonya/references/pestonya-ref-1.jpg",
      "./assets/cosplay/pictures/pestonya/references/pestonya-ref-2.jpg",
    ],
    buttons: ["Head", "Corset", "Sewing"],
  },
];

const Section2 = () => {
  return (
    <>
      <SectionLayout1 data={mojeinfo} />
    </>
  );
};

export default Section2;
