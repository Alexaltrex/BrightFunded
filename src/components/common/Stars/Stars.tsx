import {pointShaderMaterial} from "./pointShaderMaterial";
import {FC, useRef} from "react";
import {BufferAttribute, Fog} from "three";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import * as React from "react";

const randomInterval = (min: number, max: number) => {
    return min + Math.random() * (max - min);
}

const a_x = 200;
const a_y = 200;
const a_z = 10000;
const pointsCount = 150;
const speed = 400;//50;
const mult = 3;
const k = 0.001;
const cameraShift = 10;

//========= POINTS =========//
export const Points: FC<{isScrolling: boolean}> = ({isScrolling}) => {
    const {viewport, camera} = useThree();
    const {width, height} = viewport.getCurrentViewport(camera, [0, 0, -1]);
    //console.log(width, height)

    const positions = [] as number[];
    const scales = [] as number[];
    const colors = [] as number[]

    for (let i = 0; i < pointsCount; i++) {
        // const x = (Math.random() - 0.5) * a_x  ;
        // const y = (Math.random() - 0.5) * a_y ;
        const x = (Math.random() - 0.5) * width;
        const y = (Math.random() - 0.5) * height;
        // const sign1 = (Math.random() - 0.5) >=0 ? 1 : -1;
        // const sign2 = (Math.random() - 0.5) >=0 ? 1 : -1;
        // const x = sign1 * randomInterval(k, 1.5) * width;
        // const y = sign2 * randomInterval(k, 1.5) * height;
        const z = Math.random() * a_z ;
        positions.push(...[x, y, z])
        scales.push(2);
        colors.push(...[255, 0, 0])
    }

    const positionAttribute = new BufferAttribute(new Float32Array(positions), 3);
    const scaleAttribute = new BufferAttribute(new Float32Array(scales), 1);
    const colorAttribute = new BufferAttribute(new Float32Array(colors), 3);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state, delta) => {
        const positions = Array.from(ref.current.geometry.getAttribute("position").array);
        const time = state.clock.elapsedTime;

        if (delta < 0.1) {
            for (let i = 1; i <= pointsCount; i++) {
                if (positions[3 * i - 1] > a_z) {
                    positions[3 * i - 1] = 0
                } else {
                    positions[3 * i - 1] += (isScrolling ? mult : 1) * speed * delta;
                }
            }
        }


        const positionAttributeUpdate = new BufferAttribute(new Float32Array(positions), 3);
        ref.current.geometry.setAttribute("position", positionAttributeUpdate);

    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" {...positionAttribute} needsUpdate={true}/>
                <bufferAttribute attach="attributes-scale" {...scaleAttribute} needsUpdate={true}/>
                <bufferAttribute attach="attributes-customColor" {...colorAttribute} needsUpdate={true}/>
            </bufferGeometry>
            <shaderMaterial attach="material" {...pointShaderMaterial}/>
        </points>
    )
}

//========= STARS =========//
export const Stars: FC<{isScrolling: boolean}> = ({ isScrolling  }) => {
    return (
        <Canvas gl={{antialias: true}}>
            <Points isScrolling={isScrolling}/>
            <PerspectiveCamera makeDefault position={[0, 0, a_z - cameraShift]} zoom={1} far={a_z}/>
            <OrbitControls target={[0, 0, 0]} enableRotate={false} enableZoom={false}/>
        </Canvas>
    )
}

