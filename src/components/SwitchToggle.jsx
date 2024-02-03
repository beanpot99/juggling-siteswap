/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/SwitchToggle.style.css'; // Assuming your CSS is in this file

class ToggleSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { option: 'async' }; // Default to 'sync'
    }

    handleChange = (event) => {
        this.props.handleChange(event.target.value)
    };

    render() {
        const { option } = this.state;
        return (
            <div className="toggle-switch">
                <input
                    id="sync"
                    type="radio"
                    value="sync"
                    checked={option === 'sync'}
                    disabled={this.props.asyncOnly}
                    onChange={this.handleChange}
                />
                <label htmlFor="sync" className="toggle-label">Sync</label>

                <input
                    id="async"
                    type="radio"
                    value="async"
                    checked={option === 'async'}
                    onChange={this.handleChange}
                />
                <label htmlFor="async" className="toggle-label">Async</label>
            </div>
        );
    }
}

ToggleSwitch.defaultProps = {
    handleChange: () => { },
    asyncOnly: true
};
export default ToggleSwitch;
