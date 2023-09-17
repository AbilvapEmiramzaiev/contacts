import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from '../Wrapper/Wrapper.jsx'
import { useState } from "react";
import CreateContactForm from "../CreateContactForm/CreateContactForm";
const Router = () =>{
    const [contactsIsChanged, setContactsIsChanged] = useState(false);

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Wrapper contactsIsChanged={contactsIsChanged} setContactsIsChanged={setContactsIsChanged}/>} path='/'/>
                <Route element={<CreateContactForm setContactsIsChanged={setContactsIsChanged}/>} path='/create-contact'></Route>
                <Route element={<div>404 Not found.</div>} path='*'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;