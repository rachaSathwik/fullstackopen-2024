import { useState,useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Phonebook from './Services/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const handleReject = (error) => {
        console.log("Promise Rejected");
        console.log(error);
    }
    console.log("effect");
    Phonebook
      .getAll()
      .then(contacts => setPersons(contacts))
      .catch(handleReject)
  },[])

  const handleNewContact = (event) => {
    event.preventDefault();
    const person = persons.find(person => person.name===newName);
    if(person){
      confirm(`${newName} is already added to the phonebook, replace the number with a new one?`) && updateContact(person)
      return;
    }else{
      const newPerson = {
          name: newName,
          number: newNumber,
      };
      Phonebook
        .addContact(newPerson)
        .then(contact => {
          setPersons(persons.concat(contact));
          setNewName('');
          setNewNumber('');
        })
    }
  }
  const updateContact = (contact) => {
    Phonebook
      .updateContact(contact,newNumber)
      .then(modifiedContact => {
            console.log(modifiedContact);
            setPersons(persons.map(person => person.id===modifiedContact.id?modifiedContact:person))
          })
  }

  const deleteContact = (id) => {
    Phonebook
      .deleteContact(id)
      .then(deleted => setPersons(persons.filter(person => person.id!==deleted.id)))
  }
console.log(persons.length);

return (
  <div>
    <h2>Phonebook</h2>
    <Filter filter={filter} setFilter={setFilter}/>
    <h3>Add a new</h3>
    <PersonForm 
      handleNewContact = {handleNewContact} name = {newName} setNewName = {setNewName} number = {newNumber} setNewNumber = {setNewNumber}
    />
    <h3>Numbers</h3>
    <Persons filter = {filter} persons = {persons}  deleteContact= {deleteContact}/>
  </div>
)
}

export default App
