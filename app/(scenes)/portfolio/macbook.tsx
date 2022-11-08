import { Float, Html, useGLTF } from "@react-three/drei";

export function Macbook() {
  const model = useGLTF("./macbook/model.gltf");
  return (
    <Float rotationIntensity={0.2}>
      <primitive
        position-y={-1.2}
        rotation-y={0.8}
        rotation-z={0.03}
        object={model.scene}
      >
        <Html
          transform
          wrapperClass="iframe-website"
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation-x={[-0.256]}
        >
          <iframe src="https://www.ne6.studio" />
        </Html>
      </primitive>
    </Float>
  );
}
