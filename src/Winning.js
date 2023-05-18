import React from 'react';
import Header from './Header';

const Winning=(circle)=>{
    const win=[
        [0,5,10,15],
        [3,6,9,12]
    ]
    for(var i=0;i<=circle.length-3;i++){
        // console.log(circle[i],circle[i+1],circle[i+2],circle[i+3])
        if (circle[0]==circle[5] &&
            circle[5]==circle[10] &&
            circle[10]==circle[15] &&
            circle[0]!=0){
                const winner=`Player ${circle[0]} wins`
                document.getElementById("header").innerText = winner
        }
        else if(circle[3]==circle[6] &&
            circle[6]==circle[9] &&
            circle[9]==circle[12] &&
            circle[3]!=0)
            {
                const winner=`Player ${circle[3]} wins`
                document.getElementById("header").innerText = winner
            }
        
    }
    for(var i=0;i<=12;i+=4){
        if(circle[i]  ==circle[i+1] &&
        circle[i+1]==circle[i+2] && 
        circle[i+2]==circle[i+3] &&
        circle[i]!=0 ){
        const winner=`Player ${circle[i]} wins`
         document.getElementById("header").innerText = winner
     }
    }

    for(var i=0;i<4;i++){
        if (circle[i]==circle[i+4] &&
            circle[i+4]==circle[i+8] &&
            circle[i+8]==circle[i+12] &&
            circle[i]!=0){
                const winner=`Player ${circle[i]} wins`
                    document.getElementById("header").innerText = winner
            }
    }
    


}

export default Winning