import React, { useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Slider } from "@mui/material";

export default function BalloonPage() {
    
      //let popSound = new Audio('../../assets/balloonpop-83760.mp3');

    //   document.addEventListener("DOMContentLoaded",() => {
    //     let bubbleWrap = document.getElementById("balloon"),
    //         popSound = new Audio('../../assets/balloonpop-83760.mp3')
    //     bubbleWrap.addEventListener("change",() => {
    //         popSound.play();
    //     });
    // });
    //const [poppingSoundNow, setPoppingSoundNow] = React.useState(false);
    const [onReset, setOnReset] = React.useState(false)
    const [onPopped, setOnPopped] = React.useState(false)
    const [toBePopped, setToBePopped] = React.useState(-1);
    //const numberOfBalloons = 10;

    const [numberOfBalloons, setNumberOfBalloons] = React.useState(10)

    const [whichBalloonToPop, setWhichBalloonToPop] = React.useState(1);

    const [gameState, setGameState] = React.useState(new Array())
    const handleChangeOfBalloons = (event, newValue) => {
        setNumberOfBalloons(newValue)
    }


    useEffect(() => {
        if (onReset) {
            setOnReset(false)
            setToBePopped(-1)
        }
        
    }, [onReset]);


     


      const handlePop = (x) => {
        setToBePopped(x)
      }

    

    return(
        <><Grid container direction='column'>
            <Grid item>
            {/* <div className="pageContainer" style={{marginLeft: '5vw', marginRight: '5vw', width: 'fit-content', justifyContent: 'center'}}> */}
            <Grid container style={{ marginLeft:'5vw', marginRight: '5vw', background:'hsl(70, 31%, 85%)', textAlign: 'center', width: 'fit-content', justifyContent: 'center'}}>
                {/* <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid> */}

                {/* {console.log(createBalloons(numberOfBalloons, balloonState, onReset, setOnReset))} */}
                {createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop)}
                
                
            </Grid>
            
            
            {/* </div> */}
            </Grid>
            <Grid item>
            <Grid container direction='column' style={{maxWidth: '80vw'}}>
                <Grid item style={{maxWidth: '80vw'}}>
                    <div>
                        <Button onClick={() => {
                            // setToBePopped(5);
                            setToBePopped(whichBalloonToPop);
                            setWhichBalloonToPop(((whichBalloonToPop % 10) + 1))
                            console.log(toBePopped);
                            //setPoppingSoundNow(true)

                        }}>Pop</Button>
                        <Button onClick={() => {
                            
                                setOnReset(true)
                            
                            }}>Reset</Button>
                    </div>
                </Grid>
                <Grid item style={{width: '80vw', maxWidth: '60vw', border: '2px solid red', marginLeft: '20vw', marginRight: '20vw'}}>
                    <Grid container direction='row'>
                        {/* <Grid item style={{width: '20vw', border:'2px solid green'}} /> */}
                        {/* <Grid item style={{width: '80vw', border: '2px solid red'}}> */}
                         
                                <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" value={numberOfBalloons} onChange={handleChangeOfBalloons} style={{width: '80vw', maxWidth: '1058px'}}/>
                          
                        {/* </Grid> */}
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
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


function createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop) {
    // let list = new ArrayList[];
    let result = new Array()
    for (let i = 0; i < numberOfBalloons; i++) {
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop}></Balloon></Grid>));
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