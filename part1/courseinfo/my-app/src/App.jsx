import Header from "./Header"
import Content from "./Content"
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course = {course}/>
      <Content part_a = {part1} exercises_a = {exercises1} part_b = {part2} exercises_b = {exercises2} part_c = {part3} exercises_c = {exercises3}/>
      <Total tot = {exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App