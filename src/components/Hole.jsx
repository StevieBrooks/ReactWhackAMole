import { useContext, useEffect, useState } from "react"
import GameContext from "../ContextFile"

export default function Hole( { id, occupied, randomVal, clickHandler } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [holeImage, setHoleImage] = useState()

    useEffect(() => {
        if (occupied) {
          const newImage = generateImage();
          setHoleImage(newImage);
        }
    }, [randomVal]);
    
    const generateImage = () => {
    
        const regex = /\/(.*?)\./
        const match = randomAnimalAudio.match(regex)
        const audioWordToMatch = match[1].split("/")
        const wordCall = audioWordToMatch[2]
    
        // console.log(randomVal) 
    
        if(randomVal === id) {
            const returnVal = animalArray.filter(item => {
                if(item.name === wordCall) {
                    return item.icon;
                }
            })
            return returnVal[0].icon
        } else {
    
            return animalArray[Math.floor(Math.random() * animalArray.length)].icon
        }
    
    }
    
    return (
        <div className={`hole ${id} border rounded-full w-16 h-16 bg-[#b45309] shadow-inner shadow-[#78350f]`}>
            <img src={occupied ? holeImage : ""} onClick={(e) => clickHandler(e)} alt="" />
        </div>
    )
}




