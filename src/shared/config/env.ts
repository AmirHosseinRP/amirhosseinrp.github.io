const env = {
  mode: process.env.NODE_ENV as "development" | "production",
  app: {
    version: process.env.NEXT_PUBLIC_APP_VERSION,
  },
  links: {
    resumePdf: process.env.NEXT_PUBLIC_RESUME_PDF_LINK,
    resumeDocx: process.env.NEXT_PUBLIC_RESUME_DOCX_LINK,
  },
};

export default env;
