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
    if(persons.find(person => person.name===newName)){
        alert(`${newName} is already in the phonebook`);
        return;
    }
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


console.log(persons.length);
return (
  <div>
    <h2>Phonebook</h2>
    <Filter filter={filter} setFilter={setFilter} />
    <h3>Add a new</h3>
    <PersonForm 
      handleNewContact = {handleNewContact} name = {newName} setNewName = {setNewName} number = {newNumber} setNewNumber = {setNewNumber}
    />
    <h3>Numbers</h3>
    <Persons filter = {filter} persons = {persons}/>
  </div>
)
}

export default App
