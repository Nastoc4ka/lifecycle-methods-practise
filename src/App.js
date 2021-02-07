import React, {Component} from 'react';
import ShowRates from "./ShowRates";
import Loading from "./Loading";
import './App.css';

class App extends Component {

    state = {
        rate: '',
        rateDifference: '',
        loading: true
    };

    getRate = () => {
        console.log('getRate');
        this.setState({
            loading: true,
        });
        fetch('https://api.ifcityevent.com/currency')
            .then(response => response.json())
            .then(rateInfo => {
                this.setState({
                    rate: rateInfo,
                    loading: false,
                })
            })
    };

    updateDifference = ({rateBuyDiff, rateSellDiff}) => {
        this.setState({
            rateDifference: {rateBuyDiff, rateSellDiff}
        });
    };

    componentDidMount() {
        console.log(`componentDidMount rate: ${JSON.stringify(this.state.rate)}`);
        this.getRate();
        // setInterval(() => this.getRate(), 3000000);
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

    render() {
        console.log('render');
        const {rate, loading, rateDifference} = this.state;
        return (
            <div className="App">
                <button onClick={this.getRate}>Update UAH/USD rate</button>
                {loading ? <Loading/> : <ShowRates rate={rate} rateDifference={rateDifference}/>}
            </div>
        )
    }
}

export default App;
