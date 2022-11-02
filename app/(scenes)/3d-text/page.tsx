"use client";
import { Canvas } from "app/(scenes)/canvas";
import { ThreeDTextScene } from "./scene";

export default function Page() {
  return (
    <Canvas>
      <ThreeDTextScene />;
    </Canvas>
  );
}
