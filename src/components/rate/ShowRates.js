import React from 'react';
import ShowDifference from "./ShowDifference";

function ShowRate({rate, rateDifference}) {
    console.log(`render ShowRate ${JSON.stringify(rate)} showRateDifference : ${JSON.stringify(rateDifference)}`);
    const {rateBuy, rateSell} = rate;
    const {rateBuyDiff, rateSellDiff} = rateDifference;
    return (
        <>
            <p>
                {`USD rate buy: ${rateBuy} `}
                {rateBuyDiff && <ShowDifference showRateDifference={rateBuyDiff}/>}
            </p>
            <p>
                {`USD rate sell: ${rateSell} `}
                {rateSellDiff && <ShowDifference showRateDifference={rateSellDiff}/>}
            </p>
        </>
    )
}

export default ShowRate;

