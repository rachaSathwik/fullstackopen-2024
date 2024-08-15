const Statistics = ({good,bad,neutral}) => {
    const total = good+neutral+bad;
    return(
        <>
            <h3>statistics</h3>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {total}</p>
            <p>average {(good-bad)/total}</p>
            <p>positive {(good/total)*100} %</p>
        </>
    )
} 
export default Statistics;