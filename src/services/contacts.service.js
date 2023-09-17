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
        if (response === undefined) return -1;
        const maxId = response.data.reduce((max,currentObj) =>{
            return Math.max(max, currentObj.id)
        },-1);
        return maxId;
    },
    async addContact(newContacts) {
        await axios.post(jsonserverURL, newContacts)
            .catch((error) => {
                console.log(error.message);
            })
    },
    async editContact(editedContact) {
        await axios.put(jsonserverURL + `/${editedContact.id}`, editedContact)
        .catch((error) => {
                console.log(error.message);
            })
    },
    async findByName(name) {
        const response =  await axios.get(jsonserverURL + `?name=${name}`)
            .catch((error) => {
                console.log(error.message);
            });
            return response.data;
    },
    async delContact(id) {
        await axios.delete(jsonserverURL + `/${id}`)
            .catch((error) => {
                console.log(error.message);
            })
    }
}