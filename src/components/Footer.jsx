import Button from "./Button"
import { useContext, useState } from "react"
import GameContext from "../ContextFile"

export default function Footer({countdownFunction, resetFunction, menuFunction}) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)



    return (

        <footer className="border flex justify-evenly">
            <Button btnTitle="Play" btnAction={countdownFunction} className="py-1 px-2 m-1 border" />
            <Button btnTitle="Reset" btnAction={resetFunction} className="py-1 px-2 m-1 border" />
            <Button btnTitle="Menu" btnAction={menuFunction} className="py-1 px-2 m-1 border" />
        </footer>

    )
}