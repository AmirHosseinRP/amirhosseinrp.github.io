import Image from "next/image";
import { memo } from "react";
import CursorMotion from "~/components/atoms/CursorMotion/CursorMotion";
import icons from "~/shared/libs/icons";

const Eye = () => {
  const delay = 0.2;

  return (
    <>
      <CursorMotion duration={delay * 6.5}>
        <Image
          src={icons.eye.eyelash1.src}
          alt={icons.eye.eyelash1.alt}
          width={18}
          height={18}
          className="relative bottom-[1.125rem] right-[4.5rem]"
        />
      </CursorMotion>

      <CursorMotion duration={delay * 5.5}>
        <Image
          src={icons.eye.eyelash2.src}
          alt={icons.eye.eyelash2.alt}
          width={15}
          height={15}
          className="relative bottom-10 right-10"
        />
      </CursorMotion>

      <CursorMotion duration={delay * 4.5}>
        <Image
          src={icons.eye.eyelash3.src}
          alt={icons.eye.eyelash3.alt}
          width={10}
          height={10}
          className="relative bottom-12"
        />
      </CursorMotion>

      <CursorMotion duration={delay * 3.5}>
        <Image
          src={icons.eye.eyelash4.src}
          alt={icons.eye.eyelash4.alt}
          width={15}
          height={15}
          className="relative bottom-10 left-10"
        />
      </CursorMotion>

      <CursorMotion duration={delay * 2.5}>
        <Image
          src={icons.eye.eyelash5.src}
          alt={icons.eye.eyelash5.alt}
          width={18}
          height={18}
          className="relative bottom-[1.125rem] left-[4.5rem]"
        />
      </CursorMotion>

      <CursorMotion duration={delay * 2}>
        <Image src={icons.eye.layout.src} alt={icons.eye.layout.alt} width={130} height={60} />
      </CursorMotion>

      <CursorMotion duration={delay}>
        <Image src={icons.eye.iris.src} alt={icons.eye.iris.alt} width={40} height={40} />
      </CursorMotion>

      <CursorMotion duration={0}>
        <Image src={icons.eye.pupil.src} alt={icons.eye.pupil.alt} width={12} height={12} />
      </CursorMotion>
    </>
  );
};

export default memo(Eye);
