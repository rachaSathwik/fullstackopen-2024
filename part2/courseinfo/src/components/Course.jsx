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
    console.log(total);    
    return(
        <strong><p>total of {total} exercises</p></strong>
    )
}


const Course = ({courses}) => {
    return(
        <div>
           {courses.map((course) => {
            console.log(course.id);
            return(
                <div key = {course.id}> {/* The key attribute is used to identify each child component in the array returned by the map method. React uses this key to keep track of the order of the elements in the array and to optimize the re-rendering of the components. */}
                    <Header name = {course.name}/>
                    <Content parts = {course.parts}/>
                    <Total  parts = {course.parts}/>
                </div>
            )
           })}
        </div>
    )
}
export default Course;