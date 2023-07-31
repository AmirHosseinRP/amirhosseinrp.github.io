import useScrollAmount from "@/hooks/useScrollAmount";

export default function Gallery() {
  const scrollAmount = useScrollAmount();
  console.log(scrollAmount);
  return (
    <>
      <div className="w-screen h-96 bg-blue-700"></div>
    </>
  );
}
