import DeleteButton from '../DeleteButton/DeleteButton';
import { useNavigate } from 'react-router-dom';
function ContactItem({ id, name, email, setContactsIsChanged }) {

    const nav = useNavigate()

    return (
        <div className='flex bg-item-bg rounded-md opacity-80 justify-between m-1.5 p-1.5'>
            <div>
                <span className='font-bold'>{name}</span>
                <div className='contact-email'>{email}</div>
            </div>
            <div className='flex items-center flex-row gap-2.5'>
                <DeleteButton id={id} setContactsIsChanged={setContactsIsChanged} />
                <button className='my-1 mr-2 p-2' onClick={() => {
                    nav(`/create-contact?def_name=${name}&def_email=${email}&isChanged=true`)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path d="M18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
                    </svg>
                </button>
            </div >
        </div >

    )
}
export default ContactItem;