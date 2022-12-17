import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import Status from './status';

const ContactComponent = ({contact}) => {

    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.apellido}</h3>
            <h4>Email: {contact.email}</h4>
            <Status estado={contact.status}></Status>         
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
