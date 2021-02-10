import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltDown, faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons';


function ShowDifference({showRateDifference}) {
    console.log(`showDifference ${showRateDifference}`);
    const difference = Number(showRateDifference);
    const increase = difference > 0;
    return (
        <>
            {increase ?
                <FontAwesomeIcon className='increase' icon={faLongArrowAltUp}/> :
                <FontAwesomeIcon className='decrease' icon={faLongArrowAltDown}/>}
            {`  ${difference}`}
        </>
    )
}

export default ShowDifference;

