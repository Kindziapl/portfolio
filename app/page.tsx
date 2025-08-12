import Section1 from "@/components/landing-page/Section1";
import Section2 from "@/components/landing-page/Section2";
import Section3 from "@/components/landing-page/Section3";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Section1 />
      </section>

      <section>
        <div className="w-full h-[100px] flex bg-secondary text-4xl text-txt items-center px-20">
          {" "}
          My projects{" "}
        </div>
      </section>

      <section>
        <Section2 />
      </section>
    </>
  );
}
