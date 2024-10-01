"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/blue.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Create Posts", href: "/createPosts" },
];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src={Logo}
          className="w-[35px] h-[35px] bg-transparent"
          height={35}
          width={35}
          alt="logo"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={` ${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
