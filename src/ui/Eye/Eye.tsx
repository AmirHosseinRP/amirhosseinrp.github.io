import { memo } from "react";
import CursorMotion from "~/components/atoms/CursorMotion/CursorMotion";

const Eye = () => {
  const delay = 0.2;

  return (
    <>
      {/* eyelash 1 */}
      <CursorMotion duration={delay * 4}>
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          className="relative bottom-3 right-[4.5rem]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12.5C8.99318 9.49684 5.99659 6.49368 3 3.5L12 12.5Z" fill="black" />
          <path
            d="M12 12.5C8.99318 9.49684 5.99659 6.49368 3 3.5"
            stroke="white"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>

      {/* eyelash 2 */}
      <CursorMotion duration={delay * 3.75}>
        <svg
          width="15"
          height="21"
          viewBox="0 0 15 21"
          fill="none"
          className="relative bottom-9 right-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 17C8.66323 12.66 6.32647 8.33 4 4L11 17Z" fill="black" />
          <path
            d="M11 17C8.66323 12.66 6.32647 8.33 4 4"
            stroke="white"
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>

      {/* eyelash3 */}
      <CursorMotion duration={delay * 3.5}>
        <svg
          width="8"
          height="22"
          viewBox="0 0 8 22"
          fill="none"
          className="relative bottom-11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 18C4.00003 13.33 4.00007 8.66 4.0001 4L4 18Z" fill="black" />
          <path
            d="M4 18C4.00003 13.33 4.00007 8.66 4.0001 4"
            stroke="white"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>

      {/* eyelash 4 */}
      <CursorMotion duration={delay * 3.25}>
        <svg
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          className="relative bottom-9 left-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.79999 17.3C5.46345 12.9598 7.12691 8.62991 8.79999 4.29999L3.79999 17.3Z" fill="black" />
          <path
            d="M3.79999 17.3C5.46345 12.9598 7.12691 8.62991 8.79999 4.29999"
            stroke="white"
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>

      {/* eyelash 5 */}
      <CursorMotion duration={delay * 3.5}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="relative bottom-3 left-[4.5rem]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.79999 12.5C6.79367 9.49684 9.79683 6.49368 12.8 3.5L3.79999 12.5Z" fill="black" />
          <path
            d="M3.79999 12.5C6.79367 9.49684 9.79683 6.49368 12.8 3.5"
            stroke="white"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>

      {/* 3: iris */}
      <CursorMotion duration={delay * 2}>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26 48C38.1503 48 48 38.1503 48 26C48 13.8497 38.1503 4 26 4C13.8497 4 4 13.8497 4 26C4 38.1503 13.8497 48 26 48Z"
            stroke="#3990E2"
            strokeWidth="7"
            strokeMiterlimit="10"
          />
        </svg>
      </CursorMotion>

      {/* 4: iris border */}
      <CursorMotion duration={delay * 2.5}>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26 51C39.8071 51 51 39.8071 51 26C51 12.1929 39.8071 1 26 1C12.1929 1 1 12.1929 1 26C1 39.8071 12.1929 51 26 51Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </CursorMotion>

      {/* 5: eye layout */}
      <CursorMotion duration={delay * 3}>
        <svg
          width="128"
          height="64"
          viewBox="0 0 128 64"
          fill="none"
          className="relative top-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 32.5C40 70.3255 92.3 69.3379 124 32.5"
            stroke="white"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 32.4487C40 -5.37677 92.3 -4.38916 124 32.4487"
            stroke="white"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>

      {/* 1: pupil */}
      <CursorMotion duration={delay}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5229 4.47715 20 10 20Z"
            fill="white"
          />
        </svg>
      </CursorMotion>

      {/* 2: pupil border */}
      <CursorMotion duration={delay * 1.5}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92486 18.0751 1 12 1C5.92486 1 1 5.92486 1 12C1 18.0751 5.92486 23 12 23Z"
            stroke="#3990E2"
            strokeWidth="2"
          />
        </svg>
      </CursorMotion>

      {/* 0: pupil plus */}
      <CursorMotion duration={0}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.89999 16C8.90002 11.33 8.90006 6.66 8.90009 2"
            stroke="#3990E2"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 9.09998C11.33 9.09995 6.66 9.09991 2 9.09988"
            stroke="#3990E2"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CursorMotion>
    </>
  );
};

export default memo(Eye);
