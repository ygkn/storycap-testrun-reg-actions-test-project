import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link href="#" className="flex items-center justify-center">
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">Acme SaaS</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      {[
        { title: "Features", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "About", href: "#" },
        { title: "Contact", href: "#" },
      ].map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  </header>
);
