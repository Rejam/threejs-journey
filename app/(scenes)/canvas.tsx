"use client";
import { Canvas as R3Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

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
        <Perf position="top-left" />
        <OrbitControls />
        {children}
      </R3Canvas>
    </div>
  );
}
