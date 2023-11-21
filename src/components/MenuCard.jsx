import { useContext } from "react"
import GameContext from "../ContextFile"

export default function MenuCard() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive] = useContext(GameContext)

    return (
        <div className="menu-container">
            <div className="menu">
                <header>
                    <h2>Game Menu</h2>
                    <ul>
                        <li>Instructions</li>
                        <li>Settings</li>
                        <li>Scoreboard</li>
                        <li>Back</li>
                    </ul>
                </header>
            </div>
        </div>
    )
}