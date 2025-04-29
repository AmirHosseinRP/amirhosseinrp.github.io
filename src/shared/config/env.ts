const env = {
  mode: process.env.NODE_ENV as "development" | "production",
  app: {
    version: process.env.NEXT_PUBLIC_APP_VERSION,
  },
  links: {
    resume: process.env.NEXT_PUBLIC_RESUME_LINK,
  },
};

export default env;
