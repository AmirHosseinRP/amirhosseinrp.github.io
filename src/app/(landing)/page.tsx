"use client";

import BottomSheet from "@/components/atoms/BottomSheet/BottomSheet";
import Typography from "@/components/atoms/Typography/Typography";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Modal
        toggler={<button onClick={() => setIsOpen(true)}>click</button>}
        isOpen={isOpen}
        onToggle={() => setIsOpen(false)}
      >
        <Typography>
          hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam maxime est
          officia. Assumenda iste quasi quas cupiditate fugiat, sed fuga consequatur nulla
          necessitatibus in? Fuga commodi veniam tempora quas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab numquam maxime est officia. Assumenda iste quasi quas
          cupiditate fugiat, sed fuga consequatur nulla necessitatibus in? Fuga commodi veniam
          tempora quas? Lorem ipsum dolor sit amet consectetur adipisicing elit necessitatibus in?
          Fuga commodi veniam tempora quas?
        </Typography>
      </Modal> */}

      <button onClick={() => setIsOpen(true)}>open</button>

      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="test">
        <BottomSheet.Body>
          <Typography>
            hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam maxime est
            officia. Assumenda iste quasi quas cupiditate fugiat, sed fuga consequatur nulla
            necessitatibus in? Fuga commodi veniam tempora quas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ab numquam maxime est officia. Assumenda iste quasi quas
            cupiditate fugiat, sed fuga consequatur nulla necessitatibus in? Fuga commodi veniam
            tempora quas? Lorem ipsum dolor sit amet consectetur adipisicing elit necessitatibus in?
            Fuga commodi veniam tempora quas?hello Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab numquam maxime est officia. Assumenda iste quasi quas cupiditate
            fugiat, sed fuga consequatur nulla necessitatibus in? Fuga coms in? Fuga commodi veniam
            tempora quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam maxime
            est officia. Assumenda iste quasi quas cupiditate fugiat, sed fuga consequatur nulla
            necessitatibus in? Fuga commodi veniam tempora quas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit necessitatibus in? Fuga commodi veniam tempora quas?hello
            Lorem ipsum dolor sit amet consecteturt. Ab numquam maxime est officia. Assumenda iste
            quasi quas cupiditate fugiat, sed fuga consequatur nulla necessitatibus in? Fuga commodi
            veniam tempora quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            maxime est officia. Assumenda iste quasi quas cupiditate fugiat, sed fuga consequatur
            nulla necessitatibus in? Fuga commodi veniam tempora quas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit necessitatibus in? Fuga commodi veniam tempora quas?
          </Typography>
        </BottomSheet.Body>
      </BottomSheet>
    </>
  );
}
