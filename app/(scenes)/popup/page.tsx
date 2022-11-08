"use client";

import { Canvas } from "../canvas";
import { PopupScene } from "./scene";

export default function Page() {
  return (
    <Canvas useOrbitControls={false}>
      <PopupScene />
    </Canvas>
  );
}
