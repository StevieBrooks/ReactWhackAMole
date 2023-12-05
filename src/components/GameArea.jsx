import Hole from "./Hole"
import Mole from "../images/mole.png"
import { useContext } from "react";
import GameContext from "../ContextFile"

export default function GameArea() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)
    
    
    const imgClickHandler = (e) => {

        const regex = /\/(.*?)\./
        const match = randomAnimalAudio.match(regex)
        const audioWordToMatch = match[1].split("/")
        const wordCall = audioWordToMatch[2]

        const imgWord = e.target.src
        const matchImgWord = imgWord.match(regex)
        const imgWordToMatch = matchImgWord[1].split("/")
        const clickedImg = imgWordToMatch[4]

        console.log(wordCall)
        console.log(clickedImg)
        console.log(holesOccupied)

        if(wordCall === clickedImg) {
            switch(gameDifficulty) {
                case "Easy":
                    setPoints(points => points+1);
                    break;
                case "Medium":
                    setPoints(points => points+5);
                    break;
                    case "Hard":
                    setPoints(points => points+10);
                    break;
            }
        } else {
            switch(gameDifficulty) {
                case "Easy":
                    setPoints(points => points-1);
                    break;
                case "Medium":
                    setPoints(points => points-5);
                    break;
                    case "Hard":
                    setPoints(points => points-10);
                    break;
            }
        }

        const holeToCancel = e.target.parentElement.classList[1]
        const updatedHoles = [...holesOccupied]
        updatedHoles[holeToCancel] = null
        setHolesOccupied(updatedHoles)
    }

    return (
        <div className="game-area border grid grid-cols-3 grid-flow-row py-5">
            {holes.map((hole, index) => (
                <Hole key={index} id={index} occupied={holesOccupied[index]} clickHandler={imgClickHandler} />
            ))}
        </div>
    )
}

/* ALGORITHM TO ENSURE GAME IS FAIR
    - need to know which holes are occupied immediately after each call (wordCall in click hndler)
    - at least one hole must be populated with correct answser
    - need the variables from click handler
*/