import { useContext, useState } from "react"
import GameContext from "../ContextFile"
import SettingsCard from "./SettingsCard"

export default function MenuCard() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty] = useContext(GameContext)

    const [settingsCardActive, setSettingsCardActive] = useState(false)

    const settingsCardFunction = () => {
        setSettingsCardActive(true)
    }

    const exitMenuFunction = () => {
        setMenuActive(false)
    }

    return ( <>
    
                <div className={`menu-container ${settingsCardActive && "hidden"}`}>
                        <div className="menu flex flex-col items-center">
                            <header>
                                <h2 className="font-bold">Game Menu</h2>
                            </header>
                            <ul className="mt-5 flex flex-col items-center">
                                <li className="py-2">Instructions</li>
                                <li className="py-2" onClick={settingsCardFunction}>Settings</li>
                                <li className="py-2">Scoreboard</li>
                                <li className="py-2">Leave Feedback</li>
                                <li className="py-2" onClick={exitMenuFunction}>Exit Menu</li>
                            </ul>
                        </div>
                    </div>

                    {settingsCardActive && <SettingsCard cardActive={settingsCardActive} setCardActive={setSettingsCardActive} />}

            </>
        
    )
}