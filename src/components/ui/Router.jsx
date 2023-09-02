import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from '../Wrapper/Wrapper.jsx'
import CreateContactForm from "../CreateContactForm/CreateContactForm";
const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Wrapper/>} path='/'/>
                <Route element={<CreateContactForm/>} path='/create-contact'></Route>
                <Route element={<div>404 Not found.</div>} path='*'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;