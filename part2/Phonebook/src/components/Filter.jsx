const Filter = ({filter, setFilter}) => {
    return(
        <div>
            <p>filter with name</p>
            <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    )
}
export default Filter;