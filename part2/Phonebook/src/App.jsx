import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNewContact = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name===newName)){
        alert(`${newName} is already in the phonebook`);
        return;
    }
    const newPerson = {
        name: newName,
        number: newNumber,
        id: newName.length,
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
}

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
