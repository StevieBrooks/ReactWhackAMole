import Hole from "./Hole"
import Mole from "../images/mole.png"
import { useContext, useEffect } from "react";
import GameContext from "../ContextFile"

export default function GameArea() {

    const [holesOccuppied, , holes, animalArray, randomAnimalAudio, points, setPoints] = useContext(GameContext)
    
    
    const imgClickHandler = (e) => {
        console.log(e.target.parentElement.classList)
        console.log(holesOccuppied)

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

        if(wordCall === clickedImg) {
            setPoints(points => points+1)
        } else {
            setPoints(points => points-1)
        }
    }
    
    useEffect(() => {
        console.log(points)
        
    }, [points])
    

    return (
        <div className="game-area border grid grid-cols-3 grid-flow-row">
            {holes.map((hole, index) => (
                <Hole key={index} id={index} occupied={holesOccuppied[index]} clickHandler={imgClickHandler} />
            ))}
        </div>
    )
}