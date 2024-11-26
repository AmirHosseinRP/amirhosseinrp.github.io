"use client";

import { memo, useRef } from "react";
import CursorMotion from "~/components/atoms/CursorMotion/CursorMotion";
import BlueCross from "~/ui/(icons)/BlueCross";
import Eyelash1 from "~/ui/(icons)/Eyelash1";
import Eyelash2 from "~/ui/(icons)/Eyelash2";
import Eyelash3 from "~/ui/(icons)/Eyelash3";
import Eyelash4 from "~/ui/(icons)/Eyelash4";
import Eyelash5 from "~/ui/(icons)/Eyelash5";
import Eyelid from "~/ui/(icons)/Eyelid";
import Iris from "~/ui/(icons)/Iris";
import IrisBorder from "~/ui/(icons)/IrisBorder";
import Pupil from "~/ui/(icons)/Pupil";
import PupilBorder from "~/ui/(icons)/PupilBorder";

const Eye = () => {
  const delay = 0.2;

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="fixed inset-0" ref={containerRef}>
        <CursorMotion
          durations={[
            delay * 4,
            delay * 3.75,
            delay * 3.5,
            delay * 3.25,
            delay * 3.5,
            delay * 2,
            delay * 2.5,
            delay * 3,
            delay * 1.5,
            delay,
            0,
          ]}
          ref={ref}
          containerRef={containerRef}
        >
          <Eyelash1 />
          <Eyelash2 />
          <Eyelash3 />
          <Eyelash4 />
          <Eyelash5 />
          <Iris />
          <IrisBorder />
          <Eyelid />
          <PupilBorder />
          <Pupil />
          <BlueCross />
        </CursorMotion>
      </div>
    </>
  );
};

export default memo(Eye);
