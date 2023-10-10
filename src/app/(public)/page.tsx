"use client";

import useScrollAmount from "@/shared/hooks/useScrollAmount";

export default function Home() {
  const scrollAmount = useScrollAmount();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 h-[2000px]">
      <h1 style={{ position: "relative", top: `${40 + scrollAmount / 10}vh` }}>{scrollAmount}</h1>
    </main>
  );
}
