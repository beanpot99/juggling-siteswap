import { Component } from 'react';
import './App.css';
import BallAnimation from './components/BallAnimation';
import { ballNumbersAsync, ballNumbersSync } from './utils/BallNumbers';
import SwitchToggle from './components/SwitchToggle';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBalls: 3,
      speedFactor: 1,
      loading: false,
      async: true
    };
  }

  handleBallChange = (event) => {
    this.setState({ loading: true });
    const value = parseInt(event.target.value, 10);

    this.setState({ numberOfBalls: value, loading: false });
  };

  handleSpeedChange = (event) => {
    this.setState({ speedFactor: parseFloat(event.target.value) });
  };

  handleSyncChange = (event) => {
    this.setState({ loading: true });
    this.setState({ async: event });
    this.setState({ loading: false });
  }

  generateBallAnimations = () => {
    const { numberOfBalls, speedFactor, async } = this.state;
    const baseIntervalTime = 10;
    let ballAnimations = [];
    for (let i = 0; i < numberOfBalls; i++) {
      const ballObject = async ? ballNumbersAsync[numberOfBalls - 1] : ballNumbersSync[numberOfBalls - 1];
      let left = ballObject[i].left;
      let key = Math.floor(Math.random() * 10);
      ballAnimations.push(
        <BallAnimation
          key={`${i}-${key}`}
          distance={100}
          maxHeight={50}
          intervalTime={baseIntervalTime / speedFactor}
          left={left}
          delay={ballObject[i].delay}
          async={async}
          speed={speedFactor}
          numBalls={this.state.numberOfBalls}
        />
      );
    }
    return ballAnimations;
  };

  render() {
    const syncEligibleNumbers = [2, 4, 6];
    return (
      <div className='App'>
        <div className='wrapped'>
          {this.state.loading ? <p /> : this.generateBallAnimations()}
        </div>
        <div className='buttons-container'>
          <div className='ball-toggle'>
            <select onChange={this.handleBallChange} value={this.state.numberOfBalls}>
              <option value="2">2 Balls</option>
              <option value="3">3 Balls</option>
              <option value="4">4 Balls</option>
              <option value="5">5 Balls</option>
            </select>
          </div>
          <div className='switch-toggle'>
            <SwitchToggle handleChange={this.handleSyncChange} asyncOnly={!syncEligibleNumbers.includes(this.state.numberOfBalls)} />
          </div>
        </div>
        {/* <div className='speed-control'>
          <label>
            Speed: <input type="range" min="0.1" max="2" step="0.1" value={speedFactor} onChange={this.handleSpeedChange} />
          </label>
        </div> */}
      </div>
    );
  }
}

export default App;
