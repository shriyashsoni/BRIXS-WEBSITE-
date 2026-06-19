'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      time.current += 0.005;
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = Math.sin(time.current) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe={false}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      time.current += 0.004;
      meshRef.current.rotation.x += 0.0015;
      meshRef.current.rotation.z += 0.0025;
      meshRef.current.position.x = Math.cos(time.current) * 2;
      meshRef.current.position.y = Math.sin(time.current * 0.7) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -3]}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe={true}
        emissive="#ffffff"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function FloatingTetrahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      time.current += 0.003;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.001;
      meshRef.current.position.x = Math.sin(time.current) * 2.5;
      meshRef.current.position.z = Math.cos(time.current) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, -3]}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe={false}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
    </>
  );
}

function Hero3DScene() {
  return (
    <>
      <SceneLights />
      <FloatingBox />
      <FloatingOctahedron />
      <FloatingTetrahedron />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
      />
    </>
  );
}

export function AnimatedHero3D() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['#000000']} />
        <Hero3DScene />
      </Canvas>
    </div>
  );
}
