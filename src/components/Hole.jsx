import { useContext, useEffect } from "react"
import GameContext from "../ContextFile"

export default function Hole( { id, occupied, clickHandler } ) {

    const [holesOccuppied, , holes, animalArray, randomAnimalAudio, , ] = useContext(GameContext)
    
    return (
        <div className={`hole ${id} border rounded-full w-16 h-16 bg-[#b45309] shadow-inner shadow-[#78350f]`}>
            <img src={occupied && animalArray[Math.floor(Math.random() * animalArray.length)].icon} onClick={(e) => clickHandler(e)} alt="" />
        </div>
    )
}

// this is causing the bug. The click event is causing a re-render of the hole component, thus, new random images are selected