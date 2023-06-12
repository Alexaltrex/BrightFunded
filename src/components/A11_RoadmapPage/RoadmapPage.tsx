import * as React from "react";
import style from "./RoadmapPage.module.scss";
import {Roadmap} from "../B10_Roadmap/Roadmap";
import {JoinOurDiscord} from "../B11_JoinOurDiscord/JoinOurDiscord";

export const RoadmapPage = () => {

    return (
        <div className={style.roadmapPage}
             id="roadmap-top"
        >
            <Roadmap/>
            <JoinOurDiscord/>
        </div>
    )
}
