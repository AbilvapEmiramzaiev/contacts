import { useState } from "react";
import styles from './CreateContactForm.module.css'
import { ContactService } from "../../services/contacts.service";
const clearData = {
    name: '',
    email: ''
}
const CreateContactForm = ({ setContacts }) => {
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const createContact = e => {
        e.preventDefault();
        const addContact = async () => {
            let id = await ContactService.getLastId()+1;
            await ContactService.addContact({id:id, ...data});
            setData(clearData)
        }
        addContact();
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