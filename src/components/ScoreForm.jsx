import { useContext } from "react"
import GameContext from "../ContextFile"

export default function ScoreForm() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)


    let result;
    const submitForm = (e) => {
        e.preventDefault()

        const form = e.target
        console.log(e.target.action)
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

        setScoreFormActive(false)
        setPoints(0)
        setPlayerName("")


    }

    return (

        <>
        
            <h2>Great Work!</h2>    
            <p>Record your high score here:</p>
            <form className="flex flex-col" action="http://localhost:8000/add_score.php" method="POST" onSubmit={(e) => submitForm(e)}>

                {/* hide these readonly inputs and display their values in paragraphs for nicer UX */}
                <input className="hidden" type="text" name="difficulty" value={gameDifficulty} readOnly />
                <p>Game Difficulty: {gameDifficulty}</p>

                <input className="hidden" type="text" name="topic" value={gameTopic} readOnly />
                <p>Game Topic: {gameTopic}</p>

                <input className="hidden" type="number" name="score" value={points} readOnly />
                <p>Final Score: {points}</p>

                <input type="text" name="user" onChange={(e) => setPlayerName(e.target.value)} placeholder="Enter name..." defaultValue={playerName} required />


                <button type="submit" name="score_submit">Submit</button>

            </form>

        </>

    )
}