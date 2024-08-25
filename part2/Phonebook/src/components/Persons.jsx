const Persons = ({filter, persons,deleteContact}) => {
    const filtered = persons.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      );
    return(
        <div>
            {filtered.map(p => (
              <p key={p.id}>{p.name} {p.number} <button onClick = {() => {
                confirm(`Delete ${p.name}?`) && deleteContact(p.id)
              }}>delete</button></p>   
            ))}
        </div>
    )
}
export default Persons;