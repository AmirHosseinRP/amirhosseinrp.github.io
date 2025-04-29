import { memo } from "react";
import NavbarMenuItem from "./Navbar.MenuItem";

const NavbarMenu = () => {
  return (
    <ul className="hidden sm:flex justify-start items-stretch gap-1 h-full">
      <NavbarMenuItem>File</NavbarMenuItem>
      <NavbarMenuItem>Edit</NavbarMenuItem>
      <NavbarMenuItem>Go</NavbarMenuItem>
      <NavbarMenuItem>Window</NavbarMenuItem>
      <NavbarMenuItem>Help</NavbarMenuItem>
    </ul>
  );
};

export default memo(NavbarMenu);
