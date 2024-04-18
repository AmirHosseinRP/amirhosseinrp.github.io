export const getCookie = (key: string) => {
  if (typeof document !== "undefined") {
    const cookies: string[] = document.cookie.split(";").map(i => i.trim());
    const cookieStore = new Map<string, string>();

    cookies.forEach(i => {
      const [key, value] = i.split("=");
      cookieStore.set(key, value);
    });

    return cookieStore.has(key) ? cookieStore.get(key) : null;
  }

  return null;
};
