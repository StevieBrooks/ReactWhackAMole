import logo from "../images/whack-a-mole.png"

export default function GameContainer() {

    const h1Title = "Whack-a-Mole"
    
    return (
        <div className="game-container border w-3/5 mx-auto relative top-12">

            <header className="p-2 flex justify-center border">
                <h1 className="flex items-center"><img src={logo} className="w-10 me-5" alt="" />{h1Title}</h1>
            </header>

            <div className="scoreboard flex justify-center p-3 border">
                Score: 2000
            </div>

            <div className="game-area border">
                
                <div className="line-one flex justify-evenly my-5">
                    <div className="hole hole1 border rounded-full w-16 h-16"></div>
                    <div className="hole hole2 border rounded-full w-16 h-16"></div>
                </div>

                <div className="line-two flex justify-evenly my-5">
                    <div className="hole hole1 border rounded-full w-16 h-16"></div>
                    <div className="hole hole2 border rounded-full w-16 h-16"></div>
                    <div className="hole hole3 border rounded-full w-16 h-16"></div>
                </div>
                           
                <div className="line-three flex justify-evenly my-5">
                    <div className="hole hole1 border rounded-full w-16 h-16"></div>
                    <div className="hole hole2 border rounded-full w-16 h-16"></div>
                </div>

            </div>

            <footer className="border flex justify-evenly">
                <button>Play</button>
                <button>Reset</button>
                <button>Menu</button>
            </footer>

        </div>
    )
}