import React, { useCallback, useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
//import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
//import { useState } from "react";
import { Slider } from "@mui/material";
import BalloonGameState from "../components/BalloonGame/BalloonGameState";

export default function BalloonPage() {
    
    
    const [onReset, setOnReset] = React.useState(false)
    const [toBePopped, setToBePopped] = React.useState(-1);
    
    const [numberOfBalloons, setNumberOfBalloons] = React.useState(10)

    const [triggerReset, setTriggerReset] = React.useState(false)
    const [gameState, setGameState] = React.useState(new BalloonGameState(true, 0, 10))
    const [resetGame, setResetGame] = React.useState(false)
    const [probability, setProbability] = React.useState(probabilityOfOutcome(numberOfBalloons, 0))
    const handleChangeOfBalloons = (event, newValue) => {
        //setNumberOfBalloons(newValue)
        //setOnReset(true)
        callResetGame(newValue)
    }


    function callResetGame(numberOfBalloons) {

        setOnReset(true)
        setNumberOfBalloons(numberOfBalloons)
        gameState.numberOfBalloons = numberOfBalloons
        gameState.balloonsPopped = 0


    }

    useEffect(() => {

        
        setOnReset(false)
        setResetGame(false)

    }, [triggerReset]) 
    
    
   function probabilityOfOutcome(numBalloons, popped) {

    let result = 0;


    return numBalloons + popped;
   }

    const handleGameState = useCallback(() => {
        

        //let result = gameState.numberOfBalloons + gameState.balloonsPopped
        let result = probabilityOfOutcome(gameState.numberOfBalloons, gameState.balloonsPopped)
        return result

    },[gameState.balloonsPopped, gameState.numberOfBalloons])


    useEffect(() => {
        setProbability(handleGameState())
    }, [gameState.balloonsPopped, gameState.numberOfBalloons, handleGameState])

    useEffect(() => {
        handleGameState()
    }, [handleGameState])

   

    useEffect(() => {
        if (resetGame) {
            //setResetGame(false)
            //setGameState(new BalloonGameState(true, 0, numberOfBalloons))
            gameState.ongoing = true
            gameState.balloonsPopped = 0
            gameState.numberOfBalloons = numberOfBalloons
            // console.log(gameState)
            // console.log('probability before handleGameState')
            // console.log(probability)
            handleGameState()
            // console.log('probability after handleGameState')
            // console.log(probability)
        }

    }, [resetGame, numberOfBalloons, gameState, handleGameState])

    useEffect(() => {
        console.log('onReset change registered')
        if (onReset) {
            console.log('reset triggered')
            setToBePopped(-1)
            setTriggerReset(true)
            setResetGame(true)
            
            
        }

        if (!onReset) {
            setTriggerReset(false)
            setResetGame(false)
        }
        
        
    }, [onReset, gameState, numberOfBalloons, resetGame]);


    
    useEffect(() => {
        console.log('numberOfBalloons change detected')
        console.log(numberOfBalloons)
        //setGameState(new BalloonGameState(gameState.ongoing, gameState.balloonsPopped, numberOfBalloons))
        //console.log(gameState)
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

    
    // const probabilityOfOutcome = useCallback(() => {
    //     let result = gameState.numberOfBalloons + gameState.balloonsPopped;
    
    //     if (gameState.balloonsPopped === 0) {
    //         return 50;
    //     }
    //     else {
    //         //n = numberOfBalloons
    //         //x = balloonsPopped
    //         for (let i = 0; i < gameState.numberOfBalloons; i++) {
    //             console.log(i);
    //         }
    //         console.log('end of function')
    //         // for (let i = numberOfBalloons; i >= (numberOfBalloons + 1 - (balloonsPopped)); i--) {
    //         //     console.log(i)
    //         //     if (i > 100) {
    //         //         return -1;
    //         //     }
    //         // }
    //     }
    
    //     return result;
    // }, [gameState.numberOfBalloons, gameState.balloonsPopped])



    // const probabilityOfOutcome = useCallback(() => {
    //     return gameState.numberOfBalloons + gameState.balloonsPopped;
    // }, [gameState.numberOfBalloons, gameState.balloonsPopped])



    //How does one useCallBack in a way that actually works?
    // const probabilityOfOutcome = useCallback((numberOfBalloons, balloonsPopped) => {
    //     let result = numberOfBalloons + balloonsPopped
    //     console.log('result:')
    //     console.log(result)
    //     console.log('numberOfBalloons')
    //     console.log(numberOfBalloons)
    //     console.log('balloonsPopped')
    //     console.log(balloonsPopped)
    //     setProbability(result)
    // },[])

    // const probabilityOfOutcome = useCallback(() => {
    //     let result = gameState.numberOfBalloons + gameState.balloonsPopped
    //     setProbability(result)
    // }, [gameState.numberOfBalloons, gameState.balloonsPopped])

    // useEffect(() => {
    //     probabilityOfOutcome()
    // }, [probabilityOfOutcome, toBePopped])


    

        

    return(
        <Grid container direction='column' alignItems='center' style={{border: '2px solid green', margin: '5px'}}>
            
            
            <Grid item style={{marginLeft: '5vw', marginRight: '5vw'}}>
            
            <Grid container direction='row' justifyContent='center' style={{ marginLeft:'150px', marginRight: '150px', background:'hsl(70, 31%, 85%)', textAlign: 'center', width: 'fit-content', maxWidth: '600px'}}>
                

                {createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, handleGameState)}
                
                
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
                            console.log(toBePopped)
                            if (onReset) {
                                setOnReset(false)
                            }
                            let trialOutcome = trial(numberOfBalloons)
                            console.log(trialOutcome)
                            if (trialOutcome !== 0) {
                                setToBePopped(trialOutcome)
                            }
                            else if (trialOutcome === 0) {
                                setOnReset(true)
                                //gameState.ongoing = false;
                            }
                            //console.log(window)


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
                            console.log('gameState:')
                            console.log(gameState)
                            console.log('probability: ')
                            console.log(probability)
                        }}>Print State</Button>
                        <div>{probability}%</div>
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


function createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, handleGameState) {
    let result = []
    
    for (let i = 0; i < numberOfBalloons; i++) {
        //console.log(i)
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop} gameState={gameState} handleGameState={handleGameState}></Balloon></Grid>));
        
    }
    
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

