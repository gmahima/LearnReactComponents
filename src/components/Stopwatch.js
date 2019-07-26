import React, {Component} from 'react'

class Stopwatch extends Component {

  state={
    isRunning: false,
    prevTime: 0,
    elapsedTime: 0
  }
  componentDidMount() {
    this.intervalId = setInterval(()=> {this.tick(), 1000})
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  tick= () => {
    if(this.state.isRunning) {
      const now= Date.now();
      this.setState(prevState => {
        return{
          prevTime: now,
          elapsedTime: prevState.elapsedTime + (now-prevState.prevTime)
        }

      })

    }
  }
  handleStopwatch=() => {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      }

    })
    if(!this.state.isRunning) {
      this.setState({prevTime: Date.now()})
    }
  }
  handleReset = () => {
    this.setState({
      elapsedTime: 0
    })
  }
  render() {
    const seconds = Math.floor(this.state.elapsedTime/1000);
    return (
      <div classname="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.state.handleStopwatch}>{this.state.isRunning? 'Stop' : 'Start' }</button>
        <button onClick={this.state.handleReset}>Reset</button>
      </div>

    )
  }
}
export default Stopwatch
