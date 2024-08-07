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
    
    

    const handleGameState = useCallback(() => {
        

        let result = probabilityOfOutcome(gameState.numberOfBalloons, gameState.balloonsPopped)

        return result

    },[gameState.numberOfBalloons, gameState.balloonsPopped])


    useEffect(() => {
        setProbability(handleGameState())
    }, [handleGameState])

    useEffect(() => {
        if (resetGame) {
            
            setGameState({ongoing: true, balloonsPopped: 0, numberOfBalloons: numberOfBalloons})
            
            setResetGame(false)
        }

    }, [resetGame, numberOfBalloons])

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
        }
        
        
    }, [onReset, gameState, numberOfBalloons]);


    useEffect(() => {
        if (toBePopped > numberOfBalloons) {
            setToBePopped(-1)
        }
    }, [toBePopped, numberOfBalloons]);


      const handlePop = (x) => {
        setToBePopped(x)
      }



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
                    <Button variant='contained' style={{margin: '5px'}} onClick={() => {
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

                                //On flipping tails, reset? or give some kind of message?
                                //setOnReset(true)
                                callResetGame(numberOfBalloons)
                            }
                            


                        }}>Throw Dart</Button>
                        <Button variant='contained' style={{margin: '5px'}} onClick={() => {
                            
                            setOnReset(true)
                            
                            }}>Reset</Button>

                            {/* Print State button, used for testing */}
                    {/* <Button onClick={() => {
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
                        }}>Print State</Button> */}

                        <div>Probability of popping exactly {gameState.balloonsPopped} total balloon{gameState.balloonsPopped === 1 ? ':' : 's:'}</div>
                        <div>{probability}%</div>
                    </div>
                </Grid>
                <Grid item style={{width: '80vw', maxWidth: '60vw'}}>
                    <Grid container direction='row'>
                         
                                <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" value={numberOfBalloons} onChange={handleChangeOfBalloons}/>
                          
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        
    );
}



function createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, handleGameState) {
    let result = []
    
    for (let i = 0; i < numberOfBalloons; i++) {
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop} gameState={gameState} handleGameState={handleGameState}></Balloon></Grid>));
        
    }
    
    return result;
}



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

function probabilityOfOutcome(numBalloons, popped) {
    console.log('calculating probability')
    console.log(numBalloons, popped)
    let numerator = 1;
    let denominator = 2;
    for (let i = numBalloons; i > numBalloons - popped; i--) {
        numerator = numerator * i;
    }
    console.log('numerator:')
    console.log(numerator)
    let twoNumBalloons = 2*numBalloons
    for (let i = twoNumBalloons; i > twoNumBalloons - popped; i--) {
        denominator = denominator * (i-1)
    }
    console.log('denominator:')
    console.log(denominator)

    let result = (numerator / denominator) * 100
    console.log('result < 50?:')
    console.log(result < 50)
    console.log()
    if (result % 1 === 0) {
        //no precision needed
    }
    else if ((25 < result) && (result < 50)) {
        result = result.toPrecision(4)
    }
    else if ((result > 3) && (result < 30)) {
        result = result.toPrecision(6)
    }
    else if (result < 3) {
        result = result.toPrecision(8)
    }
    else {
        result = result.toPrecision(2)
    }

return result;
}