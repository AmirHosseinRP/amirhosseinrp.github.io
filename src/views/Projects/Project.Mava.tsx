import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import BrowserWindow from "~/components/molecules/BrowserWindow/BrowserWindow";
import images from "~/shared/libs/images";

const ProjectsMava = () => {
  return (
    <>
      <BrowserWindow title="Project" subtitle="Ma'va">
        <section className="flex flex-col gap-5 p-5 border-app">
          <Image
            src={images.mava.desktop.src}
            alt={images.mava.desktop.alt}
            width={1000}
            height={1000}
            className="w-full h-auto border-app hidden sm:block xl:hidden"
          />

          <Image
            src={images.mava.mobile.src}
            alt={images.mava.mobile.alt}
            width={1000}
            height={1000}
            className="w-full h-auto border-app block sm:hidden"
          />

          <div className="grid grid-cols-7 gap-5">
            <div className="col-span-7 lg:col-span-5 flex flex-col gap-5">
              <Image
                src={images.mava.desktop.src}
                alt={images.mava.desktop.alt}
                width={1000}
                height={1000}
                className="w-full h-auto border-app hidden xl:block"
              />

              <article className="border-app py-6 px-7 w-full h-full bg-[#f1f1f1]">
                <Typography variant="title1" tagName="h4" className="inline">
                  Ma&apos;va
                </Typography>

                <Typography variant="title2" tagName="p" className="inline">
                  | Housing Deposit Platform{" "}
                </Typography>

                <Link
                  href="https://housing.pod.ir/"
                  target="_blank"
                  className="rp-prose-body2 text-prose-brand underline inline"
                >
                  housing.pod.ir
                </Link>

                <Typography variant="body2" tagName="p">
                  Sep 2023 - Apr 2025 | Associated with dotin
                </Typography>

                <Typography variant="body3" className="list-disc ml-7" tagName="ul">
                  <li>
                    Designed and launched the Housing Deposit Loan service to help tenants obtain rental deposits.
                  </li>
                  <li>
                    Streamlined the loan process through a fully online platform, eliminating the need for in-person
                    visits and guarantors.
                  </li>
                  <li>
                    Enabled fast disbursement of funds and loan deployment to landlords, improving customer satisfaction
                    with rapid response times.
                  </li>
                  <li>
                    Sandbox:{" "}
                    <Link href="https://housing.sandpod.ir/" target="_blank" className="text-prose-brand underline">
                      housing.sandpod.ir
                    </Link>{" "}
                    | Demo video:{" "}
                    <Link href="https://youtu.be/NVpXwc08igk" target="_blank" className="text-prose-brand underline">
                      youtu.be/NVpXwc08igk
                    </Link>{" "}
                  </li>
                </Typography>
              </article>
            </div>

            <Image
              src={images.mava.mobile.src}
              alt={images.mava.mobile.alt}
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

export default memo(ProjectsMava);
