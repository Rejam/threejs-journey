"use client";

import { Canvas } from "../canvas";
import { BasicScene } from "./scene";

export default function Page() {
  return (
    <Canvas useOrbitControls={false} usePerf={false}>
      <BasicScene />
    </Canvas>
  );
}
