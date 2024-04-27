import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='contact'>
            <p>{props.name}</p>
            <p>{props.phone}</p>
        </div>
    );
};

export default Contact;