"use client"
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export default function Iron(props) {
  const { nodes, materials } = useGLTF('/models/iron-transformed.glb')
  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0, -1.5, 0]}
    scale={[0.006, 0.006, 0.006]}
    rotation={[0.25, 0, 0]}
    >
      
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_474.geometry}
        material={materials.COC_iOS_HER_TST_VII_B}
        skeleton={nodes.Object_474.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <skinnedMesh
        geometry={nodes.Object_475.geometry}
        material={materials['Material.002']}
        skeleton={nodes.Object_475.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere__0.geometry}
        material={materials.Sphere__0}
        position={[-80.9945755, 411.981781, 302.0403137]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/iron-transformed.glb')