"use client";

export function changeTheme() {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);

  document.documentElement.classList.remove(currentTheme);
  document.documentElement.classList.add(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
}
