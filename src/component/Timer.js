import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      minutes: "",
      seconds: "",
      isRunning: false
    };
  }
  handleTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.interval);
      this.setState({ isRunning: false });
    } else {
      let time = this.state.time;
      this.interval = setInterval(() => {
        let min = Math.floor(time / 60);
        let sec = time - min * 60;
        if (time > 0) {
          this.setState({
            isRunning: true,
            time: time,
            seconds: sec < 10 ? "0" + sec : sec,
            minutes: min < 10 ? "0" + min : min
          });
          time = this.state.time - 1;
        } else {
          clearInterval(this.interval);
          this.setState({
            isRunning: false,
            minutes: "",
            seconds: "",
            time: ""
          });
        }
      }, 1000);
    }
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false, minutes: "", seconds: "", time: "" });
  };

  render() {
    // const count = this.state.count;
    return (
      <div className="text-center py-5">
        <h2 className="display-4 mt-5">Countdown Timer</h2>
        <hr />
        <p className="display-1 my-5">
          {this.state.minutes === "" ? "00" : this.state.minutes}&nbsp;:&nbsp;
          {this.state.seconds === "" ? "00" : this.state.seconds}
        </p>
        <hr />
        <input
          type="text"
          className="form-control form-control-lg w-50 m-auto"
          placeholder="Set Timer..."
          onChange={e => this.setState({ time: e.target.value * 60 })}
        />
        <br />
        <button
          className="btn btn-outline-light btn-lg m-1"
          onClick={this.handleTimer}
        >
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="btn btn-outline-light btn-lg m-1"
          onClick={this.resetTimer}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
