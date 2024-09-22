"use client";

import { memo, useState } from "react";
import BottomSheet from "../atoms/BottomSheet/BottomSheet";

const TestSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>open</button>

      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BottomSheet.Body>
          lorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jdslorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f;
          lajsd;lfkasd;l jds lorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jdslorem;lkasjdfa sdalk j;laskd
          fklasd ;lkjd f; lajsd;lfkasd;l jds lorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jdskasd;l
          jdslorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jds lorem;lkasjdfa sdalk j;laskd fklasd ;lkjd
          f; lajsd;lfkasd;l jdslorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jds lorem;lkasjdfa sdalk
          j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jdskasd;l jdslorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f;
          lajsd;lfkasd;l jds lorem;lkasjdfa sdalk j;laskd fklasd ;lkjd f; lajsd;lfkasd;l jdslorem;lkasjdfa sdalk
          lajsd;lfkasd;l jds
        </BottomSheet.Body>
      </BottomSheet>
    </>
  );
};

export default memo(TestSection);
