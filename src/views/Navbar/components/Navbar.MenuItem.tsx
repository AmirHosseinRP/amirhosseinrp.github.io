import { memo, PropsWithChildren } from "react";
import Typography from "~/components/atoms/Typography/Typography";

const NavbarMenuItem = (props: PropsWithChildren) => {
  return (
    <Typography
      variant="label3"
      tagName="li"
      className="btn-app h-full flex justify-center items-center px-3 max-h-[29px] relative top-[3px] pb-0.5 cursor-pointer select-none"
    >
      {props.children}
    </Typography>
  );
};

export default memo(NavbarMenuItem);
