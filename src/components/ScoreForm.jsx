import { useContext } from "react"
import GameContext from "../ContextFile"

export default function ScoreForm() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)


    let result;
    const submitForm = (e) => {
        e.preventDefault()
        // const gameD = e.target[0].value
        // const gameT = e.target[1].value
        // const gameScore = e.target[2].value

        // console.log(`${playerName} played the ${gameD} level for ${gameT} and acquired ${gameScore} points.`)
        // setScoreFormActive(false)
        // setPoints(0)
        // setPlayerName("")

        const form = e.target
        console.log(form.attributes[1].value)
        const xhr = new XMLHttpRequest();

        xhr.open('POST', form.attributes[1].value);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                result = this.responseText;
            }
        });

        const formData = new FormData(form);
        xhr.send(formData);


    }

    return (

        <>
        
            <h2>Great Work!</h2>    
            <p>Record your high score here:</p>
            <form className="flex flex-col" action="http://localhost:8000/server.php" method="post" onSubmit={(e) => submitForm(e)}>

                {/* hide these readonly inputs and display their values in paragraphs for nicer UX */}
                <input className="hidden" type="text" name="difficulty" value={gameDifficulty} readOnly />
                <p>Game Difficulty: {gameDifficulty}</p>

                <input className="hidden" type="text" name="topic" value={gameTopic} readOnly />
                <p>Game Topic: {gameTopic}</p>

                <input className="hidden" type="number" name="score" value={points} readOnly />
                <p>Final Score: {points}</p>

                <input type="text" name="user" onChange={(e) => setPlayerName(!playerName && e.target.value)} placeholder="Enter name..." defaultValue={playerName} required />

                <button type="submit" name="score_submit">Submit</button>

                <h2>{result}</h2>
            </form>

        </>

    )
}