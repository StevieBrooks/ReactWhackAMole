import Hole from "./Hole"
import Mole from "../images/mole.png"
import { useRef, useContext, useEffect, useState } from "react";
import GameContext from "../ContextFile"

export default function GameArea() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)
    
    let occupiedHoles = useRef([])
    const [randomVal, setRandomVal] = useState(0)
    const [imageClicked, setImageClicked] = useState(false)

    const imgClickHandler = (e) => {

        const regex = /\/(.*?)\./
        const match = randomAnimalAudio.match(regex)
        const audioWordToMatch = match[1].split("/")
        const wordCall = audioWordToMatch[2]

        const imgWord = e.target.src
        const matchImgWord = imgWord.match(regex)
        const imgWordToMatch = matchImgWord[1].split("/")
        const clickedImg = imgWordToMatch[4]

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
        setImageClicked(true)
    }

    let randomValue;
    useEffect(() => {
        occupiedHoles.current = []
        holesOccupied.forEach((item, index) => {
            if(item === true) {
                occupiedHoles.current.push(index)
            }
        })
        console.log(occupiedHoles.current)
        if(!imageClicked) {
            const randomIndex = Math.floor(Math.random() * occupiedHoles.current.length)
            randomValue = occupiedHoles.current[randomIndex]
            setRandomVal(randomValue)
        } else {
            setImageClicked(false)
        }
       
    }, [holesOccupied])

    return (
        <div className="game-area border grid grid-cols-3 grid-flow-row py-5">
            {holes.map((hole, index) => (
                <Hole key={index} id={index} occupied={holesOccupied[index]} randomVal={randomVal} clickHandler={imgClickHandler} />
            ))}
        </div>
    )
}


/* NEED SOMETHING LIKE THIS TO ENSURE RANDOM VALUE DIFFERENT EVERYTIME ...

      let newRandomValue;
  do {
    const randomIndex = Math.floor(Math.random() * occupiedHoles.current.length);
    newRandomValue = occupiedHoles.current[randomIndex];
  } while (newRandomValue === randomValue);

  setRandomVal(newRandomValue);
  
*/