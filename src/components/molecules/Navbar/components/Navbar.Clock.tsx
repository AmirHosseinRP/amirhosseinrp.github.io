"use client";

import { memo, useEffect, useState } from "react";
import Typography from "~/components/atoms/Typography/Typography";

const NavbarClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${hours}:${formattedMinutes} ${meridiem}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="label3" className="relative pr-2 bottom-0.5" tagName="p">
      {time}
    </Typography>
  );
};

export default memo(NavbarClock);
