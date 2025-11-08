import React, { useRef, useEffect } from "react"
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { update } from "three/examples/jsm/libs/tween.module.js";


function Logo({ mousePosition, scale }) {
    const groupref = useRef();
    const { scene } = useGLTF('/src/assets/seebysound3.glb');

    const clonedScene = scene.clone();

    useEffect(() => {
        clonedScene.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    metalness: 1,        // Very metallic (0-1)
                    roughness: 0.07,         // Very smooth/shiny (0-1)
                    envMapIntensity: 0.09,   // Boost environment reflections
                    color: '#ffffff',
                });

                //Enable shadows 
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [clonedScene]);

    useFrame((state) => {
        if (groupref.current) {
            const targetRotationY = mousePosition.x * 0.16; // Adjust multiplier for sensitivity

            // Smoothly interpolate towards the target rotation
            groupref.current.rotation.y = THREE.MathUtils.lerp(
                groupref.current.rotation.y,
                targetRotationY,
                0.2
            );
            groupref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group ref={groupref}>
            <primitive object={clonedScene} scale={scale} rotation={[0, 5.2, 0.3]} />
        </group>
    );
};


const MetallicLogo = () => {

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [scale, setScale] = React.useState(2);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setScale(1)
            } else if (width < 1024) {
                setScale(1.5)
            } else {
                setScale(2);
            }
        };

        updateScale();
        window.addEventListener('resize' , updateScale);
        return () => window.removeEventListener('resize' , updateScale);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: (event.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    return (
        <div className='w-full h-[500px] relative'>
            <Canvas
                shadows
                gl={{
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2,
                }}
            >
                {/*we will set up the camers */}
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={30} />
                {/*we will add lights */}
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1} castShadow />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />
                <spotLight position={[0, 10, 0]} angle={0.3} intensity={1} penumbra={1} />


                {/*
         Environment map - This creates those rainbow reflections!
          'sunset' gives warm, colorful reflections like your reference image
          Other options: 'studio', 'city', 'dawn', 'forest', 'apartment'
          */}

                <Environment preset="sunset" background={false} />
                <Logo mousePosition={mousePosition} scale={scale} />
            </Canvas>
        </div>
    );
};

useGLTF.preload('/src/assets/seebysound3.glb');

export default MetallicLogo
