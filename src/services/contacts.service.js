import axios from "axios"

export const ContactService = {
    async getAll(){
        const response = await axios.get(('http://localhost:3000/contacts'))
        return response.data;
    }
}