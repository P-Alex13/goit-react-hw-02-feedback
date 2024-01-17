import React from "react";
import { Component } from "react";

 class Statistics extends Component {
constructor(props) {
  super(props)

  this.state = {
     good: 0,
     neutral: 0 ,
     bad : 0
  }
}

incrementGood(){
    this.setState({
      good: this.state.good + 1,
    });
}

incrementNeutral(){
    this.setState({
     neutral: this.state.neutral + 1,
    });
}

incrementBad(){
    this.setState({
      bad: this.state.bad + 1,
    });
}

      



  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
        </div>
        <div>
          <button onClick={() => this.incrementGood()}>
            Good - {this.state.good}
          </button>
          <button onClick={() => this.incrementNeutral()}>
            Neutral - {this.state.neutral}
          </button>
          <button onClick={() => this.incrementBad()}>
            Bad - {this.state.bad}
          </button>
        </div>
        <div>
          <h1>Statistics</h1>
        </div>
        <div> Good: {this.state.good} </div>

        <div>Neutral: {this.state.neutral}</div>
        <div> Bad: {this.state.bad}</div>
      </div>
    );
  }
}

export default Statistics