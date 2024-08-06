import Part from './Part'
const Content = props =>{
    return(
        <>
        <Part name = {props.part_a} size = {props.exercises_a}/>
        <Part name = {props.part_b} size = {props.exercises_b}/>
        <Part name = {props.part_c} size = {props.exercises_c}/>
        </>
    )
}
export default Content;