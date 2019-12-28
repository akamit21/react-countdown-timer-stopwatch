import React, { Component } from "react";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      minutes: 0,
      seconds: 0,
      millisec: 0,
      isRunning: false
    };
  }

  handleStopWatch = () => {
    if (this.state.isRunning) {
      clearInterval(this.interval);
      this.setState({ isRunning: false });
    } else {
      this.interval = setInterval(() => {
        let time = this.state.time + 1;
        let mil = time % 10;
        let sec = Math.floor((time / 10) % 60);
        let min = Math.floor(time / 600);
        this.setState({
          isRunning: true,
          time: time,
          millisec: mil,
          seconds: sec < 10 ? "0" + sec : sec,
          minutes: min < 10 ? "0" + min : min
        });
      }, 100);
    }
  };

  resetStopWatch = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false,
      minutes: 0,
      seconds: 0,
      millisec: 0,
      time: 0
    });
  };

  render() {
    return (
      <div className="text-center py-5">
        <h2 className="display-4 mt-5">Stopwatch Timer</h2>
        <hr />
        <p className="display-1 my-5">
          {this.state.minutes} : {this.state.seconds} : {this.state.millisec}
        </p>
        <hr />
        <button
          className="btn btn-outline-light btn-lg m-1"
          onClick={this.handleStopWatch}
        >
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="btn btn-outline-light btn-lg m-1"
          onClick={this.resetStopWatch}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Stopwatch;
