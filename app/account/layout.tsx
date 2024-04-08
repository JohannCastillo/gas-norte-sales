"use client";
import NavLink from "@/components/layout/navigation/NavLink";
import { signOut } from "next-auth/react";

import {
  HiOutlineUserCircle,
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
  HiLogout,
} from "react-icons/hi";

const ACCOUNT_LINKS = [
  { href: "/account", text: "Overview", icon: <HiOutlineUserCircle /> },
  { href: "/account/profile", text: "Profile", icon: <HiOutlineUser /> },
  {
    href: "/account/addresses",
    text: "Addresses",
    icon: <HiOutlineLocationMarker />,
  },
  {
    href: "/account/orders",
    text: "Orders",
    icon: <HiOutlineClipboardCheck />,
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 p-4 m-2 md:mt-[60px] md:ml-20 min-h-[65vh]">
      <aside className="col-span-1 p-2">
        <ul className="flex flex-wrap md:flex-col md:justify-evenly md:gap-9">
          {ACCOUNT_LINKS.map(({ href, text, icon }) => {
            return (
              <>
                <NavLink key={text} href={href}>
                  <div className="flex gap-2 items-center">
                    <i>{icon}</i>
                    <span className="text-lg">{text}</span>
                  </div>
                </NavLink>
              </>
            );
          })}
          <button className="px-2 md:px-0 flex items-center gap-2 pb-2"
            onClick={() => signOut()}
          >
            <div className="flex gap-2 items-center text-red-500 hover:text-red-400">
              <i><HiLogout /></i>
              <span className="text-lg">{`Logout`}</span>
            </div>
          </button>
        </ul>
      </aside>

      <section className="col-span-4 p-2">{children}</section>
    </div>
  );
}
