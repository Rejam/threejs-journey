"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useControls } from "leva";

import { Cube } from "./cube";
import { Sphere } from "./sphere";
import { Floor } from "./floor";

import type { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { Pyramid } from "./pyramid";

export function PopupScene() {
  const boxRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null!);
  const sphereRef = useRef<Mesh>(null!);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [scale, setScale] = useState(0.7);
  const [color, setColor] = useState(new THREE.Color(255, 0, 0));

  const scene = useSpring({
    rotation: [rotation.x, rotation.y, rotation.z],
    scale: scale,
    color: color,
  });

  // const { rotation: r } = useControls({
  //   rotation: {
  //     value: { x: Math.PI / 8, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  // });

  function onCubeClick() {
    setRotation({ x: 0.16, y: -0.7, z: 0 });
    setScale(0.7);
  }

  function onSphereClick() {
    setRotation({ x: -0.08, y: -3.17, z: 0 });
    setScale(0.5);
  }

  function onPyramidClick() {
    setRotation({ x: -0.26, y: 1.02, z: 0.3 });
    setScale(0.6);
  }

  return (
    <>
      <color attach="background" args={[0xe0b7ff]} />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.5} />
      <PerspectiveCamera />

      <animated.group
        scale={scene.scale}
        rotation={scene.rotation as any}
        // rotation={[r.x, r.y, r.z]}
      >
        <Pyramid onClick={onPyramidClick} />
        <Cube onClick={onCubeClick} />
        <Sphere onClick={onSphereClick} />
        <Floor />
      </animated.group>
    </>
  );
}
