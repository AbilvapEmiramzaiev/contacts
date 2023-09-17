    import './ContactItem.css';
    import DeleteButton from '../DeleteButton/DeleteButton';
    import { useNavigate } from 'react-router-dom';
    function ContactItem({id, name, email, setContactsIsChanged }) {

        const nav = useNavigate()

        return (
            <div className='item'>
                <div>
                    <span className='contact-name'>{name}</span>
                    <div className='contact-email'>{email}</div>
                </div>
                <div>
                    <DeleteButton id={id} setContactsIsChanged={setContactsIsChanged}/>
                    <button  onClick={()=>{
                        nav(`/create-contact?def_name=${name}&def_email=${email}&isChanged=true`)
                    }}>Edit</button>
                </div>
            </div>

        )
    }
    export default ContactItem;