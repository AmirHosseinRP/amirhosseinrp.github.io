"use client";

import dynamic from "next/dynamic";
import { memo } from "react";
import BlueCross from "~/ui/(icons)/BlueCross";
import Eyelash1 from "~/ui/(icons)/Eyelash1";
import Eyelash2 from "~/ui/(icons)/Eyelash2";
import Eyelash3 from "~/ui/(icons)/Eyelash3";
import Eyelash4 from "~/ui/(icons)/Eyelash4";
import Eyelash5 from "~/ui/(icons)/Eyelash5";
import EyelidTop from "~/ui/(icons)/EyelidTop";
import Iris from "~/ui/(icons)/Iris";
import IrisBorder from "~/ui/(icons)/IrisBorder";
import Pupil from "~/ui/(icons)/Pupil";
import PupilBorder from "~/ui/(icons)/PupilBorder";
import EyelidBottom from "../(icons)/EyelidBottom";

const CursorMotion = dynamic(async () => await import("~/components/atoms/CursorMotion/CursorMotion"), { ssr: false });

const Eye = () => {
  const delay = 0.2;

  return (
    <>
      <CursorMotion duration={delay * 4} primaryMorion>
        <Eyelash1 />
      </CursorMotion>

      <CursorMotion duration={delay * 3.75} primaryMorion>
        <Eyelash2 />
      </CursorMotion>

      <CursorMotion duration={delay * 3.5} primaryMorion>
        <Eyelash3 />
      </CursorMotion>

      <CursorMotion duration={delay * 3.25} primaryMorion>
        <Eyelash4 />
      </CursorMotion>

      <CursorMotion duration={delay * 3.5} primaryMorion>
        <Eyelash5 />
      </CursorMotion>

      <CursorMotion duration={delay * 3} primaryMorion>
        <EyelidBottom />
      </CursorMotion>

      <CursorMotion duration={delay * 2.5} primaryMorion>
        <IrisBorder />
      </CursorMotion>

      <CursorMotion duration={delay * 2} primaryMorion>
        <Iris />
      </CursorMotion>

      <CursorMotion duration={delay * 3} primaryMorion>
        <EyelidTop />
      </CursorMotion>

      <CursorMotion duration={delay * 1.5} primaryMorion>
        <PupilBorder />
      </CursorMotion>

      <CursorMotion duration={delay} primaryMorion>
        <Pupil />
      </CursorMotion>

      <CursorMotion duration={0} primaryMorion>
        <BlueCross />
      </CursorMotion>
    </>
  );
};

export default memo(Eye);
