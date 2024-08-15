const StatisticalLine = ({text,value}) => <p>{text} {value}</p>

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
            <p>positive {(good/total)*100} %</p>
        </>
    )
} 
export default Statistics;