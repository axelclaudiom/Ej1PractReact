import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    
    
    const [IsOnline, setstatus] = useState(contact.status);

    const changeStatus = () =>  {
       
        IsOnline ? setstatus(!IsOnline) : setstatus(!IsOnline)
    }

    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.apellido}</h3>
            <h4>Email: {contact.email}</h4>
            <h5> Is Signed? : {IsOnline ? 'Conect' : 'desc'}</h5>
            <button onClick={changeStatus}>Change State</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
