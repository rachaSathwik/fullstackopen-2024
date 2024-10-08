import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes,setVotes] = useState(new Uint32Array(anecdotes.length));
  const generateRandom = () =>{
    const index = Math.floor(Math.random()*(anecdotes.length-0)+0);
    console.log(index);
    setSelected(index);
  }
  const raiseVote = (index) =>{
    const copy =  [...votes];
    copy[index]+=1;
    setVotes(copy);
  }
  const mostVoted = () => {
    let max = 0;
    let maxIdx = 0;
    votes.forEach((vote, idx) => {
      if (vote > max) {
        max = vote;
        maxIdx = idx;
      }
    });
    return maxIdx;
  };
  
  let idx = mostVoted();
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      <button onClick={()=>raiseVote(selected)}>vote</button>
      <button onClick={generateRandom}>next anecdote</button>
      <div>
        <h3>Anecdote with most votes</h3>
        <p>{anecdotes[idx]}</p>
        <p>has {votes[idx]} votes</p>
      </div>
    </div>
    
  )
}

export default App