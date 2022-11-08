"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

import type { Mesh } from "three";

export function BasicScene() {
  const cube = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  const { position, color } = useControls({
    position: {
      value: { x: -1, y: 0, z: 0 } as const,
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
  });
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position={[position.x, position.y, position.z]}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
