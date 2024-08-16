import React from "react";
import { useEffect } from "react";



export default function CoinFlip(props) {


    const [state, setState] = React.useState({result: "", nader: "nader"});

    

    
    useEffect(() => {
        setState(props.coinState);
    }, [props.coinState]);



    return (
        <div className="CoinFlip">
          <div>state.result: {state.result}</div>
          <div id="coin" className={state.result} key={+new Date()}
          onAnimationEnd = {(e) => { 
            console.log('coin animation has ended')
            props.setThrowDart(true)
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

//   coinToss() {
//     this.setState({ nader: "" }, () => {
//       if (Math.random() < 0.5) {
//         //this.setState({ result: "heads" });
//         this.setCoinState( { result: "heads" });
//         //this.setCoinState('heads'); //changes the coin state on the balloonPage, but not in the component
//         //this.coinState = 'heads'; //changes the coin state here in the component, but not on the balloonPage
//         console.log("heads");
//       } else {
//         //this.setState({ result: "tails" });
//         this.setCoinState( { result: "tails" });
//         //this.setCoinState('tails'); 
//         //this.coinState = 'tails';
//         console.log("tails");
//       }
    
//     });
//     //this.props.setCoinState(this.state);
//     return this.state;
//   }

  
//   render() {
    
//   }


