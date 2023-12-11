import { useContext } from "react"
import GameContext from "../ContextFile"

export default function FeedbackCard( { fbResults, deactivate } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const returnMenuFunction = () => {
        setMenuActive(true)
        deactivate(false)
    }

    console.log(fbResults)

    return (<>
            <div className="feedback-container">
                <header>
                    <h2>Feedback Page</h2>
                </header>

                <div className="feedback-display overflow-auto h-64">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th><strong>User</strong></th>
                                <th><strong>Rating</strong></th>
                                <th><strong>Comment</strong></th>
                                <th><strong>Date</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {fbResults.map((item, index) => {
                                return <tr key={index}>
                                            <td>{item.user}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.comment}</td>
                                            <td>{item.date}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="feedback-form">
                    <form action="http://localhost:8000/add_feedback.php" method="post">

                        <input type="text" name="user" defaultValue={playerName} placeholder="Enter name..." />

                        <select name="rating" id="rating">
                            <option value="">Rating</option>
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>

                        <input type="text" name="comment" placeholder="Enter comment..." />

                        <button type="submit" name="submit">Send Feedback!</button>

                    </form>
                </div>

                <footer>
                    <button onClick={returnMenuFunction}>Exit Page</button>
                </footer>
            </div>
        </>)
}

// needs tweaking so most recent feedback displayed first