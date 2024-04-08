"use client";

import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import { NAVBAR_THEME } from "constants/flowbite-themes/navbar-theme";
import Link from "next/link";
import NavLink from "./NavLink";
import { useAppContext } from "context/appContext";

const NAVLINKS = [
  // { href: "/search", text: "Search" },
  { href: "/ventas", text: "Ventas" },
  { href: "/products", text: "Productos" },
];

export default function NavBar() {
  const context = useAppContext();
  
  return (
    <Navbar fluid rounded theme={NAVBAR_THEME.navbar}>
      <Navbar.Brand as={Link} href={'/'}>
        <Image
          src={"/images/logo.png"}
          alt="Ecommerce Logo"
          width={50}
          height={50}
          className="mr-3"
          priority
        />
        <span className="self-center whitespace-nowrap text-xl text-gray-700 dark:text-gray-300 tracking-tight font-extrabold">
          Gas Norte
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        {NAVLINKS.map(({ href, text }) => (
          <NavLink key={href} href={href}> 
            {text}
          </NavLink>
        ))}
        {/* <NavLink 
          href={'/cart'}
        >
          <span 
            onMouseEnter={() => context.toggleCartVisible(true)}
            onMouseLeave={() => context.toggleCartVisible(false)}
          >Cart (0)</span>
        </NavLink> */}
        <i className="w-[21px]">
          <DarkThemeToggle />
        </i>
      </Navbar.Collapse>
    </Navbar>
  );
}
