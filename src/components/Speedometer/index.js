import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevstate => {
      let b = null
      if (prevstate.speed < 200) {
        b += prevstate.speed + 10
      } else {
        b = prevstate.speed
      }
      return {speed: b}
    })
  }

  onBreaks = () => {
    this.setState(prevstate => {
      let b = null
      if (prevstate.speed < 10) {
        b = prevstate.speed
      } else {
        b = prevstate.speed - 10
      }
      return {speed: b}
    })
  }

  render() {
    const {speed} = this.state
    const {imgUrl} = this.props
    return (
      <div className="background-container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img className="avatar" src={imgUrl} alt="speedometer" />
        <h3 className="heading3">Speed is {speed}mph</h3>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button btn1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button btn2" onClick={this.onBreaks}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
