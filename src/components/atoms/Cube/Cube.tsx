"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { memo, useEffect, useRef } from "react";
import { TextureLoader, type Mesh } from "three";

interface Props {
  scrollProgress: MotionValue<number>;
  iconSrc: string;
}

const Cube = (props: Props) => {
  return (
    <div className="border-app w-full h-full p-1">
      <Canvas className="bg-black">
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <CubeMesh scrollProgress={props.scrollProgress} iconSrc={props.iconSrc} />
      </Canvas>
    </div>
  );
};

const CubeMesh = (props: Props) => {
  const mesh = useRef<Mesh>(null);

  const springOptions = {
    damping: 15,
  };

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientY / innerHeight;

    mouse.x.set(x * 2);
    mouse.y.set(y * 2);
  };

  const scrollRotation = useTransform(props.scrollProgress, [0, 1], [0, 5]);

  const combinedRotationX = useTransform(
    [scrollRotation, mouse.y],
    ([scroll, mouseY]) => (scroll as number) + (mouseY as number)
  );

  const combinedRotationY = useTransform(
    [scrollRotation, mouse.x],
    ([scroll, mouseX]) => (scroll as number) + (mouseX as number)
  );

  const smoothRotationX = useSpring(combinedRotationX, springOptions);
  const smoothRotationY = useSpring(combinedRotationY, springOptions);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  const texture = useLoader(TextureLoader, props.iconSrc);

  return (
    <motion.mesh
      // @ts-expect-error
      ref={mesh}
      rotation-x={smoothRotationX}
      rotation-y={smoothRotationY}
    >
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture} />
    </motion.mesh>
  );
};

export default memo(Cube);
