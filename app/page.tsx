"use client";
import Section1 from "@/components/page-cosplay/Section1";
import Section2 from "@/components/page-cosplay/Section2";
import Section3 from "@/components/page-cosplay/Section3";
import Section1IT from "@/components/page-it/Section1IT";
import Section2IT from "@/components/page-it/Section2IT";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [persona, setPersona] = useState(true);

  return (
    <main className="w-full h-full m-0 p-0 flex flex-col relative gap-0">
      <div className="w-[300px] h-20 z-20 fixed top-0 right-0">
        <div className="w-full h-full flex flex-row items-center justify-end p-3 gap-2">
          <Label
            className={cn(
              persona == true
                ? "text-txt  font-[inknutAntiqua] text-2xl"
                : "text-txt-d font-[cousine] text-xl"
            )}
          >
            {" "}
            Click for{" "}
            <span
              className={cn(
                persona == true ? "text-primary" : "text-primary-d"
              )}
            >
              {persona == true ? <>IT</> : <>Cosplayer</>}
            </span>
          </Label>
          <Switch
            className=""
            onClick={() => {
              setPersona(!persona);
              console.log(persona);
            }}
          ></Switch>
        </div>
      </div>
      <div
        className={cn(
          "absolute top-0 left-0 z-10 w-[300px] h-10 text-2xl text-white/50",
          !persona && "font-[cousine]"
        )}
      >
        {" "}
        Work in progress
      </div>
      {persona && (
        <>
          <Section1 />

          <div className="w-full h-[100px] flex bg-secondary text-4xl text-txt items-center px-20">
            {" "}
            My projects{" "}
          </div>

          <Section2 />
        </>
      )}

      {!persona && (
        <>
          <section className="w-full h-full m-0 p-0">
            <Section1IT />
            <div className="w-full h-[100px] flex bg-secondary-d text-4xl text-txt-d font-[cousine] items-center px-20">
              {" "}
              My projects{" "}
            </div>
            <Section2IT />
          </section>
        </>
      )}
    </main>
  );
}
