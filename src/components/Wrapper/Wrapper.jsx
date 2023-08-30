import './Wrapper.css';
import ContactItem from '../ContactItem/ContactItem';
import {contacts} from '.../data/static.contacts.db.js'
function Wrapper() {

    return (
        <div className="wrapper">
            <h2>Contact list</h2>
            <div>{contacts.map((el, index) => (
                <ContactItem key={index} name={el.name} email={el.email} />
            ))}
            </div>
        </div>
    )
}
export default Wrapper;