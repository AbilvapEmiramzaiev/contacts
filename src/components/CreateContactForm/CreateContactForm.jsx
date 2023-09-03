import { useState } from "react";
import styles from './CreateContactForm.module.css'
import { ContactService } from "../../services/contacts.service";
import { useNavigate } from 'react-router-dom'
const clearData = {
    name: '',
    email: ''
}

const CreateContactForm = ({ setContacts }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const createContact = e => {
        e.preventDefault();
        const addContact = async () => {
            let id = await ContactService.getLastId();
            if(id === -1) { return; }//no id found / server is off
            else{
                await ContactService.addContact({id:id+1, ...data});
            } 
            setData(clearData)  
        }
        addContact();
        navigate('/')
    }

    return (
        <form className={styles.form}>
            <input
                placeholder="Name:"
                onChange={e => setData(prev =>
                    ({ ...prev, name: e.target.value }))}
                value={data.name}
            /><br />
            <input
                placeholder="E-mail:"
                onChange={e => setData(prev =>
                    ({ ...prev, email: e.target.value }))}
                value={data.email}
            /><br />
            <button onClick={e => createContact(e)}>Create</button>
        </form>
    )
}

export default CreateContactForm;