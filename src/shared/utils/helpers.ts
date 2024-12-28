export const checkUserDevice = (): "MOBILE_DEVICE" | "DESKTOP_DEVICE" => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
    ? "MOBILE_DEVICE"
    : "DESKTOP_DEVICE";
};

type BrowserType = "OPERA" | "EDGE" | "CHROME" | "SAFARI" | "FIREFOX" | undefined;

export const getBrowserName = (): BrowserType | null => {
  const browserInfo = navigator.userAgent;
  let browser: BrowserType;

  if (browserInfo.includes("Opera") || browserInfo.includes("Opr")) {
    browser = "OPERA";
  } else if (browserInfo.includes("Edg")) {
    browser = "EDGE";
  } else if (browserInfo.includes("Chrome")) {
    browser = "CHROME";
  } else if (browserInfo.includes("Safari")) {
    browser = "SAFARI";
  } else if (browserInfo.includes("Firefox")) {
    browser = "FIREFOX";
  } else {
    browser = undefined;
  }

  return browser ?? null;
};
