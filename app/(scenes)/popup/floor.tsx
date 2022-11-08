"use client";

export function Floor() {
  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={20}>
      <planeGeometry />
      <meshStandardMaterial color="#eee" />
    </mesh>
  );
}
