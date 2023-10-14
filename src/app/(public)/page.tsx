"use client";

import ScrollMotionDiv from "@/ui/atoms/ScrollMotionDiv/ScrollMotionDiv";
import Typography from "@/ui/atoms/Typography/Typography";
import CursorEye from "@/ui/molecules/CursorEye/CursorEye";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  return (
    <>
      {isPageLoaded ? (
        <>
          <CursorEye />
          <main className="flex min-h-screen flex-col items-center justify-start h-[2000px] relative">
            <Typography tagName="h1">hello</Typography>
            <ScrollMotionDiv>scroll</ScrollMotionDiv>
          </main>
        </>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
