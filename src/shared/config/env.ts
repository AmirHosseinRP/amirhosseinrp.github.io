const env = {
  mode: process.env.NODE_ENV as "development" | "production",
  app: {
    version: process.env.NEXT_PUBLIC_APP_VERSION,
    contactFormId: process.env.NEXT_PUBLIC_APP_CONTACT_FORM_ID,
  },
  links: {
    resumePdf: process.env.NEXT_PUBLIC_RESUME_PDF_LINK,
    resumeDocx: process.env.NEXT_PUBLIC_RESUME_DOCX_LINK,
  },
  api: {
    formSpree: process.env.NEXT_PUBLIC_API_FORMSPREE,
  },
};

export default env;
