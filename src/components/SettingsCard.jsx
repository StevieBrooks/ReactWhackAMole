import { useContext, useState } from "react"
import GameContext from "../ContextFile"

export default function SettingsCard( { cardActive, setCardActive } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty] = useContext(GameContext)

    const [formPlayer, setFormPlayer] = useState("")
    const [formTopic, setFormTopic] = useState("")
    const [formDifficulty, setFormDifficulty] = useState("")

    const nameChange = (name) => {
        setFormPlayer(name)
    }

    const topicChange = (topic) => {
        setFormTopic(topic)
    }

    const difficultyChange = (difficulty) => {
        setFormDifficulty(difficulty)
    }

    const returnMenuFunction = () => {
        setCardActive(false)
        setMenuActive(true)
    }

    const settingsFormSubmit = (e) => {
        e.preventDefault()
        setPlayerName(formPlayer)
        setGameTopic(formTopic)
        setGameDifficulty(formDifficulty)
        setMenuActive(false)
    }

    return (

        <>
        
            <div className="settings-container h-full">
                <header>
                    <h2 className="font-bold text-center">Game Settings</h2>
                </header>
                
                <form className="flex flex-col h-max w-11/12 mx-auto" action="" onSubmit={settingsFormSubmit}>

                    <input type="text" name="nameInput" onChange={(e) => nameChange(e.target.value)} placeholder="Player Name..." />

                    <label htmlFor="gameTopic">Game Topic:
                        <select name="gameTopic" id="gameTopic" onChange={(e) => topicChange(e.target.value)}>
                            <option value="">--Select Topic--</option>
                            <option value="Animals">Animals</option>
                            <option value="Food">Food</option>
                            <option value="Technology">Technology</option>
                            <option value="Vehicles">Vehicles</option>
                        </select>
                    </label>

                    <label htmlFor="gameDifficulty">Game Difficulty
                        <select name="gameDifficulty" id="gameDifficulty" onChange={(e) => difficultyChange(e.target.value)}>
                            <option value="">--Select Difficulty--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </label>
            
                    {/* <div className="players">
                        <label htmlFor="singlePlayer">Single:
                            <input type="radio" name="singlePlayer" />
                        </label>
            
                        <label htmlFor="singlePlayer">Multi:
                            <input type="radio" name="multiPlayer" />
                        </label>
                    </div> */}
                    <button className="border w-fit p-1 m-1" type="submit">Submit Form</button>
                </form>
                <button onClick={returnMenuFunction}>Exit Settings</button>

            </div>
        
        </>

    )
}