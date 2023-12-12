import Button from "./Button"
import { useContext, useState } from "react"
import GameContext from "../ContextFile"

export default function Footer({countdownFunction, resetFunction, menuFunction}) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)



    return (

        <footer className="border-t border-cream flex justify-evenly text-cream font-bold py-1">
            <Button btnTitle="Play" btnAction={countdownFunction} className="py-1 px-3 m-1 border tracking-wider rounded hover:bg-green" />
            <Button btnTitle="Reset" btnAction={resetFunction} className="py-1 px-3 m-1 border tracking-wider rounded hover:bg-green" />
            <Button btnTitle="Menu" btnAction={menuFunction} className="py-1 px-3 m-1 border tracking-wider rounded hover:bg-green" />
        </footer>

    )
}