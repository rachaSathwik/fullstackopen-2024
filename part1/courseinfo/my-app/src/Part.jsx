const Part = props =>{
    console.log(props);// This should log the props object to the console
    return(
        <p>{props.p.name} {props.p.exercises}</p>
    )
}
export default Part;