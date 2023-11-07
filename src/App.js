import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import TimeScore from './components/TimeScore';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameContext from "./ContextFile"

import mole from "./images/mole.png"
import bird from "./images/bird.png"
import cat from "./images/cat.png"
import dog from "./images/dog.png"
import zebra from "./images/zebra.png"


function App() {

    const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const [holeOccupied, setHoleOccupied] = useState(null)

    const animalArray = [
        {icon: mole, name: "mole"},
        {icon: bird, name: "bird"},
        {icon: cat, name: "cat"},
        {icon: dog, name: "dog"},
        {icon: zebra, name: "zebra"},
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            const holePop = Math.floor(Math.random() * holes.length);
            setHoleOccupied(holes[holePop]);
        }, 3000);

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
