import './ContactItem.css';
import DeleteButton from '../DeleteButton/DeleteButton';
function ContactItem({id, name, email }) {

    return (
        <div className='item'>
            <div>
                <span className='contact-name'>{name}</span>
                <div className='contact-email'>{email}</div>
            </div>
            <div>
                <DeleteButton id={id}/>
            </div>
        </div>

    )
}
export default ContactItem;