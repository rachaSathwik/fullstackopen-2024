
const PersonForm = ({handleNewContact,newPerson, setNewPerson}) => {
    return(
        <div>
            <form onSubmit={handleNewContact}>
                <div>
                    name: <input value={newPerson.name} onChange={(e) => setNewPerson({...newPerson,name:e.target.value})}/><br/>
                    number: <input value={newPerson.number} onChange={(e) => setNewPerson({...newPerson,number:e.target.value})}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
export default PersonForm;