import { useContext } from "react"
import GameContext from "../ContextFile"

export default function Scoreboard( { results, setBoardActive } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    console.log(results)

    const returnMenuFunction = () => {
        setMenuActive(true)
        setBoardActive(false)
    }

    return (<>
        <div className="scoreboard-container">

            <header>
                <h2>Scoreboard</h2>
            </header>

            <table className="w-full">
                <thead>
                    <tr>
                        <th><strong>User</strong></th>
                        <th><strong>Topic</strong></th>
                        <th><strong>Difficulty</strong></th>
                        <th><strong>Score</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((item, index) => {
                        return <tr key={index}>
                                    <td>{item.user}</td>
                                    <td>{item.topic}</td>
                                    <td>{item.difficulty}</td>
                                    <td>{item.score}</td>
                                </tr>
                    })}
                </tbody>
            </table>

            <footer>
                <button onClick={returnMenuFunction}>Exit Scoreboard</button>
            </footer>
        </div>
    </>)
}