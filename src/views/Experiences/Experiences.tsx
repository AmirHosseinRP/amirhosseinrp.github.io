"use client";

import { MotionValue } from "motion/react";
import { memo, Ref } from "react";
import Cube from "~/components/atoms/Cube/Cube";
import Window from "~/components/molecules/Window/Window";
import logos from "~/shared/libs/logos";
import ExperiencesDotin from "./Experiences.Dotin";
import ExperiencesFanap from "./Experiences.Fanap";
import ExperiencesFerdowsi from "./Experiences.Ferdowsi";

interface Props {
  ref: Ref<HTMLElement>;
  scrollYProgress: MotionValue<number>;
}

const Experiences = (props: Props) => {
  return (
    <>
      <section className="hidden xl:flex flex-col gap-9">
        <div className="relative mb-6">
          <Window title="Experience" className="relative z-10 md:max-w-[62%] !h-fit max-w-[90%]">
            <ExperiencesDotin />
          </Window>

          <Window title="Dotin" className="h-96 md:max-w-[43%] absolute right-0 top-52 xl:top-28 max-w-[90%]">
            <Cube scrollProgress={props.scrollYProgress} iconSrc={logos.dotin.src} rotationScale={2} />
          </Window>
        </div>

        <div className="relative">
          <Window title="Ferdowsi" className="h-96 max-w-[51%]">
            <Cube scrollProgress={props.scrollYProgress} iconSrc={logos.ferdowsi.src} rotationScale={4} />
          </Window>

          <Window title="Experience" className="z-10 max-w-[54%] !h-fit absolute right-0 bottom-0">
            <ExperiencesFerdowsi />
          </Window>
        </div>

        <div className="relative">
          <Window title="Experience" className="relative z-10 max-w-[46%] !h-fit top-36">
            <ExperiencesFanap />
          </Window>

          <Window title="Fanap" className="h-72 max-w-[59%] absolute right-0 top-10">
            <Cube scrollProgress={props.scrollYProgress} iconSrc={logos.fanap.src} rotationScale={6} />
          </Window>
        </div>
      </section>

      <section className="flex xl:hidden flex-col gap-7">
        <Window title="Experience" className="z-10 !h-fit max-w-[95%]">
          <ExperiencesDotin />
        </Window>

        <div className="flex flex-col sm:flex-row-reverse justify-between">
          <Window title="Dotin" className="h-96 max-w-[90%] sm:max-w-[51%] self-end relative bottom-12 sm:bottom-10">
            <Cube scrollProgress={props.scrollYProgress} iconSrc={logos.dotin.src} rotationScale={2} />
          </Window>

          <Window title="Ferdowsi" className="h-96 max-w-[85%] sm:max-w-[43%] relative top-5 sm:top-10">
            <Cube scrollProgress={props.scrollYProgress} iconSrc={logos.ferdowsi.src} rotationScale={4} />
          </Window>
        </div>

        <Window title="Experience" className="z-10 max-w-[95%] !h-fit self-end">
          <ExperiencesFerdowsi />
        </Window>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-end gap-5 mt-5">
          <Window title="Experience" className="z-10 max-w-[95%] !h-fit self-start sm:self-end">
            <ExperiencesFanap />
          </Window>

          <Window title="Fanap" className="h-72 max-w-[70%] sm:max-w-[32%]">
            <Cube scrollProgress={props.scrollYProgress} iconSrc={logos.fanap.src} rotationScale={6} />
          </Window>
        </div>
      </section>
    </>
  );
};

export default memo(Experiences);
