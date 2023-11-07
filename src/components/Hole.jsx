import { useContext } from "react"
import GameContext from "../ContextFile"

export default function Hole( { occupied } ) {

    const [holeOccuppied, , holes, animalArray] = useContext(GameContext)

    return (
        <div className="hole border rounded-full w-16 h-16 bg-[#b45309] shadow-inner shadow-[#78350f]">
            <img src={occupied && animalArray[Math.floor(Math.random() * animalArray.length)].icon} alt="" />
        </div>
    )
}