import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import BrowserWindow from "~/components/molecules/BrowserWindow/BrowserWindow";
import images from "~/shared/libs/images";

const ProjectsPodCharge = () => {
  return (
    <>
      <BrowserWindow title="Project" subtitle="PodCharge">
        <section className="flex flex-col gap-5 p-5 border-app">
          <Image
            src={images.podcharge.desktop.src}
            alt={images.podcharge.desktop.alt}
            width={1000}
            height={1000}
            className="w-full h-auto border-app hidden sm:block"
          />

          <Image
            src={images.podcharge.mobile.src}
            alt={images.podcharge.mobile.alt}
            width={1000}
            height={1000}
            className="w-full h-auto border-app block sm:hidden"
          />

          <div className="grid grid-cols-7 gap-5">
            <article className="border-app col-span-7 lg:col-span-5 py-6 px-7 w-full h-full bg-[#f1f1f1]">
              <Typography variant="title1" tagName="h4" className="inline">
                PodCharge (PWA)
              </Typography>

              <Typography variant="title2" tagName="p" className="inline">
                | Condo Management Platform |{" "}
              </Typography>

              <Link
                href="https://web.podcharge.ir/"
                target="_blank"
                className="rp-prose-body2 text-prose-brand underline inline"
              >
                web.podcharge.ir
              </Link>

              <Typography variant="body2" tagName="p">
                Mar 2023 - Present | Associated with dotin
              </Typography>

              <Typography variant="body3" className="list-disc ml-7" tagName="ul">
                <li>
                  PodCharge is a smart building management system designed to optimize financial and non-financial
                  operations.
                </li>
                <li>
                  Facilitated all the financial transactions by residents and building managers, such as charge
                  management, payment of expenses, fund transfers, utility bill payments, and payment reporting, through
                  a single combined platform.
                </li>
                <li>
                  Combined functionality for non-financial operations, such as resident communication tools, rule and
                  event management, and unit and common area management.
                </li>
                <li>
                  Sandbox:{" "}
                  <Link href="https://hamsayeh.sandpod.ir/" target="_blank" className="text-prose-brand underline">
                    hamsaye.sandpod.ir
                  </Link>{" "}
                  | Demo video:{" "}
                  <Link href="https://youtu.be/jrbDXbjPiYw" target="_blank" className="text-prose-brand underline">
                    youtu.be/jrbDXbjPiYw
                  </Link>{" "}
                </li>
              </Typography>
            </article>

            <Image
              src={images.podcharge.mobile.src}
              alt={images.podcharge.mobile.alt}
              width={1000}
              height={1000}
              className="w-auto h-full col-span-2 border-app hidden lg:block"
            />
          </div>
        </section>
      </BrowserWindow>
    </>
  );
};

export default memo(ProjectsPodCharge);
