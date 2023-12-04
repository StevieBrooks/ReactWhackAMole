import { useContext } from "react"
import GameContext from "../ContextFile"

export default function Scoreboard( { results } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)



    return (<>
        <ul>
            {results.map((item, index) => {
                <li key={item.id}>{item.user}</li>
            })}
        </ul>
    </>)
}