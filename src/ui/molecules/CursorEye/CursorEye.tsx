import CursorMotionDiv from "@/ui/atoms/CursorMotionDiv/CursorMotionDiv";

export default function CursorEye() {
  return (
    <>
      <CursorMotionDiv behavior="fixed" className="z-10" delay={100}>
        <div className="w-4 h-4 rounded-full absolute bg-blue-600" />
      </CursorMotionDiv>
      <CursorMotionDiv behavior="fixed" delay={250}>
        <div className="w-10 h-10 rounded-full absolute bg-red-600" />
      </CursorMotionDiv>
    </>
  );
}
