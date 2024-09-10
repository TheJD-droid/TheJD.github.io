import React from "react";
import { useEffect } from "react";



export default function CoinFlip(props) {


    const [state, setState] = React.useState({result: "stayTails"});

    

    
    useEffect(() => {
        setState(props.coinState);
    }, [props.coinState]);



    return (
        <div className="CoinFlip">
          {/* <div>state.result: {state.result}</div> */}
          <div id="coin" className={state.result} key={+new Date()}
          onAnimationEnd = {(e) => { 
            console.log('coin animation has ended')
            

            if ((props.coinState.result === 'tailsFromHeads') || (props.coinState.result === 'tailsFromTails')) {
              props.setCoinState({result: "stayTails"})
              props.gameState.ongoing = false
              props.handleOpenModal()
              console.log(props.gameState)
            }


            if ((props.coinState.result === 'headsFromTails') || (props.coinState.result === 'headsFromHeads')) {
              props.setCoinState({result: "stayHeads"})
              props.setThrowDart(true)
            
            }
            console.log(props.coinState)
            
          }
        }>
            <div className="side-a">
          
              <h2>TAIL</h2>
            </div>
            <div className="side-b">
              <h2>HEAD</h2>
            </div>
          </div>
        </div>
      );


}


