import React from 'react';
import classes from './Footer.module.css'

const Footer=(props)=>{
    function reset(circle){
        console.log(circle)
        props.reset()
    }

    return(
        <div className={classes.footer} onClick={reset}>
            Reset
        </div>
    )

}

export default Footer