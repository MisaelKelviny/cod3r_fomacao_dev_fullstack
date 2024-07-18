import { CircuitBoard } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
      <div className="w-auto text-white font-bold">A Z</div>
      <CircuitBoard className="text-gray-300 size-8" />
    </Link>
  );
}
