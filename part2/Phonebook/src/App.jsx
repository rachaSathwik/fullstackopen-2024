import { useState } from 'react'

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

  const filtered = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter with name</p>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      
      <h2>add a New</h2>
      <form onSubmit={handleNewContact}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/><br/>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.map(p => (
          <p key={p.id}>{p.name} {p.number}</p>
        ))}
      
    </div>
  )
}

export default App
