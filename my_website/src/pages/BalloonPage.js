import React, { useEffect } from "react";
import '../CSSFiles/balloons.css';
import { Button } from "@mui/material";
import Bubble from "../components/BalloonGame/Bubble";
import '../CSSFiles/bubble.css';

export default function BalloonPage() {

    const [balloonState, setBalloonState] = React.useState('balloon');
    const [poppingSoundNow, setPoppingSoundNow] = React.useState(false);
    const popBalloons = () => {
        //document.getElementById('balloon').classList.add('animation')
        console.log('popBalloons')
        //document.getElementsByClassName('balloon').className = document.getElementsByClassName('balloon').class + 'animation'
        setBalloonState('balloon popped')
      }
      
      const resetBalloons = () => {
        //document.getElementById('balloon').classList.remove('animation')
        console.log('resetBalloons')
        setBalloonState('balloon')
      }

      //let popSound = new Audio('../../assets/balloonpop-83760.mp3');

    //   document.addEventListener("DOMContentLoaded",() => {
    //     let bubbleWrap = document.getElementById("balloon"),
    //         popSound = new Audio('../../assets/balloonpop-83760.mp3')
    //     bubbleWrap.addEventListener("change",() => {
    //         popSound.play();
    //     });
    // });

    useEffect(() => {
        //popSound.play()
        setPoppingSoundNow(false);
    }, [poppingSoundNow])


    return(
        <>
            <div className="pageContainer">
                
                <div className={balloonState}></div>
                <div className={balloonState}></div>
                <div className={balloonState}></div>
                <div className={balloonState}></div>
                <div className={balloonState}></div>

            </div>
            <div>
                <Button onClick={() => {
                    popBalloons()
                    setPoppingSoundNow(true)

                }}>Pop</Button>
                <Button onClick={() => {resetBalloons()}}>Reset</Button>
            </div>

            
        </>
    );
}