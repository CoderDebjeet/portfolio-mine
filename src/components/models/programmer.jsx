"use client"
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export default function Prog(props) {
  const { nodes, materials } = useGLTF('/models/prog-transformed.glb')
  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group {...props} dispose={null}
    
    ref={modelRef}
    position={[0, 100, -1]}
    scale={[1.5, 1.5, 1.5]}
    rotation={[1.5,1.5,1.5]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_0.geometry}
        material={materials.laptop_tex}
        position={[-0.033, -0.467, 0.442]}
        rotation={[0.808, 0, 0]}
        scale={0.149}
      />
      <primitive object={nodes.my_rig_rootJoint} />
      <skinnedMesh
        geometry={nodes.hair_0.geometry}
        material={materials.cloth}
        skeleton={nodes.hair_0.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.hair_1.geometry}
        material={materials.solidify}
        skeleton={nodes.hair_1.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.me_0.geometry}
        material={materials.body}
        skeleton={nodes.me_0.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.me_1.geometry}
        material={materials.solidify}
        skeleton={nodes.me_1.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.me002_0.geometry}
        material={materials.cloth}
        skeleton={nodes.me002_0.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.me002_1.geometry}
        material={materials.solidify}
        skeleton={nodes.me002_1.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.kemeja_0.geometry}
        material={materials.cloth}
        skeleton={nodes.kemeja_0.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.kemeja_1.geometry}
        material={materials.solidify}
        skeleton={nodes.kemeja_1.skeleton}
        position={[0, -0.086, -0.752]}
        rotation={[-0.308, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bool1185_0.geometry}
        material={materials.Material}
        position={[2.403, -0.428, -0.752]}
        rotation={[-2.035, 0.296, -0.932]}
        scale={0.106}
      />
    </group>
  )
}

useGLTF.preload('/models/prog-transformed.glb')
