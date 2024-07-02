import { Button } from '@mui/material';
import '../../CSSFiles/balloons.css'
import React, { useEffect, useRef } from 'react';

export default function Balloon(props) {

    const [balloonState, setBalloonState] = React.useState('balloon');

    const [chosenColor, setChosenColor] = React.useState(randomColor());
//    const chosenColor = randomColor();
    const [chosenDuration, setChosenDuration] = React.useState(randomAnimationDuration());

    useEffect(()=> {
        if (props.onReset) {
            setChosenColor(randomColor())
            setChosenDuration(randomAnimationDuration());
            setBalloonState('balloon');
            console.log(balloonState)
            
        }
    }, [props.onReset])

    useEffect(() => {
        console.log(balloonState);
        console.log('is popping an instrument?')
        if (props.toBePopped != -1) {
            console.log('will I pop?')

        }
        console.log(props.setToBePopped)
        if (props.toBePopped == props.idNum) {
            console.log('I will pop!')
            setBalloonState('balloon popped');
            console.log(props.toBePopped)
            console.log(balloonState)
        }

    }, [props.toBePopped])

    

    const handleClick = () => {
        console.log(props);
    };

    const style = {
        
    default: {
        display: 'inline-block',
        width: '60px',
        height: '72px',
        background: chosenColor,
        borderRadius:'80%',
        position:'relative',
        boxShadow:'inset -10px -10px 0 rgba(0,0,0,0.07)',
        margin:'20px 0px',
        transition: 'transform 0.5s ease',
        zIndex: 10,
        animation: 'balloons 10s ease-in-out infinite',
        transformOrigin: 'bottom center',
        animationDuration: chosenDuration,
    },


        // default: {
            
        //     background: chosenColor, 
        //     animationDuration: chosenDuration,

        // },
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
        <>
        <div className={balloonState} style={balloonState === 'balloon popped' ? style.popped : style.default}>
            <div style={style.balloonAfter}>
            ▲
            </div>
        </div>
        <Button onClick={() => {
            handleClick();
            }}>THIS BUTTON</Button>
        </>

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

