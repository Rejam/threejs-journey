"use client";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import type { Mesh, MeshBasicMaterial, SphereGeometry } from "three";

type SphereProps = {
  onClick: () => void;
};
export function Sphere({ onClick }: SphereProps) {
  const sphereRef = useRef<Mesh<SphereGeometry, MeshBasicMaterial>>(null!);
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
      ref={sphereRef}
      onPointerDown={onClick}
      onPointerOver={onPointerOver}
      onPointerLeave={onPointerLeave}
      position-x={-1}
      position-z={-2}
      scale={scale}
    >
      <sphereGeometry />
      <meshStandardMaterial color="#eff" />
    </animated.mesh>
  );
}
