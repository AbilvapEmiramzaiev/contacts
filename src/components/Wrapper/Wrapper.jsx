import ContactItem from '../ContactItem/ContactItem';
import CreateContactForm from '../CreateContactForm/CreateContactForm';
import { useEffect, useState } from 'react';
import { ContactService } from '../../services/contacts.service';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
function Wrapper({ contactsIsChanged, setContactsIsChanged }) {

    const [contacts, setContacts] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])
    //const [isChanged, setIsChanged] = useState(false)
    useEffect(() => {
        const fetchContacts = async () => {
            const response = await ContactService.getAll();
            setContacts(response);
            setFilteredContacts(response);
        }
        fetchContacts();
        setContactsIsChanged(false);
    }, [contactsIsChanged])

    const handleSearch = (pattern) => {
        const filtered = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(pattern.toLowerCase())
        )
        setFilteredContacts(filtered);
    }

    return (
        <div className="bg-white mt-4 h-screen mx-auto w-500 p-5 rounded-2xl">
            <span className="block text-center mt-2 font-semibold font-serif text-xl">Contact list</span>
            <SearchBar onSearch={handleSearch} />
            <div className='h-[400px] overflow-x-auto'>
                {filteredContacts.length ?
                    (filteredContacts.map(el => (
                        <ContactItem key={el.id} id={el.id} name={el.name} email={el.email}
                            setContactsIsChanged={setContactsIsChanged} />
                    ))) :
                    (
                        <div className='m-auto text-center font-serif text-2xl font-bold'>There are no contacts.</div>
                    )
                }
            </div>
            <Link to={{ pathname: './create-contact' }}
                className='bg-gray-200 py-1 px-1 mt-4 font-serif text-lg rounded-full block w-1/2 text-center m-auto
                 hover:bg-hover hover:text-white  
                '
            >Create</Link>
        </div>
    )
}
export default Wrapper;