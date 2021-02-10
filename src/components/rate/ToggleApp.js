import React, {Component} from 'react';
import AppRate from "./AppRate";


class ToggleApp extends Component {

    state = {
        rateUpdateToggle: true
    };

    toggleApp = () => {
        this.setState((state) => {
            return {
                rateUpdateToggle: !state.rateUpdateToggle
            }
        })
    };

    render() {
        const toggleButton = this.state.rateUpdateToggle ? 'Stop rate updating' : 'Update rate';
        return (
            <div className='toggleApp'>
                {this.state.rateUpdateToggle && <AppRate/>}
                <button onClick={this.toggleApp}>{toggleButton}</button>
            </div>
        )
    }
}

export default ToggleApp;
