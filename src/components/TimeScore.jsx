import { useContext } from "react"
import GameContext from "../ContextFile"

export default function TimeScore() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    
    return (

        <div className="time-and-score flex justify-evenly p-3 border">
            <div className="time">
                <p>Time: <span>{gameTime}</span></p>
            </div>
            <div className="score">
                <p>Score: <span>{points}</span></p>
            </div>
        </div>

    )
}

