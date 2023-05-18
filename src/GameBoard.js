import React, { useState,useEffect} from 'react';
import GameCircle from './GameCircle';
import classes from './GameBoard.module.css'
import Header from "./Header";
import Winning from './Winning';
import Footer from './Footer';

const GameBoard=(props)=>{
    const [circle,setCircle]=useState(Array(16).fill(0))
    const [currPlayer, setCurrPlayer] = useState(1);
    console.log("out")
    const handlecurrPlayer=(pos)=>{
        const newPlayer=currPlayer==1?2:1
        console.log(newPlayer)

        setCurrPlayer(newPlayer)
        const updatedCircle = [...circle]; // Create a copy of the circle array
        updatedCircle[pos] = currPlayer; // Update the value at index p
        setCircle(updatedCircle);
        
    }
    useEffect(() => {
        console.log(circle);
        Winning(circle)
      }, [circle]);

      function Reset(circle) {
        // const iCircle = circle.fill(0);
        
        // setCircle(iCircle);
        // console.log(circle);
        window.location.reload()
        props.init()

      }

    return(<>
            <Header cplayer={currPlayer}/>
            <div className={classes.gameBoard}>
                {circle.map((item,pos)=>{
                    return(<GameCircle key={pos} value={pos} cplayer={currPlayer} player={handlecurrPlayer}/>)
            })}
        </div>
        <Footer reset={() => Reset(circle)} />

        </>
        
    )
}

export default GameBoard