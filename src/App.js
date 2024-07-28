import React, { Component } from "react";
import "./App.css";
import Watch from "./Components/watch";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    start: 0,
    stop: 0
  };

  handleStart = () => {
    this.setState({ start: 1 });
    let interval = setInterval(() => {
      let sec = this.state.seconds;
      let min = this.state.minutes;
      let hrs = this.state.hours;
      if (sec >= 59) {
        if (min >= 59) {
          if (hrs >= 59) {
            hrs = 0;
            min = 0;
            sec = 0;
            this.setState({ hours: hrs, minutes: min, seconds: sec });
          } else {
            min = 0;
            sec = 0;
            this.setState({ hours: hrs + 1, minutes: min, seconds: sec });
          }
        } else {
          sec = 0;
          this.setState({ minutes: min + 1, seconds: sec });
        }
      } else {
        this.setState({ seconds: sec + 1 });
      }
      window.$interval = interval;
    }, 1000);
  };

  handleStop = () => {
    this.setState({ start: 0 });
    clearInterval(window.$interval);
  };

  render() {
    const mainStyle = {
      marginTop: "15%"
    };
    return (
      <div className="container text-center" style={mainStyle}>
        <h4>StopWatch</h4>
        <Watch
          start={this.state.start}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          onStart={this.handleStart}
          onStop={this.handleStop}
        />
      </div>
    );
  }
}

export default App;
