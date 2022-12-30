/** @format */

import { Navbar } from "@nextui-org/react";
import Link from "next/link";

// const MENU_ITEMS = [
//   { text: "Home", href: "/" },
//   { text: "About Us", href: "#" },
// ];

const Navigation = () => {
  return (
    <Navbar>
      <Link href="/">Weather Station Demo</Link>
    </Navbar>
  );
};
export default Navigation;
