"use client";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import type { Mesh, MeshBasicMaterial, TetrahedronGeometry } from "three";

type PyramidProps = {
  onClick: () => void;
};
export function Pyramid({ onClick }: PyramidProps) {
  const boxRef = useRef<Mesh<TetrahedronGeometry, MeshBasicMaterial>>(null!);
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
      position-x={-2}
      position-z={2}
      scale={scale}
      rotation={[2.2, 0.4, 0.1]}
    >
      <tetrahedronGeometry />
      <meshStandardMaterial color={"yellow"} />
    </animated.mesh>
  );
}
