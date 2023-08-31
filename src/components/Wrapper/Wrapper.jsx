import './Wrapper.css';
import ContactItem from '../ContactItem/ContactItem';
import { contacts as contactsData } from '../../data/static.contacts.db.js'
import CreateContactForm from '../CreateContactForm/CreateContactForm';
import { useState } from 'react';
function Wrapper() {

    const [contacts, setContacts] = useState(contactsData)

    return (
        <div className="wrapper">
            <h2>Contact list</h2>
            <CreateContactForm setContacts={setContacts}/>
            <div>
                {contacts.length ? 
                    (contacts.map(el => (
                        <ContactItem key={el.id} name={el.name} email={el.email} />
                    ))) :
                    (
                        <p>There are no contacts.</p>
                    )
                }
            </div>
        </div>
    )
}
export default Wrapper;