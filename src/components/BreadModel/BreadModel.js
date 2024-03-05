import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import '../BreadModel/BreadModel.scss';

function Model({ gltf }) {
    const modelRef = useRef();

    useFrame(() => {
        modelRef.current.rotation.y += 0.003; // Adjust the rotation speed
    });

    return (
        <mesh ref={modelRef} scale={[0.270, 0.270, 0.22]} position={[0, -2.2, 0]} rotation={[0, -1, -0.05]}>
            {gltf ? <primitive object={gltf.scene} /> : null}
        </mesh>
    );
}

function BreadModel() {
    const gltf = useLoader(GLTFLoader, require('../../assets/models/Raccoon_Model.gltf'));

    return (
        <div id='canva'>
            <Canvas>
                <ambientLight intensity={0.2} />
                <pointLight position={[1, 1.5, 2]} />
                <Model gltf={gltf} />
            </Canvas>
        </div>
    );
}

export default BreadModel;
