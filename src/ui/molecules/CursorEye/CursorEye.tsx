import CursorMotionDiv from "@/ui/atoms/CursorMotionDiv/CursorMotionDiv";
import { memo } from "react";

function CursorEye() {
  return (
    <>
      <CursorMotionDiv behavior="fixed" className="z-50" delay={100}>
        <div className="w-2 h-2 rounded-full absolute bg-white border-black border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={250} className="z-40">
        <div className="w-2 h-2 rounded-full absolute bg-transparent border-white border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" className="z-40" delay={400}>
        <div className="w-5 h-5 rounded-full absolute bg-purple-500 border-black border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={550} className="z-30">
        <div className="w-5 h-5 rounded-full absolute bg-transparent border-purple-500 border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={700} className="z-20">
        <div className="w-12 h-12 rounded-tr-[100%] rounded-bl-[100%] -rotate-45 absolute bg-white border-black border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={850} className="z-10">
        <div className="w-12 h-12 rounded-tr-[100%] rounded-bl-[100%] -rotate-45 absolute bg-black border-white border border-solid" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={1000}>
        <div className="w-[1px] h-2 bg-white relative bottom-[5px] right-[34px] -rotate-[60deg]" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={1050}>
        <div className="w-[1px] h-[9px] bg-white relative bottom-[19px]" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={1100}>
        <div className="w-[1px] h-2 bg-white relative bottom-[5px] left-[34px] rotate-[60deg]" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={1150}>
        <div className="w-[1px] h-[5px] bg-white relative top-[13px]" />
      </CursorMotionDiv>
    </>
  );
}

export default memo(CursorEye);
