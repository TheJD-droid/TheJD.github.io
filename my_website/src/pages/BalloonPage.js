import React, { useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
import { useState } from "react";


export default function BalloonPage() {
    
      //let popSound = new Audio('../../assets/balloonpop-83760.mp3');

    //   document.addEventListener("DOMContentLoaded",() => {
    //     let bubbleWrap = document.getElementById("balloon"),
    //         popSound = new Audio('../../assets/balloonpop-83760.mp3')
    //     bubbleWrap.addEventListener("change",() => {
    //         popSound.play();
    //     });
    // });
    const [poppingSoundNow, setPoppingSoundNow] = React.useState(false);
    const [onReset, setOnReset] = React.useState(false)
    const [onPopped, setOnPopped] = React.useState(false)
    const [toBePopped, setToBePopped] = useState(-1);
    const numberOfBalloons = 10;
/*
    const states = new Array()

    for (let i = 0; i < numberOfBalloons; i++) {
        const [balloonState, setBalloonState] = React.useState('balloon');
        states.concat({i: {'state': balloonState, 'setState': setBalloonState}})
    }
*/
    useEffect(() => {
        setPoppingSoundNow(false);
    }, [poppingSoundNow]);
    


    useEffect(() => {
        if (onReset) {
            setOnReset(false)
            setToBePopped(-1)
        }
        resetBalloons()
    }, [onReset]);

    useEffect(() => {
        if(toBePopped != -1) {
            popBalloon(toBePopped);
            
        }
        // if (onPopped) {
        //     setOnPopped(false)
        // }
    //}, [onPopped]);
    }, [toBePopped]);

    const popBalloon = (toBePopped) => {
        console.log(toBePopped)
        //setToBePopped(-1)
        //setBalloonState('balloon popped')
      }
      
      const resetBalloons = () => {
        console.log('resetBalloons')
        setToBePopped(-1)
        
      }


      

    return(
        <>
            <div className="pageContainer">
            <Grid container>
                {/* <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid> */}

                {/* {console.log(createBalloons(numberOfBalloons, balloonState, onReset, setOnReset))} */}
                {createBalloons(numberOfBalloons, 'balloon', onReset, setOnReset, toBePopped, setToBePopped)}
                
                
            </Grid>
            </div>
            <div>
                <Button onClick={() => {
                    setToBePopped(5);
                    console.log(toBePopped);
                    //setPoppingSoundNow(true)

                }}>Pop</Button>
                <Button onClick={() => {
                    
                        setOnReset(true)
                    
                    }}>Reset</Button>
            </div>

            
        </>
    );
}


// function randomColor() {
//     let firstNum = Math.floor(255 * Math.random())
//     let secondNum = Math.floor(100 * Math.random())
//     let thirdNum = Math.floor(60 * Math.random()) + 20

//     return (`hsl(${firstNum.toString()},${secondNum.toString()}%,${thirdNum.toString()}%)`);
// }

// function randomAnimationDuration() {
//     let duration = Math.floor(16 * Math.random()) + 4
//     return (`${duration}s`);
// }


function createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, setToBePopped) {
    // let list = new ArrayList[];
    let result = new Array()
    for (let i = 0; i < numberOfBalloons; i++) {
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} setToBePopped={setToBePopped}></Balloon></Grid>));
    }
    return result;
}
/*
function createBalloonStates(numberOfBalloons) {
    let result = new Array()
    for (let i = 0; i < numberOfBalloons; i++) {
        const [balloonState, setBalloonState] = React.useState('balloon');
        result.concat({i: {balloonState, setBalloonState}});
    }
}
*/
function trial(numberOfBalloons) {
    let coinFlip = Math.floor(2 * Math.random())

    //Heads
    if (coinFlip === 1) {
        return (Math.floor(numberOfBalloons * Math.random()) + 1);

    }
    //Tails
    else if (coinFlip === 0) {
        return 0;

    }
    //Impossible
    else {
        console.log('Error, coinFlip did not come up heads or tails')
    }

}