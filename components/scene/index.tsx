"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, MeshReflectorMaterial, Text3D } from "@react-three/drei";
import { useRef } from "react";
import { Group, Mesh } from "three";

export function Scene() {
  return (
    <Canvas>
      <SceneContent />
    </Canvas>
  );
}

export function SceneContent() {
  const textRef = useRef<Group>(null);

  useFrame((state) => {
    const { camera, clock } = state;
    const angle = clock.elapsedTime * 0.8;
    camera.position.x = Math.sin(angle) * 2.5;
    camera.position.y = 1.8;
    camera.position.z = Math.cos(angle) * 2.5;
    textRef.current && camera.lookAt(textRef.current.position);
  });
  return (
    <group>
      <spotLight
        position={[0.5, 2.5, -0.5]}
        intensity={5}
        color="#f00"
        castShadow
        penumbra={1}
      />
      <spotLight
        position={[-0.5, 2.5, 0.5]}
        intensity={5}
        color="#00f"
        castShadow
        penumbra={1}
      />
      {/* <directionalLight position={[1, 2, 3]} intensity={0.8} color="#ffffff" /> */}
      {/* <ambientLight intensity={0.3} /> */}
      {/* <fog attach="fog" color="hotpink" near={1} far={10} /> */}

      <Center disableY ref={textRef}>
        <Text3D font={"HKNova_Bold.json"} castShadow>
          NE6
          {/* <meshPhongMaterial color="#000000" /> */}
          <meshStandardMaterial color="#000000" />
        </Text3D>
      </Center>

      <mesh position-y={0} rotation-x={Math.PI * -0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={10}
          resolution={1024}
          //   blur={0.5}
          //   mixBlur={0.9}
        />
      </mesh>
    </group>
  );
}
