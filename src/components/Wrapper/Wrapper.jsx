import './Wrapper.css';
import ContactItem from '../ContactItem/ContactItem';
import { contacts as contactsData } from '../../data/static.contacts.db.js'
import CreateContactForm from '../CreateContactForm/CreateContactForm';
import { useEffect, useState } from 'react';
import { ContactService } from '../../services/contacts.service';
import { Link } from 'react-router-dom';
function Wrapper() {
    const [contacts, setContacts] = useState([])
    useEffect(()=>{
        const fetchContacts = async ()=>{
            const response = await ContactService.getAll();
            setContacts(response);
        }
        fetchContacts();
    }, [])
    return (
        <div className="wrapper">
            <h2>Contact list</h2>
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
            <Link to='./create-contact'>Create</Link>
        </div>
    )
}
export default Wrapper;