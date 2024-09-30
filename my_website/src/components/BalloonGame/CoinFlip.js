import React from "react";
import { useEffect } from "react";
// import heads from './../../assets/heads.jpg';
// import tails from './../../assets/tails.jpg';
import coinFlickSound from '../../assets/coin-flick.mp3';
import coinDropSound from '../../assets/coin-drop.wav';
export default function CoinFlip(props) {


    const [state, setState] = React.useState({result: "stayTails"});
    //const [playingSound, setPlayingSound] = React.useState(false)
    const coinFlickAudio = new Audio(coinFlickSound)
    const coinDropAudio = new Audio(coinDropSound)
    
    coinDropAudio.addEventListener('ended', () => {
      props.setSoundPlaying(false)
      //setPlayingSound(false);
      console.log(`coinAnimation1: ${props.coinAnimationInProgress}`)
      props.setCoinAnimationInProgress(false)
      console.log(`coinAnimation2: ${props.coinAnimationInProgress}`)
    })

    coinFlickAudio.addEventListener('ended', () => {
      coinDropAudio.play()
    })

    coinFlickAudio.addEventListener('play', () => {
      props.setSoundPlaying(true)
      //setPlayingSound(true)
    })

    // function playCoinSound() {
    //   console.log('playSound')
    //   if (!playingSound) {
    //     coinFlickAudio.play()
    //   }
        
      
    // }


    
    useEffect(() => {
        setState(props.coinState);
    }, [props.coinState]);



    return (
        <div className="CoinFlip">
          {/* <div>state.result: {state.result}</div> */}
          <div id="coin" className={state.result} key={+new Date()}
          onAnimationStart={(e) => {
            console.log('animationStart')
            // playCoinSound()
            // if (!playingSound) {
            //       coinFlickAudio.play()
            //     }
            if (!(props.soundPlaying)) {
              coinFlickAudio.play()
            }
            //coinFlickAudio.play()
            
          }}
          onAnimationEnd = {(e) => { 
            // console.log('coin animation has ended')
            
            if ((props.coinState.result === 'tailsFromHeads') || (props.coinState.result === 'tailsFromTails')) {
              props.setCoinState({result: "stayTails"})
              props.gameState.ongoing = false
              props.handleOpenModal()
              // console.log(props.gameState)
            }


            if ((props.coinState.result === 'headsFromTails') || (props.coinState.result === 'headsFromHeads')) {
              props.setCoinState({result: "stayHeads"})
              props.setThrowDart(true);
              
            }

            //props.setCoinAnimationInProgress(false);
            
            
            // console.log(props.coinState)
            
          }
        }>
            <div className="side-a">
            </div>
            
            <div className="side-b">
            </div>
          </div>
        </div>
      );


}


