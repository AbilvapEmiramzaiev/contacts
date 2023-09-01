import { useState } from "react";
import styles from './CreateContactForm.module.css'

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
        e.preventDefault()
        setContacts(prev => [{ id: prev.length + 1, ...data }, ...prev])
        setData(clearData)
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