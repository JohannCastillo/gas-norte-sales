import { NAVBAR_THEME } from "constants/flowbite-themes/navbar-theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      key={href}
      href={href}
      prefetch={false}
      className={`py-2 px-4 md:p-0 ${
        pathname === href
          ? NAVBAR_THEME.navbar?.link?.active?.on
          : NAVBAR_THEME.navbar?.link?.active?.off
      }`}
    >
    { children }
    </Link>
  );
}
