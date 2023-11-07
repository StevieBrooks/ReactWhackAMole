// MISC IMPORTS
import './App.css';
import { useState, useEffect } from 'react';


// COMPONENT IMPORTS
import Header from './components/Header';
import TimeScore from './components/TimeScore';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameContext from "./ContextFile"


// FILE IMPORTS
import mole from "./images/mole.png"
import bird from "./images/bird.png"
import cat from "./images/cat.png"
import dog from "./images/dog.png"
import zebra from "./images/zebra.png"

import moleMP3 from "./audio/mole.mp3"
import birdMP3 from "./audio/bird.mp3"
import catMP3 from "./audio/cat.mp3"
import dogMP3 from "./audio/dog.mp3"
import zebraMP3 from "./audio/zebra.mp3"


// GLOBAL VARIABLES, ARRAYS, ETC
const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const animalArray = [
    {icon: mole, name: "mole"},
    {icon: bird, name: "bird"},
    {icon: cat, name: "cat"},
    {icon: dog, name: "dog"},
    {icon: zebra, name: "zebra"},
]

const animalAudioArray = [
    {word: moleMP3, name: "mole"},
    {word: birdMP3, name: "bird"},
    {word: catMP3, name: "cat"},
    {word: dogMP3, name: "dog"},
    {word: zebraMP3, name: "zebra"},
]


// MAIN
function App() {

    const [holeOccupied, setHoleOccupied] = useState(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const holePop = Math.floor(Math.random() * holes.length);
            setHoleOccupied(holes[holePop]);

            const randomAnimalAudio = animalAudioArray[Math.floor(Math.random() * animalAudioArray.length)].word
            const audio = new Audio(randomAnimalAudio)
            // audio.play()
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

  return (<>
    
        <div className="game-container border w-3/5 mx-auto relative top-8 bg-[#84cc16]">

            <Header h1Title="Whack-a-Mole" />

            <GameContext.Provider value={[holeOccupied, setHoleOccupied, holes, animalArray]}>
                <TimeScore />
                <GameArea />
            </GameContext.Provider>

            <Footer />

        </div>

  </>)
}

export default App;
