import React, { useCallback, useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button, Tabs, Tab, ThemeProvider } from "@mui/material";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
import { Slider } from "@mui/material";
import BalloonGameState from "../components/BalloonGame/BalloonGameState";

import CoinFlip from "../components/BalloonGame/CoinFlip";
import './../CSSFiles/coinFlip.css';

import { createTheme } from "@mui/material";

import { colors, Modal, Box, Typography } from "@mui/material";



import Pdf from '../assets/TheBalloonProblem.pdf';




const theme = createTheme({
    palette: {
        action: {
            disabledBackground: colors.grey[700],
            disabled: colors.grey[400],
        
        }
    }
})

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    backgroundColor: '#333842',
    border: '2px solid',
    borderColor: colors.grey[900],
    boxShadow: 24,
    p: 4,
  };



//   interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
//   }
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




export default function BalloonPage() {
    
    const [selected, setselected] = React.useState(0)
    const handleSelectedChange = (event, newValue) => {
        setselected(newValue)
    }




    
    const [onReset, setOnReset] = React.useState(false)
    const [toBePopped, setToBePopped] = React.useState(-1);
    const [numberOfBalloons, setNumberOfBalloons] = React.useState(10)
    const [triggerReset, setTriggerReset] = React.useState(false)
    const [gameState, setGameState] = React.useState(new BalloonGameState(true, 0, 10))
    const [resetGame, setResetGame] = React.useState(false)
    const [probability, setProbability] = React.useState(probabilityOfOutcome(numberOfBalloons, 0))
    
    const [coinState, setCoinState] = React.useState({result: "stayTails"})
    
    const [throwDart, setThrowDart] = React.useState(false)
    const [triggerCoinToss, setTriggerCoinToss] = React.useState(false)

    const [loading, setLoading] = React.useState(true);

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    useEffect(() => {

        if (coinState.result === 'stayTails') {
            setLoading(false)
        }
        else if (coinState.result === 'stayHeads') {
            setLoading(false)
        }
        else {
            setLoading(true)
        }

    }, [coinState])



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
            setTriggerCoinToss(false)
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
    
    //Used to pass the setToBePopped function into relevant components
    const handlePop = (x) => {
        setToBePopped(x)
    }

    //Used to pass the setCoinState function into relevant components
    const handleCoinState = (x) => {
        setCoinState(x)
    }
    
    //Used to 
    const handleThrowDartState = (x) => {
        console.log(`throwDart: ${throwDart}`)
        if (throwDart === false) {
            setThrowDart(x)
        }
        else {
            setThrowDart(false)
        }
    }

    //Throws a dart by randomly picking a balloon, and setting toBePopped to that number
    const triggerDartThrow = useCallback(() => {
        if (throwDart) {
            setThrowDart(false)
            let trialOutcome = (Math.floor(numberOfBalloons * Math.random()) + 1)
            setToBePopped(trialOutcome)
        }
    }, [throwDart, numberOfBalloons])


    //When a change is made to the throwDart flag, triggers a dart throw, while setting the throwDart flag back to false
    useEffect(() => {
        console.log(`throwDart value in useEffect that triggers dart throw: ${throwDart}`)
        if (throwDart) {
            setThrowDart(false)
            triggerDartThrow()
            
        }
    }, [throwDart, triggerDartThrow])



    useEffect(() => {
        console.log(`triggerCoinToss: ${triggerCoinToss}`)
        if (triggerCoinToss) {
            setTriggerCoinToss(false)

        let outcome = () => {

            if (Math.random() < 0.5) {
                if (coinState.result === 'stayTails') {
                    console.log("headsFromTails");
                    return "headsFromTails";    
                }
                else {
                    return "headsFromHeads";
                }
            } 
            else {

                if (coinState.result === 'stayHeads') {
                    console.log("tailsFromHeads");
                    return "tailsFromHeads";    
                }
                else {
                    console.log('tailsFromTails')
                    return "tailsFromTails";
                }
            }
            
        }
        setCoinState({ result: outcome()});
        console.log(coinState);

    }
    }, [triggerCoinToss, coinState])


    return(
    <>

    <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Game over!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You popped {gameState.balloonsPopped} total balloon{gameState.balloonsPopped === 1 ? '' : 's'}. 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The probability of popping exactly {gameState.balloonsPopped} total balloon{gameState.balloonsPopped === 1 ? '' : 's'} is {probability}%
            </Typography>
        </Box>
    </Modal>



    <div>
        <Tabs value={selected} onChange={handleSelectedChange} variant="fullWidth" >
            <Tab label="Explanation" {...a11yProps(0)} sx={{color: 'white'}}/>
            
            <Tab label="Game" {...a11yProps(1)} sx={{color: 'white'}}/>

        </Tabs>
    </div>
    <TabPanel value={selected} index={0} style={{width: '80vw'}}>
        <h3>The Balloon Game:</h3>
        <p>In this game you flip a coin and throw a dart randomly at balloons on a dartboard. At the start of the game the dartboard is filled with balloons. If the flipped coin lands on heads then you get to throw a dart at the dartboard. However, if the coin lands tails then the game is over, and your score is however many balloons you managed to pop. It is possible to hit the same spot on the dartboard multiple times, resulting in only one popped balloon for multiple throws.</p>
    </TabPanel>
    <TabPanel value={selected} index={1}>
        

        <Grid container direction='column' alignItems='center' style={{border: '2px solid green', margin: '5px'}}>
            
            
            <Grid item style={{marginLeft: '5vw', marginRight: '5vw'}}>
            
            <Grid container direction='row' justifyContent='center' style={{ marginLeft:'150px', marginRight: '150px', background:'hsl(70, 31%, 85%)', textAlign: 'center', width: 'fit-content', maxWidth: '600px'}}>
                

                {createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, handleGameState)}
                
                
            </Grid>
            
            
            </Grid>
            <Grid item>
            <Grid container direction='column' alignItems='center' style={
                {
                    border: '2px solid red', 
                    maxWidth: '80vw'

                }
                }>
                <Grid item style={{maxWidth: '80vw'}}>
                    <Grid container direction='row' justifyContent='center' width='80vw'>
                        {/* Grid item containing the game buttons */}
                        <Grid item>
                            <Grid container direction='column'>
                                <ThemeProvider theme={theme}>
                                <Button disabled={loading || !(gameState.ongoing)} variant='contained' style={{margin: '5px'}} onClick={() => {
                                    
                                    setTriggerCoinToss(true)
                                    console.log(coinState.result)
                                    console.log(toBePopped)
                                    if (onReset) {
                                        setOnReset(false)
                                    }
                                    
                                }}>Flip</Button>
                                <Button disabled={loading} variant='contained' style={{margin: '5px'}} onClick={() => {
                                    
                                    setOnReset(true)
                                    
                                }}>Reset</Button>
                                </ThemeProvider>
                                <Button variant='contained' style={{margin: '5px'}} href={Pdf} target="_blank">The Math</Button>

                            </Grid>
                        </Grid>
                        {/* Grid item containing game data */}
                        <Grid item>

                            <Grid container direction='column' justifyItems='center' justifyContent='center' alignItems='center' margin='5px'>
                                <Grid item>

                                    {/* Coin being flipped here */}
                                    <CoinFlip coinState={coinState} setCoinState={handleCoinState} throwDart={throwDart} setThrowDart={handleThrowDartState} handleOpenModal={handleOpenModal} gameState={gameState}></CoinFlip>
                                
                                </Grid>

                                {/* <Grid item minWidth='150px'>
                                    <div>{probability}%</div>
                                </Grid>  */}


                            </Grid>
                        </Grid>
                    </Grid>
               </Grid>

                <Grid container direction={'row'} justifyContent={"center"}>
                <Grid item>
                
                    <Balloon key={'sliderBalloon'} idNum={-2} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop} gameState={gameState} handleGameState={handleGameState}></Balloon>
                
                </Grid>
                
                <Grid item>
                    <>'s</>
                </Grid>
                                
                <Grid item style={{width: '40vw', maxWidth: '40vw', border: 'solid green 2px', height: '30px', margin: '10px'}}>
                    {/* <Grid container direction='row'> */}
                                {/* <Grid item width='40vw'> */}
                                <Slider disabled={loading} defaultValue={10} aria-label="Default" valueLabelDisplay="auto" value={numberOfBalloons} onChange={handleChangeOfBalloons}/>
                                {/* </Grid> */}
                    {/* </Grid> */}
                </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
    
    </TabPanel>

    </>);
}


//function being used to create each the balloon component
function createBalloons(numberOfBalloons, onReset, setOnReset, toBePopped, handlePop, gameState, handleGameState) {
    let result = []
    
    for (let i = 0; i < numberOfBalloons; i++) {
        result = result.concat((<Grid key={`uniqueGridId${i}`}item><Balloon key={`uniqueBalloonId${i + 1}`} idNum={i + 1} onReset={onReset} setOnReset={setOnReset} toBePopped={toBePopped} handlePop={handlePop} gameState={gameState} handleGameState={handleGameState}></Balloon></Grid>));
        
    }
    
    return result;
}


//Where the magic happens bay-bee!
function probabilityOfOutcome(numBalloons, popped) {
    let numerator = 1;
    let denominator = 2;
    for (let i = numBalloons; i > numBalloons - popped; i--) {
        numerator = numerator * i;
    }
    let twoNumBalloons = 2*numBalloons
    for (let i = twoNumBalloons; i > twoNumBalloons - popped; i--) {
        denominator = denominator * (i-1)
    }
    
    let result = (numerator / denominator) * 100
    
    //Controlling level of precision to display
    if (result % 1 === 0) {
        //Already precise enough, no need to truncate
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