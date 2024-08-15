import { useState } from "react";
import Statistics from "./Statistics";

const App = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const updateGood = () => setGood(good+1);
  const updateNeutral = () => setNeutral(neutral+1);
  const updateBad = () => setBad(bad+1);
  const total = good+bad+neutral;

  return(
    <div>
      <h3>give feedback</h3>
      <button onClick={updateGood}>good</button>
      <button onClick={updateNeutral}>neutral</button>
      <button onClick={updateBad}>bad</button>
      <Statistics good = {good} neutral={neutral} bad = {bad}/>
    </div>

  )
}
export default App;