import { menu } from "@/utils/menu";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {menu.map(({ title, href, icon: Icon }) => (
        <Link
          key={title}
          href={href}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon className="size-4" />
          {title}
        </Link>
      ))}
    </nav>
  );
}
