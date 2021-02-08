import React, {Component} from 'react';
import ShowRates from "./ShowRates";
import Loading from "./Loading";
import './App.css';

class App extends Component {

    state = {
        rate: '',
        rateDifference: '',
        loading: true,
        rateUpdateToggle: true
    };

    getRate = () => {
        console.log('getRate');
        this.mounted = true;
        this.setState({
            loading: true,
        });
        if (this.mounted) {
            fetch('https://api.ifcityevent.com/currency')
                .then(response => response.json())
                .then(rateInfo => {
                    this.setState({
                        rate: rateInfo,
                        loading: false,
                    })
                })
        }
    };

    updateDifference = ({rateBuyDiff, rateSellDiff}) => {
        this.setState({
            rateDifference: {rateBuyDiff, rateSellDiff}
        });
    };

    componentDidMount() {
        console.log(`componentDidMount rate: ${JSON.stringify(this.state.rate)}`);
        this.getRate();
        this.interval = setInterval(() => this.getRate(), 30000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate()`);
        const {rateBuy, rateSell} = prevState.rate;
        const {rateBuy: rateBuyActual, rateSell: rateSellActual} = this.state.rate;

        if (prevState.rate && (rateBuy !== rateBuyActual || rateSell !== rateSellActual)) {
            const rateBuyDiff = Math.round((Number(rateBuyActual) - Number(rateBuy)) * 10000) / 10000;
            const rateSellDiff = Math.round((Number(rateSellActual) - Number(rateSell)) * 10000) / 10000;
            this.updateDifference({rateBuyDiff, rateSellDiff});
            console.log(`componentDidUpdate prevState: ${JSON.stringify(prevState)}`);
        }
    }

    componentWillUnmount() {
        this.mounted = false;
        console.log(`componentWillUnmount(), interval is cleared`);
        clearInterval(this.interval);
    }

    render() {
        console.log('render()');
        const {rate, loading, rateDifference, rateUpdateToggle} = this.state;
        return (
            <div className="App">
                <button onClick={this.getRate}>Update UAH/USD rate</button>
                {loading ? <Loading/> : rateUpdateToggle && <ShowRates rate={rate} rateDifference={rateDifference}/>}
            </div>
        )
    }
}

export default App;
