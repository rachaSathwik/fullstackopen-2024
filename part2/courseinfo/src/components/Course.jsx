const Header = ({name}) =>{
    console.log(name);
    return(
        <h1>{name}</h1>
    );
}


const Content = ({parts}) =>{
    console.log(parts);
    return(
       parts.map(part => <Part name = {part.name} exercises = {part.exercises} key = {part.id}/>)
    )
}
const Part = ({name,exercises}) =>{
    console.log(name, exercises);// This should log the props object to the console
    return(
        <p>{name} {exercises}</p>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header name = {course.name}/>
            <Content parts = {course.parts}/>
        </div>
    )
}
export default Course;