"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const [positions] = useState(() => {
    const count = 2200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.012;
      ref.current.rotation.y -= delta * 0.008;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4C97EE"
        size={0.09}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[2.2, 0.3, 0]}>
        <icosahedronGeometry args={[1.1, 4]} />
        <MeshDistortMaterial
          color="#264C78"
          distort={0.35}
          speed={1.8}
          roughness={0.1}
          metalness={0.95}
          wireframe={false}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]}   intensity={1.5} color="#4C97EE" />
      <pointLight position={[-5, -5, -3]} intensity={0.8} color="#19324F" />
      <Suspense fallback={null}>
        <StarField />
        <FloatingSphere />
      </Suspense>
    </Canvas>
  );
}
