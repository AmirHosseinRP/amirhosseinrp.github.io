"use client";

import CursorMotionDiv from "@/ui/atoms/CursorMotionDiv/CursorMotionDiv";
import ScrollMotionDiv from "@/ui/atoms/ScrollMotionDiv/ScrollMotionDiv";
import Typography from "@/ui/atoms/Typography/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 h-[2000px] relative">
      <Typography tagName="h1">hello</Typography>
      <ScrollMotionDiv>scroll</ScrollMotionDiv>
      <CursorMotionDiv></CursorMotionDiv>
    </main>
  );
}
