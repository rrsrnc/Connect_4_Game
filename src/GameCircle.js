import React, { useState, useEffect } from 'react';
import classes from './GameCircle.module.css'

const GameCircle=(props)=>{
    // const player=["player_0","player_1","player_2"]
    const [cName,setcName]=useState(classes.player_0)
    
    // console.log(circle)
    
    // console.log("out")
    const handleCircle=(p)=>{
        

        const player=props.cplayer
        const newcName=player==1?classes.player_1:classes.player_2
        setcName(newcName)
        
        props.player(p)
    }

    return(
        <div className={`${classes.circle}  ${cName}`} onClick={()=>handleCircle(props.value)}>
    </div>
    )
}

export default GameCircle