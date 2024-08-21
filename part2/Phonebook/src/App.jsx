import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');

  const handleAddName = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already in the phonebook`);
      return;
    }
    setPersons(persons.concat({name:newName}));
    setNewName('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          <label htmlFor='name'>Name</label>
          <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person)=><p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App