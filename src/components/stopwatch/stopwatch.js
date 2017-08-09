import React, { Component } from "react";

export class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      previousTime: 0,
      running: false
    };

    this.onStart = this.onStart.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onTick = this.onTick.bind(this);
  }

  componentDidMount() {
     this.interval = setInterval(this.onTick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTick() {
    if(this.state.running) {
        let now = Date.now();
        this.setState(() => {
            return {
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            }
    });
    }
  }

  onStart() {
    this.setState(() => {
        return {
          running: true,
          previousTime: Date.now()
        }
    });
  }

  onReset() {
      this.setState(() => {
        return {
          elapsedTime: 0,
          previousTime: Date.now()
        }
    });
  }

  onStop() {
      this.setState(() => {
        return {
          running: false
        }
    });
  }

  render() {
    const seconds = Math.round(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">
          {seconds}
        </div>
        {this.state.running
          ? <button onClick={this.onStop}>Stop</button>
          : <button onClick={this.onStart}>Start</button>}
          <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
