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
const Total = ({parts}) => {
    const total = parts.reduce((accumulator,part) => accumulator+=part.exercises, 0);
    return(
        <strong><p>total of {total} exercises</p></strong>
    )
}


const Course = ({course}) => {
    return(
        <div>
            <Header name = {course.name}/>
            <Content parts = {course.parts}/>
            <Total parts = {course.parts}/>
        </div>
    )
}
export default Course;