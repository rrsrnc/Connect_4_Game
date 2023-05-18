import React from 'react';
import classes from './Header.module.css'

const Header=(props)=>{

    return(
        <div className={classes.section} id="header">
            Player {props.cplayer} turn
        </div>
    )
}

export default Header