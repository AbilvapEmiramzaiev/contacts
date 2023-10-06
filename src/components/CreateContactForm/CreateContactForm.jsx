import { useEffect, useState, useId } from "react";
import { ContactService } from "../../services/contacts.service";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
const clearData = {
    name: '',
    email: ''
}

const CreateContactForm = ({ setContactsIsChanged }) => {
    const navigate = useNavigate();
    const [id, setId] = useState(-1);
    const [params] = useSearchParams();
    const [data, setData] = useState({
        name: '',
        email: ''
    })
    useEffect(() => {
        ContactService.getLastId()
            .then(value => { setId(value) })
        if (params.get('def_name')) {
            const linkParams = {
                name: params.get('def_name'),
                email: params.get('def_email')
            }
            setData(linkParams)
        }
    }, [])

    const createContact = e => {
        e.preventDefault();
        let addContact;
        if (params.get('def_name')) {
            addContact = async () => {
                const oldContact = await ContactService.findByName(params.get('def_name'));
                await ContactService.editContact({ id: oldContact[0].id, ...data });
            }
        }
        else {
            addContact = async () => {
                setId(prev => prev + 1);
                await ContactService.addContact({ id: id + 1, ...data });
            }
        }
        addContact();
        setData(clearData)
        setContactsIsChanged(true);
        navigate('/')
    }

    return (
        <div className="flex min-h-screen justify-center items-center">

            <form className="form bg-gray-200 m-14 p-5">
                <span className="mb-8 font-serif underline underline-offset-8">Setting Contact</span>
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
                <button className="ring-1 p-1 px-14 bg-white font-serif" 
                onClick={e => createContact(e)}>
                    Confirm</button>
            </form>
        </div>
    )
}

export default CreateContactForm;