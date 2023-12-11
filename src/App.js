// MISC IMPORTS
import './App.css';
import { useState, useEffect, useRef } from 'react';


// COMPONENT IMPORTS
import Header from './components/Header';
import TimeScore from './components/TimeScore';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameContext from "./ContextFile"
import MenuCard from './components/MenuCard';


// FILE IMPORTS - IMAGES
import mole from "./images/animals/mole.png"
import bird from "./images/animals/bird.png"
import cat from "./images/animals/cat.png"
import dog from "./images/animals/dog.png"
import zebra from "./images/animals/zebra.png"
import elephant from "./images/animals/elephant.png"
import lion from "./images/animals/lion.png"
import monkey from "./images/animals/monkey.png"
import giraffe from "./images/animals/giraffe.png"
import fish from "./images/animals/fish.png"
import horse from "./images/animals/horse.png"
import tiger from "./images/animals/tiger.png"
import penguin from "./images/animals/penguin.png"
import turtle from "./images/animals/turtle.png"
import dolphin from "./images/animals/dolphin.png"
// replace dolphin, horse and giraffe images
import red from "./images/colors/red.png"
import blue from "./images/colors/blue.png"
import green from "./images/colors/green.png"
import yellow from "./images/colors/yellow.png"
import orange from "./images/colors/orange.png"
import purple from "./images/colors/purple.png"
import black from "./images/colors/black.png"
import white from "./images/colors/white.png"
import grey from "./images/colors/grey.png"

// FILE IMPORTS - AUDIO
import moleMP3 from "./audio/animals/mole.mp3"
import birdMP3 from "./audio/animals/bird.mp3"
import catMP3 from "./audio/animals/cat.mp3"
import dogMP3 from "./audio/animals/dog.mp3"
import zebraMP3 from "./audio/animals/zebra.mp3"
import elephantMP3 from "./audio/animals/elephant.mp3"
import lionMP3 from "./audio/animals/lion.mp3"
import monkeyMP3 from "./audio/animals/monkey.mp3"
import giraffeMP3 from "./audio/animals/giraffe.mp3"
import fishMP3 from "./audio/animals/fish.mp3"
import horseMP3 from "./audio/animals/horse.mp3"
import tigerMP3 from "./audio/animals/tiger.mp3"
import penguinMP3 from "./audio/animals/penguin.mp3"
import turtleMP3 from "./audio/animals/turtle.mp3"
import dolphinMP3 from "./audio/animals/dolphin.mp3"

import redMP3 from "./audio/colors/red.mp3"
import blueMP3 from "./audio/colors/blue.mp3"
import greenMP3 from "./audio/colors/green.mp3"
import yellowMP3 from "./audio/colors/yellow.mp3"
import orangeMP3 from "./audio/colors/orange.mp3"
import purpleMP3 from "./audio/colors/purple.mp3"
import blackMP3 from "./audio/colors/black.mp3"
import whiteMP3 from "./audio/colors/white.mp3"
import greyMP3 from "./audio/colors/grey.mp3"

import ScoreForm from './components/ScoreForm';


// GLOBAL VARIABLES, ARRAYS, ETC
const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const animalArray = [
    {icon: mole, name: "mole"},
    {icon: bird, name: "bird"},
    {icon: cat, name: "cat"},
    {icon: dog, name: "dog"},
    {icon: zebra, name: "zebra"},
    {icon: elephant, name: "elephant"},
    {icon: lion, name: "lion"},
    {icon: monkey, name: "monkey"},
    {icon: giraffe, name: "giraffe"},
    {icon: fish, name: "fish"},
    {icon: horse, name: "horse"},
    {icon: tiger, name: "tiger"},
    {icon: penguin, name: "penguin"},
    {icon: turtle, name: "turtle"},
    {icon: dolphin, name: "dolphin"},
    // replace doplphin, giraffe and horse
]

const animalAudioArray = [
    {word: moleMP3, name: "mole"},
    {word: birdMP3, name: "bird"},
    {word: catMP3, name: "cat"},
    {word: dogMP3, name: "dog"},
    {word: zebraMP3, name: "zebra"},
    {word: elephantMP3, name: "elephant"},
    {word: lionMP3, name: "lion"},
    {word: monkeyMP3, name: "monkey"},
    {word: giraffeMP3, name: "giraffe"},
    {word: fishMP3, name: "fish"},
    {word: horseMP3, name: "horse"},
    {word: tigerMP3, name: "tiger"},
    {word: penguinMP3, name: "penguin"},
    {word: turtleMP3, name: "turtle"},
    {word: dolphinMP3, name: "dolphin"},
]

const colorArray = [
    {icon: red, name: "red"},
    {icon: blue, name: "blue"},
    {icon: green, name: "green"},
    {icon: yellow, name: "yellow"},
    {icon: orange, name: "orange"},
    {icon: purple, name: "purple"},
    {icon: black, name: "black"},
    {icon: white, name: "white"},
    {icon: grey, name: "grey"},
    // problem with grey
]

const colorAudioArray = [
    {word: redMP3, name: "red"},
    {word: blueMP3, name: "blue"},
    {word: greenMP3, name: "green"},
    {word: yellowMP3, name: "yellow"},
    {word: orangeMP3, name: "orange"},
    {word: purpleMP3, name: "purple"},
    {word: blackMP3, name: "black"},
    {word: whiteMP3, name: "white"},
    {word: greyMP3, name: "grey"},
]

