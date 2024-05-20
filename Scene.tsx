import { Canvas } from "@react-three/fiber/native";

export function Scene() {
  return <Canvas
    style={{
      width: 300,
      backgroundColor: 'red'
    }}
  >
    <ambientLight intensity={0.15} />
    <directionalLight position={[2, 5, 7]} intensity={0.6} />
    <directionalLight position={[-1, -5, -7]} intensity={0.7} />

    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial />
    </mesh>
  </Canvas>
}