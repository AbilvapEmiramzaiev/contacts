import './Wrapper.css';
import ContactItem from '../ContactItem/ContactItem';
import CreateContactForm from '../CreateContactForm/CreateContactForm';
import { useEffect, useState } from 'react';
import { ContactService } from '../../services/contacts.service';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
function Wrapper({contactsIsChanged,setContactsIsChanged}) {
    
    const [contacts, setContacts] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])
    //const [isChanged, setIsChanged] = useState(false)
    useEffect(()=>{
        const fetchContacts = async ()=>{
            const response = await ContactService.getAll();
            setContacts(response);
            setFilteredContacts(response);
        }
        fetchContacts();
        setContactsIsChanged(false);
    }, [contactsIsChanged])

    const handleSearch = (pattern) => {
        const filtered = contacts.filter((contact)=>
            contact.name.toLowerCase().includes(pattern.toLowerCase())    
        )
        setFilteredContacts(filtered);
    }

    return (
        <div className="wrapper">
            <h2>Contact list</h2>
            <SearchBar onSearch={ handleSearch }/>
            <div>
                {filteredContacts.length ? 
                    (filteredContacts.map(el => (
                        <ContactItem key={el.id} id={el.id} name={el.name} email={el.email}
                            setContactsIsChanged={setContactsIsChanged}/>
                    ))) :
                    (
                        <p>There are no contacts.</p>
                    )
                }
            </div>
            <Link to={{ pathname:'./create-contact'}}>Create</Link>
        </div>
    )
}
export default Wrapper;