"use client";
import { Canvas as R3Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Canvas({ children }: any) {
  return (
    <div className="h-screen">
      <R3Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [1, 2, 6],
        }}
      >
        <OrbitControls />
        {children}
      </R3Canvas>
    </div>
  );
}
