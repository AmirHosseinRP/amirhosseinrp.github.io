"use client";

import { memo } from "react";
import { changeTheme } from "~/app/actions";

const ThemeToggle = () => {
  function onThemeChange() {
    changeTheme();
  }

  return <button onClick={onThemeChange}>change theme</button>;
};

export default memo(ThemeToggle);
