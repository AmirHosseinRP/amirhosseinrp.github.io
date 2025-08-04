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
    <section className="flex flex-col mt-16">
      <Window title="Contact" className="z-10 max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
        <div className="p-4 border-app flex flex-col gap-4 bg-[#F1F1F1]">
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
            label="GitHub"
            value={
              <Link href="https://github.com/AmirHosseinRP" className="text-prose-brand underline">
                github.com/AmirHosseinRP
              </Link>
            }
          />
        </div>
      </Window>

      <Window title="Message" className="self-end max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
        <FormProvider {...fromMethods}>
          <form className="flex flex-col gap-1 border-app p-4" onSubmit={onSubmit}>
            <FormField.Text name="name" label="Name" required />

            <FormField.Text name="email" label="Email" required />

            <FormField.Textarea name="message" label="Message" required />

            <Button type="submit" className="min-h-10" isLoading={isLoading} disabled={isLoading}>
              Submit
            </Button>
          </form>
        </FormProvider>
      </Window>
    </section>
  );
};

export default memo(Contact);
