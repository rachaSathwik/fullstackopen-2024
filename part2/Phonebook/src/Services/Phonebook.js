import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const promise = axios.get(baseUrl)
    return promise.then(response => response.data)
}

const addContact = contact => {
    const promise = axios.post(baseUrl,contact);
    return promise.then(response => {
        console.log(response);
        return response.data;
    })
}
const updateContact = (orgContact,newNumber) => {
    const modContact = {...orgContact,number:newNumber};
    const promise = axios.put(`${baseUrl}/${orgContact.id}`,modContact)
    return promise.then(response => response.data)
}

const deleteContact = id => {
    const promise = axios.delete(`${baseUrl}/${id}`);
    return promise.then(response => {
        console.log(response);
        return response.data;
    })
}
export default {addContact,getAll,deleteContact,updateContact};