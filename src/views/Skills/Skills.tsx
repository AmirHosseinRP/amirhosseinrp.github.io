import { memo } from "react";
import Button from "~/components/atoms/Button/Button";
import Donut from "~/components/atoms/Donut/Donut";
import Window from "~/components/molecules/Window/Window";
import { skills } from "~/shared/constants/skills";

const Skills = () => {
  return (
    <section className="flex flex-col mb-16">
      <Window title="Skills" className="-mb-16 z-10 max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-app py-3 px-5 bg-tertiary">
          {skills.map(item => {
            return (
              <li className="block" key={item.title}>
                <Button
                  href={item.link}
                  target="_blank"
                  endIconSrc={item.logo}
                  className="!bg-[#ececec] active:!bg-[#666666] h-full"
                >
                  {item.title}
                </Button>
              </li>
            );
          })}
        </ul>
      </Window>

      <Window title="Donut" className="self-end max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
        <Donut />
      </Window>
    </section>
  );
};

export default memo(Skills);
