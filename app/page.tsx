import Section1 from "@/components/landing-page/Section1";
import Section2 from "@/components/landing-page/Section2";
import Section3 from "@/components/landing-page/Section3";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative gap-0">
      <div className="absolute top-0 right-0 z-10 w-full h-10 text-2xl text-white">
        {" "}
        Work in progress
      </div>
      <Section1 />

      <div className="w-full h-[100px] flex bg-secondary text-4xl text-txt items-center px-20">
        {" "}
        My projects{" "}
      </div>

      <Section2 />
    </main>
  );
}
