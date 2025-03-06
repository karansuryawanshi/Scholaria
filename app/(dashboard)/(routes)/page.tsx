import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* <p>Hello this is Signout</p> */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
