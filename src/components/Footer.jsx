import Button from "./Button"
import { useContext } from "react"
import GameContext from "../ContextFile"

export default function Footer() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive] = useContext(GameContext)

    const menuFunction = () => {
        setMenuActive(true)
    }

    return (

        <footer className="border flex justify-evenly">
            <Button btnTitle="Play" className="py-1 px-2 m-1 border" />
            <Button btnTitle="Reset" className="py-1 px-2 m-1 border" />
            <Button btnTitle="Menu" btnAction={menuFunction} className="py-1 px-2 m-1 border" />
        </footer>

    )
}