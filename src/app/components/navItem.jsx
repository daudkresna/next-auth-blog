"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ title, link = title }) => {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link
          href={`/${link}`}
          className={`${
            pathname === `/${link}`
              ? "text-slate-600 font-bold"
              : "text-slate-400"
          } hover:text-slate-600 ease-in-out duration-300 `}
        >
          {title}
        </Link>
      </li>
    </>
  );
};

export default NavItem;
