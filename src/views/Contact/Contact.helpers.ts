import yup from "~/shared/config/yup";

export type ContactFormVo = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormValidationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});
