import { memo } from "react";
import Donut from "~/components/atoms/Donut/Donut";

const Skills = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-2 col-span-1">
        <ul className="flex flex-col justify-start gap-5 items-start h-full col-span-1">
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
        </ul>

        <ul className="flex flex-col justify-start gap-5 items-start h-full col-span-1">
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
        </ul>
      </div>

      <Donut />
    </section>
  );
};

export default memo(Skills);
