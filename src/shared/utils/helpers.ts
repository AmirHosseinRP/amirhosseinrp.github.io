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

const cssExpand: string[] = ["Top", "Right", "Bottom", "Left"];

function genFx(type: string, includeWidth?: boolean): Record<string, string> {
  let which: string;
  let i = 0;
  const attrs: Record<string, string> = { height: type };

  // If we include width, step value is 1 to do all cssExpand values,
  // otherwise step value is 2 to skip over Left and Right

  for (; i < 4; i += 2 - Number(includeWidth)) {
    which = cssExpand[i];
    attrs["margin" + which] = attrs["padding" + which] = type;
  }

  if (includeWidth) {
    attrs.opacity = attrs.width = type;
  }

  return attrs;
}

export const slideToggle = () => genFx("toggle");
