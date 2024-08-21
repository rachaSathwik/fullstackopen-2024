
const PersonForm = ({handleNewContact, newName, setNewName, newNumber, setNewNumber}) => {
    return(
        <div>
            <form onSubmit={handleNewContact}>
                <div>
                    name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/><br/>
                    number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
export default PersonForm;