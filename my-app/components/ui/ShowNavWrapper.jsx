"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function ShowNavWrapper() {
  const pathname = usePathname();
  const showNav = pathname !== "/";

  return showNav ? <NavBar /> : null;
}
