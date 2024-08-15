const StatisticalLine = ({text,value}) =>
    <table>
        <tbody>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
        </tbody>
    </table>

const Statistics = ({good,bad,neutral}) => {
    const total = good+neutral+bad;
    return (total===0)?
    (
        <>
        <h3>statistics</h3>
        <p>No feedback given</p>
        </>
    ):
    (
        <>
            <h3>statistics</h3>
            <StatisticalLine text={"good"} value={good}/>
            <StatisticalLine text={"neutral"} value={neutral}/>
            <StatisticalLine text={"bad"} value={bad}/>
            <StatisticalLine text={"all"} value={total}/>
            <StatisticalLine text = {"average"} value={(good-bad)/total}/>
            <StatisticalLine text={"positive"} value={(good/total*100)}/>
        </>
    )
} 
export default Statistics;