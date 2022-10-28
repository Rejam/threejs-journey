"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { CustomObject } from "components/custom-object.tsx";

import type { Group, Mesh } from "three";

export function Scene() {
  return (
    <Canvas>
      <SceneContent />
    </Canvas>
  );
}

const COLORS = ["blue", "orange", "red", "green"] as const;
type Color = typeof COLORS[number];

export function SceneContent() {
  const groupRef = useRef<Group>(null!);
  const cubeRef = useRef<Mesh>(null!);
  const [sphereColor, setSphereColor] = useState<Color>("orange");

  useFrame((_, delta) => {
    cubeRef.current.rotation.y += 0.01 * delta * 60;
    groupRef.current.rotation.y += 0.01 * delta * 60;
  });

  const handleChangeSphereColor = () => {
    setSphereColor((current) => {
      const altColors = COLORS.filter((c) => c !== current);
      return altColors[Math.floor(Math.random() * altColors.length)];
    });
  };
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.1} />
      <ambientLight intensity={0.3} />
      <group ref={groupRef}>
        <mesh position-x={-2} onClick={handleChangeSphereColor}>
          <sphereGeometry />
          <meshStandardMaterial color={sphereColor} />
        </mesh>
        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={Math.PI * -0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </>
  );
}
