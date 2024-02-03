/* eslint-disable react/prop-types */
import React from 'react';
import "../styles/BallAnimation.style.css";
import { delay } from '../utils/BallNumbers';
class BallAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ballPositionX: this.props.left ? 0 : 100,
            ballPositionY: 0,
            direction: 1
        };
        this.animationInterval = null;
        this.number = 0;
    }
    componentDidMount() {
        this.setUpEnvironment();
    }
    componentDidUpdate(prevProps) {
        if (this.props.numBalls != prevProps.numBalls || this.props.speed != prevProps.speed) {
            this.setUpEnvironment();
        }
    }

    setUpEnvironment = () => {
        clearInterval(this.animationInterval);
        this.number = 0;
        this.setState({
            ballPositionX: this.props.left ? 0 : 100,
            ballPositionY: 0,
            direction: 1
        });
        if (this.props.delay != undefined) {
            setTimeout(() => {
                this.props.async ? this.startAsyncAnimation() : () => { };
            }, this.props.delay);
        } else {
            this.props.async ? this.startAsyncAnimation() : () => { };
        }
    }
    startAsyncAnimation = () => {
        const animate = async () => {
            const { distance, maxHeight, intervalTime, speed } = this.props;
            let { ballPositionX, direction } = this.state;

            let newX = ballPositionX + direction;
            if (newX >= distance || newX <= 0) {
                if (this.number > 1) {
                    await delay(1000 / speed);
                }
                direction *= -1;
                newX += direction;
            }
            this.number += 1;
            let newY = -4 * maxHeight / Math.pow(distance, 2) * Math.pow(newX - distance / 2, 2) + maxHeight;

            this.setState({ ballPositionX: newX, ballPositionY: newY, direction: direction });

            this.animationInterval = setTimeout(animate, intervalTime);
        };

        animate();
    };

    render() {
        const { ballPositionX, ballPositionY } = this.state;
        const ballStyle = {
            position: 'absolute',
            left: `${ballPositionX}px`,
            bottom: `${ballPositionY}px`,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'blue',
        };

        return <div style={ballStyle}></div>;
    }
}
BallAnimation.defaultProps = {
    distance: 100,
    maxHeight: 50,
    intervalTime: 0,
    left: true,
    delay: 0,
    speed: 1,
    numBalls: 3,
    async: true
};

export default BallAnimation;