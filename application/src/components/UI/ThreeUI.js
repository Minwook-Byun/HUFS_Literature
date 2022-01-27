import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

const SpiningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default function ThreeUI() {
  return (
    <div className="sm:w-full sm:h-[812px] cursor-move">
      <Canvas
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
        className="w-96 h-96"
        shadowMap
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -30, 0]} intensity={2.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color={'lightyellow'} />
          </mesh>
        </group>
        <SpiningMesh position={[0, 1, 3]} args={[3, 2, 1]} color="red" />
        <SpiningMesh position={[-2, 5, -5]} color="blue" />
        <SpiningMesh position={[6.25, 3, -2]} color="green" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
