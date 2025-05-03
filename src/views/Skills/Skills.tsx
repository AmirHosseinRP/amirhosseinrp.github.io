import { memo } from "react";
import Button from "~/components/atoms/Button/Button";
import { skills } from "~/shared/constants/skills";

const Skills = () => {
  return (
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
  );
};

export default memo(Skills);
