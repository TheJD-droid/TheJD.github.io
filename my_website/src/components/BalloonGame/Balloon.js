import { Button } from '@mui/material';
import '../../CSSFiles/balloons.css'
import React, { useEffect } from 'react';
import balloonPopSound from '../../assets/balloonpop-83760.mp3';
import ClearIcon from '@mui/icons-material/Clear';

export default function Balloon(props) {

    const [balloonState, setBalloonState] = React.useState('balloon');

    const [chosenColor, setChosenColor] = React.useState(randomColor());
//    const chosenColor = randomColor();
    const [chosenDuration, setChosenDuration] = React.useState(randomAnimationDuration());
    const [hitAnimation, setHitAnimation] = React.useState(false);
    const [animationFlag, setAnimationFlag] = React.useState(false);

    function playSound() {
        new Audio(balloonPopSound).play()
    }


    useEffect(()=> {
        if (props.onReset) {
            setChosenColor(randomColor())
            setChosenDuration(randomAnimationDuration());
            setBalloonState('balloon');
            //console.log(balloonState)
            
        }
    }, [props.onReset])

    
    useEffect(() => {
        if (balloonState === 'balloon popped') {
            playSound()
            props.gameState.balloonsPopped = props.gameState.balloonsPopped + 1
        }
    }, [balloonState, props.gameState])
    

    const handleClick = () => {
        console.log('balloonState')
        console.log(balloonState)
        console.log('toBePopped')
        console.log(props.toBePopped)
        console.log('idNum')
        console.log(props.idNum)
        console.log('hitAnimation')
        console.log(hitAnimation)
    };

    useEffect(() => {
        
        if((props.toBePopped === props.idNum) && (balloonState !== 'balloon popped')) {
            setBalloonState('balloon popped')
            //playSound()
            // props.handlePop(-1)
            console.log(props.toBePopped)
        }
        

    }, [props, balloonState])

    // useEffect(() => {

    //     console.log(`toBePopped as seen by balloon ${props.idNum}: ${props.toBePopped}`)
    //     // console.log(props.toBePopped)
    //     // if (props.toBePopped === -1) {
    //     //     console.log('props.toBePopped === -1 registered')
    //     //     setHitAnimation(false)
    //     // }
    //     if ((props.toBePopped === props.idNum) && (hitAnimation)) {
    //         console.log('setAnimationFlag to true')
    //         setAnimationFlag(true)
    //         //props.handlePop(-1)
    //     }
    //     if (props.idNum === props.toBePopped) {
    //         setHitAnimation(true)
    //         // setHitAnimation(false)
    //     }
    //     // if ((props.toBePopped === props.idNum) && (hitAnimation)) {
    //     //     setHitAnimation(false)
    //     //     setHitAnimation(true)
    //     // }
    //     // else if (props.toBePopped === props.idNum) {
    //     //     setHitAnimation(true)
    //     // }

    // }, [props, props.toBePopped, hitAnimation, props.idNum])



    useEffect(() => {
        if ((props.toBePopped === props.idNum) && props.animationResetFlag) {
            setHitAnimation(true)
            props.handlePop(-1)
        }
    }, [props.toBePopped, props.animationResetFlag, props.idNum, props])

    useEffect(() => {
        if (props.toBePopped === -1) {
            props.handleAnimationReset(false)
        }
    }, [props.toBePopped, props])

    useEffect(() => {
        if (props.animationResetFlag) {
            setHitAnimation(false)
        }
    }, [props.animationResetFlag])



    // useEffect(() => {
    //     if (animationFlag) {
    //         console.log('hitAnimation set to true')
    //         setHitAnimation(true)
    //     }
    //     else {
    //         setHitAnimation(false)
    //     }
    // }, [animationFlag])

    // useEffect(() => {
    //     if (props.toBepopped === props.idNum) {
    //         console.log('setAnimationFlag to true')
    //         setAnimationFlag(true)
    //     }
    // }, [props.toBePopped, props.idNum])
    // useEffect(() => {
    //     console.log('props.toBePopped change detected')
    //     if (props.animationResetFlag) {
    //         console.log('set hit animation to false')
    //         setAnimationFlag(false)
    //         props.handleAnimationReset(false)
    //     }
    //     else if (props.toBePopped === props.idNum) {
    //         setAnimationFlag(true)
    //     }
    // }, [props.toBePopped])

    // useEffect(() => {
    //     props.handlePop(-1)
    // }, [props.animationResetFlag])


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

        notShowing: {
            position: 'absolute',
            zIndex: '11',
            color: 'red',
            fontSize: 60,
            opacity: 1,
            
        },

        onHit: {
            position: 'absolute',
            zIndex: '11',
            color: 'black',
            fontSize: 60,
            opacity: 1,
            animation: 'spotHit 1s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards'
            
        },
    }

    // useEffect(() => {
    //     if (hitAnimation) {
    //         setAnimationFlag(true)
    //     }
    //     else if (hitAnimation) {
    //         handleAnimationFlag()
    //     }
    // }, [hitAnimation, props.toBePopped])

    // const handleAnimationFlag = () => {
    //     setAnimationFlag(false)
    // }

    return (
        <>
        {/* <ClearIcon style={(animationFlag) ? style.onHit : style.notShowing} /> */}
        <ClearIcon style={(hitAnimation) ? style.onHit : style.notShowing} />
        {/* <ClearIcon style={style.onHit} /> */}
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

