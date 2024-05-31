import { Canvas } from "@react-three/fiber/native";

export function Scene() {
  return <Canvas
    style={{
      width: 300,
      backgroundColor: 'red'
    }}
  >
    <ambientLight intensity={0.5} />

    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial />
    </mesh>
  </Canvas>
}