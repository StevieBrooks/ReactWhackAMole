import { useContext } from "react"
import GameContext from "../ContextFile"

export default function MenuCard() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive] = useContext(GameContext)

    const exitMenuFunction = () => {
        setMenuActive(false)
    }

    return (
        <div className="menu-container">
            <div className="menu flex flex-col items-center">
                <header>
                    <h2 className="font-bold">Game Menu</h2>
                </header>
                <ul className="mt-5">
                    <li className="py-2">Instructions</li>
                    <li className="py-2">Settings</li>
                    <li className="py-2">Scoreboard</li>
                    <li className="py-2" onClick={exitMenuFunction}>Exit Menu</li>
                </ul>
            </div>
        </div>
    )
}