"use client";

import * as THREE from "three";
import { extend, ReactThreeFiber } from "@react-three/fiber";
import {
  Center,
  Sparkles,
  useGLTF,
  useTexture,
  shaderMaterial,
} from "@react-three/drei";

import portalVertexShader from "./shaders/vertex";
import portalFragmentShader from "./shaders/fragment";

import type { Mesh } from "three";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      portalMaterial: ReactThreeFiber.Object3DNode<
        typeof PortalMaterial,
        typeof PortalMaterial
      >;
    }
  }
}

export function PortalScene() {
  const portalModel = useGLTF("../portal/portal.glb");
  const portalTexture = useTexture("../portal/baked.jpg");
  portalTexture.flipY = false;

  const portal = portalModel.nodes.baked as Mesh;
  const portalLight = portalModel.nodes.portalLight as Mesh;
  const poleA = portalModel.nodes.poleLightA as Mesh;
  const poleB = portalModel.nodes.poleLightB as any as Mesh;
  return (
    <Center>
      <mesh geometry={portal.geometry}>
        <meshBasicMaterial map={portalTexture} />
      </mesh>
      <mesh
        geometry={portalLight.geometry}
        position={portalLight.position}
        rotation={portalLight.rotation}
      >
        {/* <shaderMaterial
          vertexShader={portalVertexShader}
          fragmentShader={portalFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uColorStart: { value: new THREE.Color("#ffffff") },
            uColorEnd: { value: new THREE.Color("#000000") },
          }}
        /> */}
        <portalMaterial />
      </mesh>
      <mesh geometry={poleA.geometry} position={poleA.position}>
        <meshBasicMaterial color="#ffffe5" />
      </mesh>
      <mesh geometry={poleB.geometry} position={poleB.position}>
        <meshBasicMaterial color="#ffffe5" />
      </mesh>
      <Sparkles
        size={6}
        scale={[4, 2, 4]}
        position-y={1}
        speed={0.2}
        count={40}
      />
    </Center>
  );
}
