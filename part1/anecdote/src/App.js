import { useState } from 'react'

//Component for section titles
const Title = ({title}) => <h1>{title}</h1>

//Component to display the anecdotes and their votes
const Display = ({content, votes}) => (
  <div>
    <p>{content}</p>
    <p>has {votes} votes</p>
  </div>
)

//Component to display buttons
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
) 

//Component to get Most Voted Anecdote
const TopAnecdote = ({anecdotes, votes}) => {
  const maxVotes = Math.max(...votes)
  const topIndex = votes.indexOf(maxVotes)

  if(maxVotes === 0){
    return (
      <h4>Be the first to vote!</h4>
    )
  }

  return (
    <p>{anecdotes[topIndex]}</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  //set State for votes array and initialize with zeros
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  //get random anecdote from array of anecdotes
const getRandomAnecdote = () => {
  return setSelected(Math.floor(Math.random() * anecdotes.length))
}

//vote on anecdotes and store votes on a new array
const getVotes = () => {
  const copy = [...votes]
  copy[selected] +=1
   setVotes(copy)
}

  return (
    <div>
      <Title title="Anecdote of the day" />
      <Display content={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={getVotes} text="Vote" />
      <Button handleClick={getRandomAnecdote} text="Next Anecdote" />
      <Title title="Anecdote with most votes" />
      <TopAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App