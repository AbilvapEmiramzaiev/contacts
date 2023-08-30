import './ContactItem.css';
import DeleteButton from '../DeleteButton/DeleteButton';
function ContactItem({ name, email }) {

    return (
        <div className='item'>
            <div>
                <span className='contact-name'>{name}</span>
                <div className='contact-email'>{email}</div>
            </div>
            <div>
                <DeleteButton />
                <DeleteButton />
            </div>
        </div>

    )
}
export default ContactItem;