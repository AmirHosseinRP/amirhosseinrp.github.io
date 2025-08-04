import axios from "axios";
import env from "~/shared/config/env";

export type ContactSendPayload = {
  name: string;
  email: string;
  message: string;
};

const ContactSvc = {
  send: async (payload: ContactSendPayload) => {
    if (env.api.formSpree && env.app.contactFormId)
      return await axios.post(`${env.api.formSpree}/${env.app.contactFormId}`, payload);
  },
};

export default ContactSvc;
