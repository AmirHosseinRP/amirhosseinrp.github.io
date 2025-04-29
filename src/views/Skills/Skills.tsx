import { memo } from "react";

const Skills = () => {
  return (
    <ul className="grid grid-cols-3 gap-5 border-app py-3 px-5 bg-tertiary">
      <div className="col-span-1 flex flex-col gap-5 items-start">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>React Hook Form</li>
        <li>Zustand</li>
      </div>
      <div className="col-span-1 flex flex-col gap-5 items-center text-center">
        <li>Storybook</li>
        <li>JavaScript (ES6)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PWA</li>
        <li>TWA</li>
      </div>
      <div className="col-span-1 flex flex-col gap-5 items-end text-end">
        <li>SWR</li>
        <li>Yup</li>
        <li>Chart.js</li>
        <li>Axios</li>
        <li>Git</li>
        <li>ESLint</li>
      </div>
    </ul>
  );
};

export default memo(Skills);
