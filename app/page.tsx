import SectionLayout1 from "@/components/custom-compontnts/SectionLayout1";
import Section2 from "@/components/landing-page/Section2";
import Section3 from "@/components/landing-page/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="w-full h-[100svh] flex flex-row items-center bg-background font-heading font-size-3xl">
          <div className="w-1/5 h-full bg-primary"></div>
          <div className="w-3/5 h-full bg-background text-txt text-4xl">
            <div className="card flex items-center align-middle justify-center">
              {" "}
              Moja stronka UwU{" "}
            </div>
          </div>
          <div className="w-1/5 h-full bg-primary"></div>
        </div>
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

      <section>
        <Section3 />
      </section>
    </>
  );
}
