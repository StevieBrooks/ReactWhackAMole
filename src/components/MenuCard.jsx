import { useContext, useState, useRef } from "react"
import GameContext from "../ContextFile"
import SettingsCard from "./SettingsCard"
import Scoreboard from "./Scoreboard"

export default function MenuCard() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty] = useContext(GameContext)

    const [settingsCardActive, setSettingsCardActive] = useState(false)
    const [scoreboardActive, setScoreboardActive] = useState(false)

    let scoreResults = useRef([])

    const settingsCardFunction = () => {
        setSettingsCardActive(true)
    }

    const scoreboardFunction = () => {

        const xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'http://localhost:8000/get_scores.php');
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
            xhr.addEventListener('readystatechange', function () {
                if (this.readyState === this.DONE) {
                    scoreResults.current = JSON.parse(this.responseText)
                    console.log(scoreResults)
                }
            });
    
            xhr.send();

            setTimeout(function() {
                setScoreboardActive(true)
            }, 0o100)

    }

    const exitMenuFunction = () => {
        setMenuActive(false)
    }

    return ( <>
    
                <div className={`menu-container ${(settingsCardActive || scoreboardActive) && "hidden"}`}>
                        <div className="menu flex flex-col items-center">
                            <header>
                                <h2 className="font-bold">Game Menu</h2>
                            </header>
                            <ul className="mt-5 flex flex-col items-center">
                                <li className="py-2">Instructions</li>
                                <li className="py-2" onClick={settingsCardFunction}>Settings</li>
                                <li className="py-2" onClick={scoreboardFunction}>Scoreboard</li>
                                <li className="py-2">Leave Feedback</li>
                                <li className="py-2" onClick={exitMenuFunction}>Exit Menu</li>
                            </ul>
                        </div>
                    </div>

                    {settingsCardActive && <SettingsCard cardActive={settingsCardActive} setCardActive={setSettingsCardActive} />}

                    {scoreboardActive && <Scoreboard results={scoreResults.current}  setBoardActive={setScoreboardActive} />}

            </>
        
    )
}