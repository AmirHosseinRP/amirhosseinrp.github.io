import CursorMotionDiv from "@/ui/atoms/CursorMotionDiv/CursorMotionDiv";
import { memo } from "react";

const duration = 50;
const delay = 70;

function CursorEye() {
  return (
    <>
      <CursorMotionDiv behavior="fixed" delay={duration} className="z-50">
        <div className="w-2 h-2 rounded-full absolute bg-white border-black border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + delay} className="z-40">
        <div className="w-2 h-2 rounded-full absolute bg-transparent border-white border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 2 * delay} className="z-40">
        <div className="w-5 h-5 rounded-full absolute bg-purple-500 border-black border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 3 * delay} className="z-30">
        <div className="w-5 h-5 rounded-full absolute bg-transparent border-purple-500 border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 4 * delay} className="z-20">
        <div className="w-12 h-12 rounded-tr-[100%] rounded-bl-[100%] -rotate-45 absolute bg-white border-black border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 5 * delay} className="z-10">
        <div className="w-12 h-12 rounded-tr-[100%] rounded-bl-[100%] -rotate-45 absolute bg-black border-white border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 6 * delay}>
        <div className="w-[1px] h-2 bg-white relative bottom-[5px] right-[34px] -rotate-[60deg]" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 7 * delay}>
        <div className="w-[1px] h-[9px] bg-white relative bottom-[19px]" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 8 * delay}>
        <div className="w-[1px] h-2 bg-white relative bottom-[5px] left-[34px] rotate-[60deg]" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={duration + 9 * delay}>
        <div className="w-[1px] h-[5px] bg-white relative top-[13px]" />
      </CursorMotionDiv>
    </>
  );
}

export default memo(CursorEye);
