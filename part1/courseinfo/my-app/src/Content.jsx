import Part from './Part'
const Content = props =>{
    console.log(props);
    return(
        <>
        <Part p = {props.parts[0]}/>
        <Part p = {props.parts[1]}/>
        <Part p = {props.parts[2]}/>
        </>
    )
}
export default Content;