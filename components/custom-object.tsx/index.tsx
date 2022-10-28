import { use, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export const CustomObject = () => {
  const geometryRef = useRef<THREE.BufferGeometry>(null!);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  const { verticesCount, positions } = useMemo(() => {
    const triangles = 10;
    const verticesCount = triangles * 3; // 3 vertices per triangle
    // x,y,z position per vertice
    const positions = new Float32Array(verticesCount * 3).map((position) => {
      return (Math.random() - 0.5) * 3;
    });
    return {
      verticesCount,
      positions,
    };
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
};
