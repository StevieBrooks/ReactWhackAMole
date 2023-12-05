import { useContext, useEffect, useState } from "react"
import GameContext from "../ContextFile"

export default function Hole( { id, occupied, clickHandler } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [holeImage, setHoleImage] = useState()

    useEffect(() => {
        if (occupied) {
          const newImage = generateImage();
          setHoleImage(newImage);
          console.log(holesOccupied)

        //   const regex = /\/(.*?)\./
        //     const match = randomAnimalAudio.match(regex)
        //     const audioWordToMatch = match[1].split("/")
        //     const wordCall = audioWordToMatch[2]
        //     console.log(wordCall)
        //     console.log(typeof animalArray[2].icon)
        // MIGHT NEED ALL THIS INSIDE genIMAGE FUNCTION!!!

        }
      }, [occupied]);

    const generateImage = () => {
        // check to see how many holesOccupied
        //use this - https://bobbyhadz.com/blog/javascript-count-elements-in-array-with-condition
        // if only one, populate with animalArray icon that matches wordCall
        // otherwise, populate with at least one that matches wordCall
        return animalArray[Math.floor(Math.random() * animalArray.length)].icon
    }
    
    return (
        <div className={`hole ${id} border rounded-full w-16 h-16 bg-[#b45309] shadow-inner shadow-[#78350f]`}>
            <img src={occupied ? holeImage : ""} onClick={(e) => clickHandler(e)} alt="" />
        </div>
    )
}

/* ALGORITHM TO ENSURE GAME IS FAIR - FOCUS ON THAT USEEFFECT AND GENERATE IMAGE FUNC
    - need to know which holes are occupied immediately after each call (wordCall in click hndler)
    - at least one hole must be populated with correct answser
    - need the variables from click handler
*/