import React, { useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
//import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
//import { useState } from "react";
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
    //const [onPopped, setOnPopped] = React.useState(false)
    const [toBePopped, setToBePopped] = React.useState(-1);
    //const numberOfBalloons = 10;

    const [numberOfBalloons, setNumberOfBalloons] = React.useState(10)

    //const [whichBalloonToPop, setWhichBalloonToPop] = React.useState(1);

    //const [gameState, setGameState] = React.useState(new Array())


    const handleChangeOfBalloons = (event, newValue) => {
        setNumberOfBalloons(newValue)
        triggerReset()
        //setOnReset(true)
        //setOnReset(false)
        //setOnReset(false)

    }

    function triggerReset() {
        console.log('triggerReset called')
        if (onReset) {
            setOnReset(false)
        }
        if (!onReset) {
            setOnReset(true)
        }
        if (onReset) {
            setOnReset(false)
        }
        
    }

    

    useEffect(() => {
        console.log('onReset change registered')
        if (onReset) {
            console.log('reset triggered')
            setOnReset(false)
            setToBePopped(-1)
        }

        setOnReset(false)
        
        
    }, [onReset]);

    useEffect(() => {
        console.log('numberOfBalloons change detected')
        console.log(numberOfBalloons)
        //triggerReset()
    }, [numberOfBalloons])

    useEffect(() => {
        if (toBePopped > numberOfBalloons) {
            setToBePopped(-1)
        }
    }, [toBePopped, numberOfBalloons]);


      const handlePop = (x) => {
        setToBePopped(x)
      }


    

    return(
        <Grid container direction='column' alignItems='center' style={{border: '2px solid green', margin:'10px'}}>
            
            
            <Grid item>
            
            <Grid container direction='row' justifyContent='center' style={{ marginLeft:'5vw', marginRight: '5vw', background:'hsl(70, 31%, 85%)', textAlign: 'center', width: 'fit-content', maxWidth: '80vw'}}>
                

                {createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop)}
                
                
            </Grid>
            
            
            </Grid>
            <Grid item>
            <Grid container direction='column' style={
                {
                    // border: '2px solid green', 
                    maxWidth: '80vw'

                }
                }>
                <Grid item style={{maxWidth: '80vw'}}>
                    <div>
                    <Button onClick={() => {
                            // setToBePopped(whichBalloonToPop);
                            // setWhichBalloonToPop(((whichBalloonToPop % 10) + 1))
                            if (onReset) {
                                setOnReset(false)
                            }
                            let trialOutcome = trial(numberOfBalloons)
                            console.log(trialOutcome)
                            if (trialOutcome !== 0) {
                                setToBePopped(trialOutcome)
                            }


                        }}>Pop</Button>
                        <Button onClick={() => {
                            
                            setOnReset(true)
                            
                            }}>Reset</Button>
                    <Button onClick={() => {
                            // setToBePopped(5);
                            console.log('current state:')
                            console.log('onReset')
                            console.log(onReset)
                            console.log('toBePopped');
                            console.log(toBePopped);
                            console.log('numberOfBalloons')
                            console.log(numberOfBalloons)
                            
                        }}>Print State</Button>
                    </div>
                </Grid>
                <Grid item style={{width: '80vw', maxWidth: '60vw'}}>
                    <Grid container direction='row'>
                        {/* <Grid item style={{width: '20vw', border:'2px solid green'}} /> */}
                        {/* <Grid item style={{width: '80vw', border: '2px solid red'}}> */}
                         
                                <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" value={numberOfBalloons} onChange={handleChangeOfBalloons}/>
                          
                        {/* </Grid> */}
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        
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
    let result = []
    //let row = new Array()
    //result = wrapWithRow(result)
    for (let i = 0; i < numberOfBalloons; i++) {
        //console.log(i)
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop}></Balloon></Grid>));
        
        //result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop}></Balloon></Grid>));
        // row = row.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop}></Balloon></Grid>));
        // if (i % 20 == 0 || i == numberOfBalloons - 1) {
        //     result = result.concat(wrapWithRow(row))
        //     row = []
        // }
    }
    // console.log('result:')
    // console.log(result)
    // if (numberOfBalloons <= 20) {
    //     result = wrapWithRow(result)
    // }
    return result;
}


// function wrapWithRow(toBeWrapped) {
//     let result = []
//     result = result.concat(<Grid container direction='row' alignItems='center' children={toBeWrapped} style={{border:'2px solid red', textAlign: 'center'}}></Grid>)
//     return result;
// }

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
        console.log('heads')
        return (Math.floor(numberOfBalloons * Math.random()) + 1);

    }
    //Tails
    else if (coinFlip === 0) {
        console.log('tails')
        return 0;

    }
    //Impossible
    else {
        console.log('Error, coinFlip did not come up heads or tails')
    }

}