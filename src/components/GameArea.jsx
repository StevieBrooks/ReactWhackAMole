import Hole from "./Hole"
import Mole from "../images/mole.png"
import { useContext, useState } from "react";
import GameContext from "../ContextFile"


export default function GameArea() {

    const [holeOccuppied, , holes] = useContext(GameContext)


    return (
        <div className="game-area border grid grid-rows-3 grid-flow-col">
            {holes.map((hole, index) => (
                <Hole key={index} occupied={index === holeOccuppied} />
            ))}
        </div>
    )
}