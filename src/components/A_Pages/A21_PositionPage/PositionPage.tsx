import * as React from "react";
import style from "./PositionPage.module.scss";
import {useParams} from "react-router-dom";
import {IPosition, positions} from "../../B51_OpenPositions/positions";
import {Position} from "../../B53_Position/Position";
import {PositionBody} from "../../B54_PositionBody/PositionBody";
import {BringYourTalent} from "../../B52_BringYourTalent/BringYourTalent";

const PositionPage = () => {
    const { positionId } = useParams<{ positionId: string }>();
    const position = positions.find(position => position.id === (positionId as string)) as IPosition;

    return (
        <div className={style.positionPage}
             id="position-top"
        >
            <Position {...position}/>
            <div className={style.card}>
                <PositionBody responsibilities={position.responsibilities}
                              talents={position.talents}
                />
            </div>
            <BringYourTalent/>
        </div>
    )
}
export default PositionPage
