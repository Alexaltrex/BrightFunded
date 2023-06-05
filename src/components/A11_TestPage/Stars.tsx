import {pointShaderMaterial} from "./pointShaderMaterial";
import {useRef} from "react";
import {BufferAttribute} from "three";
import {useFrame} from "@react-three/fiber";

const a_x = 100;
const a_y = 100;
const a_z = 100;
const pointsCount = 1000;
const speed = 10;

export const Stars = () => {

    const positions = [] as number[];
    const scales = [] as number[];
    const colors = [] as number[]

    for (let i = 0; i < pointsCount; i++) {
        const x = (Math.random() - 0.5) * a_x  ;
        const y = (Math.random() - 0.5) * a_y ;
        const z = Math.random() * a_z ;
        positions.push(...[x, y, z])
        scales.push(1);
        colors.push(...[255, 0, 0])
    }

    const positionAttribute = new BufferAttribute(new Float32Array(positions), 3);
    const scaleAttribute = new BufferAttribute(new Float32Array(scales), 1);
    const colorAttribute = new BufferAttribute(new Float32Array(colors), 3);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state, delta) => {
        const positions = Array.from(ref.current.geometry.getAttribute("position").array);
        const time = state.clock.elapsedTime;

        for (let i = 1; i <= pointsCount; i++) {
            if (positions[3 * i - 1] > a_z) {
                positions[3 * i - 1] = 0
            } else {
                positions[3 * i - 1] += speed * delta;
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
