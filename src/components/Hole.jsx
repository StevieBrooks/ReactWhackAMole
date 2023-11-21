import { useContext, useEffect, useState } from "react"
import GameContext from "../ContextFile"

export default function Hole( { id, occupied, clickHandler } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints] = useContext(GameContext)

    const [holeImage, setHoleImage] = useState()

    useEffect(() => {
        if (occupied) {
          const newImage = generateImage();
          setHoleImage(newImage);
        }
      }, [occupied]);

    const generateImage = () => {
        return animalArray[Math.floor(Math.random() * animalArray.length)].icon
    }
    
    return (
        <div className={`hole ${id} border rounded-full w-16 h-16 bg-[#b45309] shadow-inner shadow-[#78350f]`}>
            <img src={occupied ? holeImage : ""} onClick={(e) => clickHandler(e)} alt="" />
        </div>
    )
}
