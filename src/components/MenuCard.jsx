import { useContext, useState, useRef } from "react"
import GameContext from "../ContextFile"
import SettingsCard from "./SettingsCard"
import Scoreboard from "./Scoreboard"
import FeedbackCard from "./FeedbackCard"
import InstructionsCard from "./InstructionsCard"

export default function MenuCard() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [settingsCardActive, setSettingsCardActive] = useState(false)
    const [scoreboardActive, setScoreboardActive] = useState(false)
    const [feedbackCardActive, setFeedbackCardActive] = useState(false)
    const [instructionsCardActive, setInstructionsCardActive] = useState(false)

    let scoreResults = useRef([])
    let feedbackResults = useRef([])

    const instructionsCardFunction = () => {
        setInstructionsCardActive(true)
    }

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

    const feedbackCardFunction = () => {

        const xhr = new XMLHttpRequest();
    
        xhr.open('GET', 'http://localhost:8000/get_feedback.php');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                feedbackResults.current = JSON.parse(this.responseText)
                console.log(feedbackResults)
            }
        });

        xhr.send();

        setTimeout(function() {
            setFeedbackCardActive(true)
        }, 0o100)
        
    }

    const exitMenuFunction = () => {
        setMenuActive(false)
    }

    return ( <>
    
                <div className={`menu-container ${(settingsCardActive || scoreboardActive || feedbackCardActive || instructionsCardActive) && "hidden"}`}>
                        <div className="menu flex flex-col items-center text-cream">
                            <header className="py-5 font-bold tracking-widest text-2xl">
                                <h2>Game Menu</h2>
                            </header>
                            <ul className="mt-5 flex flex-col items-center">
                                <li className="py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={instructionsCardFunction}>Instructions</li>
                                <li className="py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={settingsCardFunction}>Settings</li>
                                <li className="py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={scoreboardFunction}>Scoreboard</li>
                                <li className="py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={feedbackCardFunction}>Leave Feedback</li>
                                <li className="py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={exitMenuFunction}>Exit Menu</li>
                            </ul>
                        </div>
                    </div>

                    {instructionsCardActive && <InstructionsCard deactivate={setInstructionsCardActive} />}

                    {settingsCardActive && <SettingsCard cardActive={settingsCardActive} setCardActive={setSettingsCardActive} />}

                    {scoreboardActive && <Scoreboard results={scoreResults.current}  setBoardActive={setScoreboardActive} />}

                    {feedbackCardActive && <FeedbackCard fbResults={feedbackResults.current} deactivate={setFeedbackCardActive} />}

            </>
        
    )
}