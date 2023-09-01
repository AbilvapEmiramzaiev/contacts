import axios from "axios"

export const ContactService = {
    async getAll() {
        try {
            const response = await axios.get(('http://localhost:3000/contacts'))
            return response.data;
        }
        catch (error) {
            console.log(error.message);
            return {};
        }
    }
}