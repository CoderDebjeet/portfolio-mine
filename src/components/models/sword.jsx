"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sword = React.memo(function Staff(props) {
    // Use React.memo for performance optimization
    const { nodes, materials } = useGLTF("/models/sword-transformed.glb");
    const modelRef = useRef();
    useFrame(() => {
        modelRef.current.rotation.y += 0.007;
      });
  return (
    <group {...props}
    dispose={null}
    scale={[2.9, 2.9, 2.9]}
    position={[0.5, 0.22, 0]}
    ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.lambert1}
      />
    </group>
  )
});

export default Sword;

useGLTF.preload('/models/sword-transformed.glb')