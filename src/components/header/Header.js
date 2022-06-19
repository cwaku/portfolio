import { Canvas } from '@react-three/fiber';

const Header = () => (
  <header>
    <Canvas>
      <group>
        <mesh>
          <meshNormalMaterial />
          <torusBufferGeometry args={[-7, -2, 16, 100]} />
        </mesh>
      </group>
    </Canvas>
  </header>
);

export default Header;
