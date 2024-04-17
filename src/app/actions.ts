"use server";

import { Cookie } from "@/shared/config/enums";
import { cookies } from "next/headers";

export async function changeTheme() {
  const cookieStore = cookies();
  const theme = cookieStore.get(Cookie.THEME)?.value ?? "light";

  if (theme === "light") {
    const now = new Date();
    const expires = now.setFullYear(now.getFullYear() + 10); // expires in 10 years

    cookieStore.set(Cookie.THEME, "dark", { expires });
  } else {
    cookieStore.delete(Cookie.THEME);
  }
}
