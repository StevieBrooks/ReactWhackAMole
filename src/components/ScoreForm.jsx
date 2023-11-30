import { useContext } from "react"
import GameContext from "../ContextFile"

export default function ScoreForm() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)



    const submitForm = (e) => {
        e.preventDefault()
        const gameD = e.target[0].defaultValue
        const gameT = e.target[1].defaultValue
        const gameScore = e.target[2].defaultValue
        // would be way better to use paragraphs to store these values if I can use 'name' as an attribute

        console.log(`${playerName} played the ${gameD} level for ${gameT} and acquired ${gameScore} points.`)
        setScoreFormActive(false)
        setPoints(0)
        setPlayerName("")
    }

    return (

        <>
        
            <h2>Great Work!</h2>    
            <p>Record your high score here:</p>
            <form className="flex flex-col" action="" method="post" onSubmit={(e) => submitForm(e)}>
                <input type="text" name="gameDifficulty" defaultValue={gameDifficulty} />
                <input type="text" name="gameTopic" defaultValue={gameTopic} />
                <input type="number" name="points" defaultValue={points} />
                <input type="text" name="playerName" onChange={(e) => setPlayerName(!playerName && e.target.value)} placeholder="Enter name..." defaultValue={playerName} />
                <button type="submit" name="submit">Submit</button>
            </form>

        </>

    )
}