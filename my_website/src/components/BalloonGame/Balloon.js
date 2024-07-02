import '../../CSSFiles/balloons.css'
import React, { useEffect, useRef } from 'react';

export default function Balloon(props) {


    const [chosenColor, setChosenColor] = React.useState(randomColor());
//    const chosenColor = randomColor();
    const [chosenDuration, setChosenDuration] = React.useState(randomAnimationDuration());

    useEffect(()=> {
        if (props.onReset) {
            setChosenColor(randomColor())
            setChosenDuration(randomAnimationDuration());
        }
    }, [props.onReset])
    const style = {

        default: {
            
            background: chosenColor, 
            animationDuration: chosenDuration,

        },
        balloonAfter: {
            
            //content:"▲",
            fontSize:'20px',
            color: chosenColor,
            display:'block',
            textAlign:'center',
            width:'100%',
            position:'absolute',
            bottom:'-12px',
            zIndex:-100,
    
    },
        
        popped: {
            background: chosenColor,
            animation: 'pop 0.5s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards',
        },
    }

    return (
        <div className={props.className} style={props.className === 'balloon popped' ? style.popped : style.default}>
            <div style={style.balloonAfter}>
            ▲
            </div>
        </div>

    );
}


function randomColor() {
    let firstNum = Math.floor(255 * Math.random())
    let secondNum = Math.floor(100 * Math.random())
    let thirdNum = Math.floor(60 * Math.random()) + 20

    return (`hsl(${firstNum.toString()},${secondNum.toString()}%,${thirdNum.toString()}%)`);
}

function randomAnimationDuration() {
    let duration = Math.floor(19 * Math.random()) + 1
    return (`${duration}s`);
}