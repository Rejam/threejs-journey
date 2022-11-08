"use client";
import { Camera, Canvas as R3Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

type CanvasProps = {
  children: JSX.Element;
  camera?: Camera;
  useOrbitControls?: boolean;
  usePerf?: boolean;
};
export function Canvas({
  children,
  camera,
  useOrbitControls = true,
  usePerf = true,
}: CanvasProps) {
  return (
    <div className="h-screen">
      <R3Canvas
        flat
        camera={
          camera || {
            fov: 45,
            near: 0.1,
            far: 50,
            position: [1, 2, 6],
          }
        }
      >
        {usePerf ? <Perf position="top-left" /> : null}
        {useOrbitControls ? <OrbitControls /> : null}
        {children}
      </R3Canvas>
    </div>
  );
}
