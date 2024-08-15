import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

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
      <Button onClick={updateGood} text={"good"}/>
      <Button onClick={updateNeutral} text={"neutral"}/>
      <Button onClick={updateBad} text={"bad"}/>
      <Statistics good = {good} neutral={neutral} bad = {bad}/>
    </div>

  )
}
export default App;