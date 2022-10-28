"use client";
import { useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";

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
  const groupRef = useRef<ThreeElements["mesh"]>(null);
  const cubeRef = useRef<ThreeElements["mesh"]>(null);
  const [sphereColor, setSphereColor] = useState<Color>("orange");

  useFrame((_, delta) => {
    cubeRef.current!.rotation.y += 0.03 * delta * 60;
    groupRef.current!.rotation.y += 0.01 * delta * 60;
  });

  const handleChangeSphereColor = () => {
    setSphereColor((current) => {
      const altColors = COLORS.filter((c) => c !== current);
      return altColors[Math.floor(Math.random() * altColors.length)];
    });
  };
  return (
    <>
      <group ref={groupRef}>
        <mesh position-x={-2} onClick={handleChangeSphereColor}>
          <sphereGeometry />
          <meshBasicMaterial color={sphereColor} wireframe />
        </mesh>
        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={Math.PI * -0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
