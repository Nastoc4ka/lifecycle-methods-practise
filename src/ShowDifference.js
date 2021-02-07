import React from 'react';


function ShowDifference({showRateDifference}) {
    console.log(`showDifference ${showRateDifference}`);
    const difference = Number(showRateDifference);
    const increase = difference > 0;
    return (
        <>
            {increase ? '  up' : '  down'}
            {`  ${difference}`}
        </>
    )
}

export default ShowDifference;

