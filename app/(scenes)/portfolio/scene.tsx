"use client";

import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Macbook } from "./macbook";

export function BasicScene() {
  return (
    <>
      <color args={["#333"]} attach="background" />
      <Environment preset="night" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{
          mass: 2,
          tension: 400,
        }}
        snap={{
          mass: 4,
          tension: 400,
        }}
      >
        <Macbook />
      </PresentationControls>
      <ContactShadows position-y={-1.4} scale={5} opacity={0.8} blur={2} />
    </>
  );
}