// MAIN
let updatedHoles;

function App() {

// STATE 
    const [holesOccupied, setHolesOccupied] = useState(Array(9).fill(null))
    const [randomAudio, setRandomAudio] = useState()
    const [points, setPoints] = useState(0)
    const [menuActive, setMenuActive] = useState(false)
    const [playerName, setPlayerName] = useState("")
    const [gameTopic, setGameTopic] = useState("Animals")
    const [gameDifficulty, setGameDifficulty] = useState("Easy")
    const [gameTime, setGameTime] = useState()
    const [cdActive, setCdActive] = useState(false)
    const [scoreFormActive, setScoreFormActive] = useState(false)

    let gameInterval = useRef(5000)

/* FOR ALGORITHM
    - needs to be specific amount of correct images per game difficulty
    - needs to be at least one correct image per call (to keep interesting)
    - click two correct images per call - double points
*/


// GAME BEGINS ONLY WHEN COUNTDOWN IS ACTIVE
    useEffect(() => {

        if(cdActive) {
            let randomAudio;
            const intervalId = setInterval(() => {

                setRandomAudio(prevRandomAudio => {

                    switch(gameTopic) {
                        case "Animals":
                            randomAudio = animalAudioArray[Math.floor(Math.random() * animalAudioArray.length)].word;
                            break;
                        case "Colors":
                            randomAudio = colorAudioArray[Math.floor(Math.random() * colorAudioArray.length)].word;
                            break;
                    }

                    
                    const audio = new Audio(randomAudio);
                    audio.play();

                    setTimeout(function() {
                        const numOfHoles = Math.floor(Math.random() * 4) + 2
                        let holesToPop = []
                        for(let i = 0; i < numOfHoles; i++) {
                            const holePop = Math.floor(Math.random() * holes.length)
                            if(!holesToPop.includes(holePop)) {
                                holesToPop.push(holePop)
                            }
                        }
                        while(holesToPop.length < numOfHoles) {
                            const holePop = Math.floor(Math.random() * holes.length)
                            if(!holesToPop.includes(holePop)) {
                                holesToPop.push(holePop)
                            }
                        }

                        updatedHoles = Array(9).fill(null)
                        holesToPop.forEach(item => {
                            return updatedHoles[item] = true
                        })
                        setHolesOccupied(updatedHoles)
                    }, 1000)
                    // IMPORTANT: make larger, more obvkous delay and increase intervals and game time - better user experience!
                    return randomAudio;
                }); 
                
            }, gameInterval.current);
    
            return () => {
                clearInterval(intervalId);
            };
        }
        
    }, [gameInterval.current, cdActive]);


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

        switch(gameDifficulty) {
            case "Hard":
                gameInterval.current = 2000;
                break;
            case "Medium":
                gameInterval.current = 3000;
                break;
            case "Easy":
                gameInterval.current = 5000;
                break;
        }

    }, [gameDifficulty])

    

// COUNTDOWN FUNCTIONALITY

    let countdownInterval;
    const countdownFunction = () => {
        setCdActive(true)
    }

    useEffect(() => {
        if(cdActive) {
            let [minutes, seconds] = gameTime.split(":").map(Number)
            countdownInterval = setInterval(function() {
                seconds--
                if(seconds < 0) {
                    minutes--
                    seconds = 59
                }
    
                if(minutes === 0 && seconds === 0) {
                    clearInterval(countdownInterval)
                    setCdActive(false)
                    setTimeout(function() {
                        setHolesOccupied(Array(9).fill(null))
                        setScoreFormActive(true)
                    }, gameInterval.current)
                }
    
                let formattedSeconds = seconds < 10 ? "0" + seconds : seconds
                setGameTime(String(minutes + ":" + formattedSeconds))
            }, 1000)
            return () => clearInterval(countdownInterval)
        } else {
            clearInterval(countdownInterval)
            setGameTime(function() {
                if(gameDifficulty === "Hard") {
                    return "1:00"
                } else if(gameDifficulty === "Medium") {
                    return "2:00"
                } else {
                    return "3:00"
                }
            })
            
            
        }
    }, [cdActive, gameTime])

    const resetFunction = () => {
        setCdActive(false)
        setHolesOccupied(Array(9).fill(null))
        setPoints(0)
    }

    const menuFunction = () => {
        setMenuActive(true)
        setCdActive(false)
        setHolesOccupied(Array(9).fill(null))
        setPoints(0)
    }

  return (<>
    
        <div className="game-container border rounded w-11/12 h-fit max-w-xl mx-auto relative top-20 bg-[#64c516]">

            {menuActive ? 
            <>
                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, colorArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive]}>
                    <MenuCard />
                </GameContext.Provider>
            </>
            : scoreFormActive ? 
            <>
                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, colorArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive]}>
                    <ScoreForm />
                </GameContext.Provider>
            </>
            :
            <>
                <Header h1Title="Whack-a-Mole" />

                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, colorArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive]}>
                    <TimeScore />
                    <GameArea />
                    <Footer countdownFunction={countdownFunction} resetFunction={resetFunction} menuFunction={menuFunction} />
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
