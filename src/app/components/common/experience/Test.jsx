import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function GLTFViewer() {
  const group = useRef();
  const { nodes, materials } = useGLTF('/test.gltf');

  console.log(Object.keys(nodes));

  const getMaterial = (materialName) => {
    const baseMaterial = materials[materialName] || materials.Gold;
    return new THREE.MeshStandardMaterial({
      ...baseMaterial,
    //   metalness: 0.85,
    //   roughness: 0.3,
    });
    // create a pearl material with color
    // create a silver material with color
    // create a diamond material with color
  };

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        {/* Left side components */}
        <mesh
          name="Med_L2"
          geometry={nodes['Med_L2'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[-72.991257, 0.01064, 1.195336]}
          visible={true}
        />
        <mesh
          name="Med_L1"
          geometry={nodes['Med_L1'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.118947, 3.118947, 3.118947]}
          position={[-76.490509, -0.085047, 1.820568]}
          visible={false}
        />
        <mesh
          name="Med_L5"
          geometry={nodes['Med_L5'].geometry}
          material={getMaterial('Gold')}
          rotation={[0, -Math.PI / 2, Math.PI / 2]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[-74.713394, 0.085592, 1.714561]}
          visible={false}
        />
        <mesh
          name="Med_L3"
          geometry={nodes['Med_L3'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.907253, 2.907253, 2.907253]}
          position={[-72.103935, 0.966494, 2.104294]}
          visible={true}
        />
        <mesh
          name="Med_L6"
          geometry={nodes['Med_L6'].geometry}
          material={getMaterial('Gold')}
          rotation={[0, -Math.PI / 2, Math.PI / 2]}
          scale={[2.824079, 2.824079, 2.824079]}
          position={[-69.627373, 0.152392, 0.101293]}
          visible={false}
        />
        <mesh
          name="Med_L4"
          geometry={nodes['Med_L4'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.97331, 2.97331, 2.97331]}
          position={[-72.830238, -0.019919, 0.089231]}
          visible={false}
        />

        <mesh
          name="Med_R2"
          geometry={nodes['Med_R2'].geometry}
          material={getMaterial('Silver')}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[77.866936, 0.01064, 1.146428]}
          visible={false}
        />
        <mesh
          name="Med_R1"
          geometry={nodes['Med_R1'].geometry}
          material={getMaterial('Silver')}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          scale={[3.118947, 3.118947, 3.118947]}
          position={[81.366203, -0.085047, 0.521196]}
          visible={false}
        />
        <mesh
          name="Med_R5"
          geometry={nodes['Med_R5'].geometry}
          material={getMaterial('Silver')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[79.589081, 0.085592, 0.627203]}
          visible={false}
        />
        <mesh
          name="Med_R3"
          geometry={nodes['Med_R3'].geometry}
          material={getMaterial('Silver')}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          scale={[2.907253, 2.907253, 2.907253]}
          position={[76.979622, 0.966494, 0.23747]}
          visible={false}
        />
        <mesh
          name="Med_R6"
          geometry={nodes['Med_R6'].geometry}
          material={getMaterial('Silver')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.824079, 2.824079, 2.824079]}
          position={[74.503052, 0.152392, 2.240469]}
          visible={false}
        />
        <mesh
          name="Med_R4"
          geometry={nodes['Med_R4'].geometry}
          material={getMaterial('Silver')}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          scale={[2.973311, 2.973311, 2.973311]}
          position={[77.705925, -0.019919, 2.252535]}
          visible={false}
        />

        <mesh
          name="lock03_Top"
          geometry={nodes['lock03_Top'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.161004, 3.161004, 3.161004]}
          position={[-11.622174, -0.406537, -90.467247]}
          visible={false}
        />
        <mesh
          name="lock04_Top"
          geometry={nodes['lock04_Top'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[-5.406745, -0.731141, -88.978966]}
          visible={false}
        />
        <mesh
          name="lock02_Top"
          geometry={nodes['lock02_Top'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[2.02104, 0.001509, -93.361671]}
          visible={false}
        />
        <mesh
          name="lock01_Top"
          geometry={nodes['lock01_Top'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[-4.295827, 0.007534, -95.519226]}
          visible={false}
        />
        <mesh
          name="lock05_Top"
          geometry={nodes['lock_05_Top'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 4, -Math.PI / 4, Math.PI / 4]}
          scale={[3.048665, 3.048665, 3.048665]}
          position={[2.850925, 0.01064, -93.989166]}
          visible={false}
        />

        <mesh
          name="lock03_Bot"
          geometry={nodes['lock03_Bot'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.161004, 3.161004, 3.161004]}
          position={[-11.622174, -0.406537, 100.553932]}
          visible={false}
        />
        <mesh
          name="lock04_Bot"
          geometry={nodes['lock04_Bot'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[-5.406745, -0.731141, 102.042213]}
          visible={false}
        />
        <mesh
          name="lock02_Bot"
          geometry={nodes['lock02_Bot'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[2.02104, 0.001509, 97.6595]}
          visible={false}
        />
        <mesh
          name="lock01_Bot"
          geometry={nodes['lock01_Bot'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.099536, 3.099536, 3.099536]}
          position={[-4.295827, 0.007534, 95.501923]}
          visible={false}
        />
        <mesh
          name="lock05_Bot"
          geometry={nodes['lock_05_Bot'].geometry}
          material={getMaterial('Gold')}
          rotation={[Math.PI / 4, -Math.PI / 4, Math.PI / 4]}
          scale={[3.048665, 3.048665, 3.048665]}
          position={[2.850925, 0.01064, 97.031982]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Testing small itemsV2.gltf');