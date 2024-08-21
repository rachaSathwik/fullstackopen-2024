import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');
  const[newNumber,setNewNumber] = useState('');

  const handleNewContact = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already in the phonebook`);
      return;
    }
    setPersons(persons.concat({name:newName,number:newNumber}));
    setNewName('');
    setNewNumber('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewContact}>
        <div>
          <div>name: <input value={newName} onChange={(e)=> setNewName(e.target.value)}/></div>
          <div>number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person)=><p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App