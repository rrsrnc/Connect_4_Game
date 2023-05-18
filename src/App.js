import { useState } from "react";
import GameBoard from "./GameBoard"


function App() {
  const[resetCounter,setResetCounter]=useState(0)

  const initGame=()=>{
      setResetCounter(prevCounter=>prevCounter+1)
      console.log("Here")
  }
  return (
    
    <div className="App">

      <GameBoard init={initGame}>

      </GameBoard>
    </div>
  );
}

export default App;
