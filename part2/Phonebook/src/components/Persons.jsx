const Persons = ({filter, persons}) => {
    const filtered = persons.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      );
    return(
        <div>
            {filtered.map(p => (
              <p key={p.id}>{p.name} {p.number}</p>
            ))}
        </div>
    )
}
export default Persons;