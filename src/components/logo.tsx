import { Headphones } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "minimal";
}

export function Logo({ variant = "default" }: LogoProps) {
  return variant === "minimal" ? (
    <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
      <Headphones className="size-6" />
      <span className="sr-only">Acme Inc</span>
    </Link>
  ) : (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Headphones className="size-6" />
      <span>Help Desk</span>
    </Link>
  );
}
