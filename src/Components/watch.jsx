import React, { Component } from "react";

class Watch extends Component {
  state = {};
  render() {
    const spanStyle = {
      fontSize: 50,
      margin: 4
    };
    return (
      <React.Fragment>
        <div style={spanStyle}>
          <span style={spanStyle}>
            {this.props.hours < 10 ? "0" + this.props.hours : this.props.hours}
          </span>
          :
          <span style={spanStyle}>
            {this.props.minutes < 10
              ? "0" + this.props.minutes
              : this.props.minutes}
          </span>
          :
          <span style={spanStyle}>
            {this.props.seconds < 10
              ? "0" + this.props.seconds
              : this.props.seconds}
          </span>
        </div>
        <div>
          <button
            className="btn btn-primary m-2"
            onClick={this.props.onStart}
            disabled={this.props.start === 1}
          >
            Start
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={this.props.onStop}
            disabled={this.props.start === 0}
          >
            Stop
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Watch;
