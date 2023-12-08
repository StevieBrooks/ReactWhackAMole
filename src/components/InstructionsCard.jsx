import { useContext } from "react"
import GameContext from "../ContextFile"

export default function InstructionsCard( { deactivate } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const returnMenuFunction = () => {
        setMenuActive(true)
        deactivate(false)
    }

    return (<>
        <div className="instructions-container">
            <header>
                <h2>Instructions</h2>
            </header>

            <div className="instructions-display">
                <ul>
                    <li>Hit 'Play' to begin game</li>
                    <li>Listen for English noun and whack correct image</li>
                    <li>Change topic and difficulty in 'Settings'</li>
                    <li>Win as many points as you can</li>
                    <li>Record your score at end</li>
                    <li>Leave feedback and suggestions if you want</li>
                    <li>Have fun and good luck!</li>
                </ul>
            </div>

            <footer>
                <button onClick={returnMenuFunction}>Exit Page</button>
            </footer>
        </div>
    </>)
}