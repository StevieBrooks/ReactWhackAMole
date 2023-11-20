import { useContext } from "react"
import GameContext from "../ContextFile"

export default function TimeScore() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints] = useContext(GameContext)
    return (

        <div className="time-and-score flex justify-evenly p-3 border">
            <div className="time">
                <p>Time: <span>00</span></p>
            </div>
            <div className="score">
                <p>Score: <span>{points}</span></p>
            </div>
        </div>

    )
}

