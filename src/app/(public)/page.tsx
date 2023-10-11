"use client";

import ScrollMotionDiv from "@/ui/atoms/ScrollMotionDiv/ScrollMotionDiv";
import Typography from "@/ui/atoms/Typography/Typography";
import CursorEye from "@/ui/molecules/CursorEye/CursorEye";

export default function Home() {
  return (
    <>
      <CursorEye />
      <main className="flex min-h-screen flex-col items-center justify-start h-[2000px] relative">
        <Typography tagName="h1">hello</Typography>
        <ScrollMotionDiv>scroll</ScrollMotionDiv>
      </main>
    </>
  );
}
