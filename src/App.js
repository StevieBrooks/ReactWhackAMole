// MISC IMPORTS
import './App.css';
import { useState, useEffect } from 'react';


// COMPONENT IMPORTS
import Header from './components/Header';
import TimeScore from './components/TimeScore';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameContext from "./ContextFile"
import MenuCard from './components/MenuCard';


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

let updatedHoles;

// MAIN
function App() {

// STATE FOR GAME CONTEXT
    const [holesOccupied, setHolesOccupied] = useState(Array(9).fill(null))
    const [randomAnimalAudio, setRandomAnimalAudio] = useState()
    const [points, setPoints] = useState(0)
    const [menuActive, setMenuActive] = useState(false)
    const [playerName, setPlayerName] = useState("")
    const [gameTopic, setGameTopic] = useState("")
    const [gameDifficulty, setGameDifficulty] = useState("")
    const [gameTime, setGameTime] = useState()



    useEffect(() => {
        const intervalId = setInterval(() => {

            const numOfHoles = Math.ceil(Math.random() * 4)
            let holesToPop = []
            for(let i = 0; i < numOfHoles; i++) {
                const holePop = Math.floor(Math.random() * holes.length)
                holesToPop.push(holePop)
            }
            holesToPop = [...new Set(holesToPop)]
            updatedHoles = [...holesOccupied]
            holesToPop.forEach(item => {
                return updatedHoles[item] = true
            })
            setHolesOccupied(updatedHoles)

            setRandomAnimalAudio(prevRandomAudio => {
                const randomAnimalAudio = animalAudioArray[Math.floor(Math.random() * animalAudioArray.length)].word;
                const audio = new Audio(randomAnimalAudio);
                // audio.play();
                return randomAnimalAudio;
            });
            
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        setGameTime(function() {
            if(gameDifficulty === "Hard") {
                return "1:00"
            } else if(gameDifficulty === "Medium") {
                return "2:00"
            } else {
                return "3:00"
            }
        })
    }, [gameDifficulty])


// COUNTDOWN FUNCTIONALITY
    const [cdActive, setCdActive] = useState(false)

    let interval;
    const countdownFunction = (time) => {
        let [minutes, seconds] = time.split(":").map(Number)

        if(cdActive) {
            
        } else {
            setCdActive(true)
            interval = setInterval(function() {
                seconds--
                if(seconds < 0) {
                    minutes--
                    seconds = 59
                }
    
                if(minutes === 0 && seconds === 0) {
                    clearInterval(interval)
                    setCdActive(false)
                }
    
                let formattedSeconds = seconds < 10 ? "0" + seconds : seconds
                setGameTime(String(minutes + ":" + formattedSeconds))
            }, 1000)
        }
        
    }

  return (<>
    
        <div className="game-container border rounded w-11/12 h-96 mx-auto relative top-8 bg-[#64cc16]">

            {menuActive ? 
            <>
                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime]}>
                    <MenuCard />
                </GameContext.Provider>
            </>
            :
            <>
                <Header h1Title="Whack-a-Mole" />

                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, randomAnimalAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime]}>
                    <TimeScore />
                    <GameArea />
                    <Footer countdownFunction={countdownFunction} />
                </GameContext.Provider>

            </>
            

            }


        </div>

  </>)
}

export default App;


/* ---- IDEAS ----

- multiplayer / single player - scores can be added to high-score db regardless of setting
- everything displayed in game container - menu/reset confirmation conditionally
- different voices/accents for noun calls
- scoreboard choice in menu
- give holes numbers 1-9 - kids will love shouting that out to their mates who are playing in class

*/