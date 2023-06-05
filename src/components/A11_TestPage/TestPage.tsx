import * as React from "react";
import style from "./TestPage.module.scss";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Stars} from "./Stars";

export const TestPage = () => {

    return (
        <div className={style.testPage}>
            <div className={style.wrapper}>
                <Canvas gl={{antialias: true}}>
                    <Stars/>
                    <PerspectiveCamera makeDefault position={[0, 0, 150]} zoom={4}/>
                    <OrbitControls target={[0, 0, 0]} enableRotate={true} enableZoom={true}/>
                </Canvas>
            </div>

            {/*<div className={style.content} ref={ref}>*/}

            {/*</div>*/}

        </div>
    )
}
