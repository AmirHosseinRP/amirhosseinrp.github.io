import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="w-full min-h-16 flex flex-row justify-between items-center bg-red-300">
      <Typography variant="h5" className="pl-3 h-full flex justify-center items-center">
        Amirhossein
      </Typography>

      <Sidebar />
    </nav>
  );
};

export default memo(Navbar);
