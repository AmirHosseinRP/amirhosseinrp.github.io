import * as yup from "yup";

/**
 * :::: CUSTOM YUP CONFIG ::::
 */

yup.setLocale({
  mixed: {
    required: "this field is required",
  },
  string: {
    email: "invalid email address",
  },
});

export default yup;
