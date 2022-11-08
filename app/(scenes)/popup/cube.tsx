"use client";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import type { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

type CubeProps = {
  onClick: () => void;
};
export function Cube({ onClick }: CubeProps) {
  const boxRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null!);
  const [isHovered, setIsHovered] = useState(false);

  const { scale } = useSpring({
    scale: isHovered ? 1.2 : 1,
  });

  function onPointerOver() {
    setIsHovered(true);
  }
  function onPointerLeave() {
    setIsHovered(false);
  }

  return (
    <animated.mesh
      ref={boxRef}
      onPointerDown={onClick}
      onPointerOver={onPointerOver}
      onPointerLeave={onPointerLeave}
      position-x={2}
      position-z={1}
      scale={scale}
    >
      <boxGeometry />
      <meshStandardMaterial color={"blue"} />
    </animated.mesh>
  );
}
