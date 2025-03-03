import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-xl font-semibold text-neutral-600"> Hello Buddy</p>;
      <Button className="font-thin hover:scale-110">Hello Buddy</Button>
    </div>
  );
}
