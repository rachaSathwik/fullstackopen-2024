import { useState,useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Phonebook from './Services/Phonebook'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({name:'',number:''});
  const [filter, setFilter] = useState('');
  const [notify, setNotify] = useState(null);
  const [task, setTask] = useState('');
  
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
    const person = persons.find(person => person.name===newPerson.name);
    if(person){
      confirm(`${newPerson.name} is already added to the phonebook, replace the number with a new one?`) && updateContact(person)
      return;
    }else{
      const newContact = {
          name: newPerson.name,
          number: newPerson.number,
      };
      Phonebook
        .addContact(newContact)
        .then(contact => {
          setPersons(persons.concat(contact));
          setNotify(contact.name);
          setTask('create');
          setTimeout(() => {
            setNotify(null);
          }, 5000);
        },(error) => {
          console.log(error.response.data.error);
        })
    }
   setNewPerson({name:'',number:''});
  }
  const updateContact = (contact) => {
    Phonebook
      .updateContact(contact,newPerson.number)
      .then(modifiedContact => {
            console.log(modifiedContact);
            setNotify(modifiedContact.name);
            setTask('update');
            setTimeout(() => setNotify(null)
            ,5000);
            setPersons(persons.map(person => person.id===modifiedContact.id?modifiedContact:person))
          })
    setNewPerson({name:'',number:''});
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
    <Notification user = {notify} task = {task}/>
    <Filter filter={filter} setFilter={setFilter}/>
    <h3>Add a new</h3>
    <PersonForm 
      handleNewContact = {handleNewContact}
      newPerson = {newPerson}
      setNewPerson = {setNewPerson}
    />
    <h3>Numbers</h3>
    <Persons filter = {filter} persons = {persons}  deleteContact= {deleteContact}/>
  </div>
)
}

export default App
