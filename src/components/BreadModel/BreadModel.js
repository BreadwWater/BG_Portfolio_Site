import { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function BreadModel() {
    const gltf = useLoader(GLTFLoader, require('../../assets/models/Bred.gltf'));

    return (
        <Suspense>
            <Canvas>
                <>
                    <mesh scale={[1, 1, 1]}> {/* Adjust the scale values as needed */}
                        {gltf ? <primitive object={gltf.scene} /> : null}
                    </mesh>
                </>
            </Canvas>
        </Suspense>
    );
}


export default BreadModel;
