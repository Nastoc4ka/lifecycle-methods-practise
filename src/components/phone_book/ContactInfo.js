import React from 'react';


const ContactInfo = (props) => {
    console.log('props ContactInfo: ' + props);
    const {firstName, lastName, sex, phones} = props.contactInfo;
    return (
        <div className={sex === 'female' ? 'female contactInfo' : 'male contactInfo'}>
            <h3>{firstName} {lastName}</h3>
            <p>{`sex: ${sex}`}</p>
            <ul>{phones.map(({type, number}) => {
                return <li key={number}>{`${type}.: ${number}`}</li>
            })}</ul>
        </div>
    )
};

export default ContactInfo