import React from 'react';
import { Contact } from '../../models/contact.class';
/*import { STATUS } from '../../models/status.enum';*/
import ContactComponent from '../pure/contact';


const ContactList = () => {
    const defaultContact = new Contact('Axel', 'Melgar', 'axelclaudiom@gmail.com', true)
    return (
        <div>
              <div>Your Contact:</div>
              <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactList;
