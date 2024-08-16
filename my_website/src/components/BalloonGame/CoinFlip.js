import React from "react";


class CoinFlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      nader: "nader"
    };
    // this.coinToss = props.coinToss.bind();
    this.coinToss = this.coinToss.bind(this);
//    this.coinState = props.coinState.bind();
    //this.coinState = props.coinState;
    //this.coinState = props.coinState;
    //this.setCoinState = props.setCoinState.bind(this);
    this.setCoinState = this.setState.bind(this)
    //this.getCoinState = props.getCoinState.bind(this);
    //this.setState = props.setCoinState.bind(this);
    
    //this.setCoinState = props.setCoinState;
    //this.getCoinState = props.getCoinState;
    //this.callCoinToss = props.callCoinToss(this.coinToss);
  }


  coinToss() {
    this.setState({ nader: "" }, () => {
      if (Math.random() < 0.5) {
        //this.setState({ result: "heads" });
        this.setCoinState( { result: "heads" });
        //this.setCoinState('heads'); //changes the coin state on the balloonPage, but not in the component
        //this.coinState = 'heads'; //changes the coin state here in the component, but not on the balloonPage
        console.log("heads");
      } else {
        //this.setState({ result: "tails" });
        this.setCoinState( { result: "tails" });
        //this.setCoinState('tails'); 
        //this.coinState = 'tails';
        console.log("tails");
      }
    
    });
    //this.props.setCoinState(this.state);
    return this.state;
  }

  
  render() {
    return (
      <div className="CoinFlip">
        <div>state.result: {this.state.result}</div>
        {/* <div>coinState: {this.coinState}</div> */}
        {/* {console.log(this.coinState)} */}
        <div id="coin" className={this.state.result} key={+new Date()}>
          <div className="side-a">
            <h2>TAIL</h2>
          </div>
          <div className="side-b">
            <h2>HEAD</h2>
          </div>
        </div>
        <button id="btn" onClick={this.coinToss}>
          Coin Toss
        </button>
      </div>
    );
  }
}

export default CoinFlip;
