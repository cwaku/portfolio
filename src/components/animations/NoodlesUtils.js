/* eslint-disable react/prop-types */
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';

export function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 1.5, -5]}
      lineHeight={0.8}
      font="DM Sans"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
}

export function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05);
  });
}

export function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  );
}
