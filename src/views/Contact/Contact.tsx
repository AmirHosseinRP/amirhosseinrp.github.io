"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { memo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "~/components/atoms/Button/Button";
import CardRow from "~/components/molecules/CardRow/CardRow";
import FormField from "~/components/molecules/FormField/FormField";
import Window from "~/components/molecules/Window/Window";
import ContactSvc from "~/shared/services/Contact.service";
import { ContactFormValidationSchema, ContactFormVo } from "./Contact.helpers";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fromMethods = useForm<ContactFormVo>({
    resolver: yupResolver(ContactFormValidationSchema),
  });

  const onSubmit = fromMethods.handleSubmit(async values => {
    try {
      setIsLoading(true);

      await ContactSvc.send(values);

      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  });

  return (
    <section className="flex flex-col mt-8">
      <Window title="Contact" className="w-full">
        <div className="flex flex-col lg:flex-row gap-4 p-4 border-app">
          <div className="p-4 border-app flex flex-col justify-around gap-4 md:gap-10 bg-[#F1F1F1]">
            <CardRow
              label="Email"
              value={
                <Link href="mailto:rezapanah.dev@gmail.com" className="text-prose-brand underline">
                  rezapanah.dev@gmail.com
                </Link>
              }
            />
            <CardRow
              label="Phone"
              value={
                <Link href="tel:+989155509756" className="text-prose-brand underline">
                  +989155509756
                </Link>
              }
            />
            <CardRow
              label="Linkedin"
              value={
                <Link
                  href="https://www.linkedin.com/in/amirhossein-rezapanah-5919a220a/"
                  className="text-prose-brand underline"
                >
                  linkedin.com/in/amirhossein-rezapanah
                </Link>
              }
            />
            <CardRow
              label="Telegram"
              value={
                <Link href="https://t.me/rezapanah" className="text-prose-brand underline">
                  t.me/rezapanah
                </Link>
              }
            />
            <CardRow
              label="GitHub"
              value={
                <Link href="https://github.com/AmirHosseinRP" className="text-prose-brand underline">
                  github.com/AmirHosseinRP
                </Link>
              }
            />
            <CardRow
              label="Stack Overflow"
              value={
                <Link
                  href="https://stackoverflow.com/users/21869708/amirhosseinrp"
                  className="text-prose-brand underline"
                >
                  stackoverflow.com/amirhosseinrp
                </Link>
              }
            />
            <CardRow
              label="GitLab"
              value={
                <Link href="https://gitlab.com/AmirHosseinRP" className="text-prose-brand underline">
                  gitlab.com/AmirHosseinRP
                </Link>
              }
            />
          </div>

          <FormProvider {...fromMethods}>
            <form className="flex flex-col gap-1 border-app p-4 flex-1" onSubmit={onSubmit}>
              <FormField.Text name="name" label="Name" required />

              <FormField.Text name="email" label="Email" required />

              <FormField.Textarea name="message" label="Message" required />

              <Button type="submit" className="min-h-10" isLoading={isLoading} disabled={isLoading}>
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </Window>
    </section>
  );
};

export default memo(Contact);
