import Section1 from "@/components/landing-page/Section1";
import Section2 from "@/components/landing-page/Section2";
import Section3 from "@/components/landing-page/Section3";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Section1 />

      <div className="w-full h-[100px] flex bg-secondary text-4xl text-txt items-center px-20">
        {" "}
        My projects{" "}
      </div>

      <Section2 />
    </main>
  );
}
