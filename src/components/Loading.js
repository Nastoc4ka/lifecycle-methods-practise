import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from "@fortawesome/free-solid-svg-icons/index";

function Loading() {
    console.log('render Loading');
    return (
        <p>
            <FontAwesomeIcon className='spinner' icon={faSpinner}/>:
        </p>
    )
}

export default Loading;

