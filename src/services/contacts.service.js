import axios from "axios"

const jsonserverURL = 'http://localhost:3001/contacts';

export const ContactService = {
    async getAll() {
        try {
            const response = await axios.get(jsonserverURL)
            return response.data;
        }
        catch (error) {
            console.log(error.message);
            return {};
        }
    },
    async getLastId() {
        const response = await axios.get(jsonserverURL)
            .catch((error) => {
                console.log(error.message);
            })
        if(response === undefined) return -1;
        return response.data.length;
    },
    async addContact(newContacts) {
       await axios.post(jsonserverURL, newContacts)
            .catch((error) => {
                console.log(error.message);
            })
    },
    async delContact(id){
        await axios.delete(jsonserverURL+`/${id}`)
            .catch((error) =>{
                console.log(error.message);
            })
    }
}