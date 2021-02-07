

class rateService {
    _apiRate = 'https://api.ifcityevent.com/currency';

    getRateInfo = () => {
        fetch(_apiRate)
            .then(response => response.json())
    };

    getRateBuy = () => this.getRateInfo().rateBuy;
    getRateSell = () => this.getRateInfo().rateSell;
    getRateName = () => this.getRateInfo().name;


}