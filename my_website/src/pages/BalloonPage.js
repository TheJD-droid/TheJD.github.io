import React, { useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';
import Balloon from "../components/BalloonGame/Balloon";
import { Grid } from "@mui/material";
export default function BalloonPage() {

    
      //let popSound = new Audio('../../assets/balloonpop-83760.mp3');

    //   document.addEventListener("DOMContentLoaded",() => {
    //     let bubbleWrap = document.getElementById("balloon"),
    //         popSound = new Audio('../../assets/balloonpop-83760.mp3')
    //     bubbleWrap.addEventListener("change",() => {
    //         popSound.play();
    //     });
    // });
    const [balloonState, setBalloonState] = React.useState('balloon');
    const [poppingSoundNow, setPoppingSoundNow] = React.useState(false);
    const [onReset, setOnReset] = React.useState(false)


    useEffect(() => {
        setPoppingSoundNow(false);
    }, [poppingSoundNow]);
    


    useEffect(() => {
        if (onReset) {
            setOnReset(false)
        }
        resetBalloons()
    }, [onReset]);

    const popBalloons = () => {
        console.log('popBalloons')
        setBalloonState('balloon popped')
      }
      
      const resetBalloons = () => {
        console.log('resetBalloons')
        setBalloonState('balloon')
      }

    return(
        <>
            <div className="pageContainer">
            <Grid container>
                <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid>
                <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid>
                <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid>
                <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid>
                <Grid item>
                    <Balloon className={balloonState} onReset={onReset} setOnReset={setOnReset}></Balloon>
                </Grid>
            </Grid>
            </div>
            <div>
                <Button onClick={() => {
                    popBalloons()
                    //setPoppingSoundNow(true)

                }}>Pop</Button>
                <Button onClick={() => {
                    
                        setOnReset(true)
                    
                    }}>Reset</Button>
            </div>

            
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