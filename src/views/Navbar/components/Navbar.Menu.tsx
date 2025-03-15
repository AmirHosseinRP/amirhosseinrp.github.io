import { memo } from "react";
import NavbarMenuItem from "./Navbar.MenuItem";

const NavbarMenu = () => {
  return (
    <ul className="hidden md:flex justify-start items-stretch gap-1 h-full">
      <NavbarMenuItem>Item1</NavbarMenuItem>
      <NavbarMenuItem>Item1</NavbarMenuItem>
      <NavbarMenuItem>Item1</NavbarMenuItem>
      <NavbarMenuItem>Item1</NavbarMenuItem>
      <NavbarMenuItem>Item1</NavbarMenuItem>
    </ul>
  );
};

export default memo(NavbarMenu);
