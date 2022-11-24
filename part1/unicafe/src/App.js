import { useState } from 'react'

//Button Component
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

//Statistic Line Component
const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


//Statistics Component
const Statistics = (props) => {
  if(props.all === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <tr>
        <StatisticLine text="good" value={props.good} />
        </tr>
        <tr>
        <StatisticLine text="neutral" value={props.neutral} />
        </tr>
        <tr>
        <StatisticLine text="bad" value={props.bad} />
        </tr>
        <tr>
        <StatisticLine text="all" value={props.all} />
        </tr>
        <tr>
        <StatisticLine text="average" value={props.average} />
        </tr>
        <tr>
        <StatisticLine text="positive" value={props.positive} />
        </tr>
        </tbody>
      </table>  
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //set each button Onclick function
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  //calculate total clicks
  const all = good + bad + neutral;

  //calculate average score
  let goodScore =  good *1
  let neutralScore =  0
  let badScore =  bad * -1

  const score = [goodScore + neutralScore + badScore]

  const average = (score / 3)

  //limit average to 1 decimal
  const roundedAverage = () => average.toFixed(1)

  //calculate the percentage of positive feedback
  const positive = (good * 100) / all

    // limit positive to 1 decimal and add % sign
    const roundedPositive = () => (positive.toFixed(1) + '%')

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text='bad' />
      <h2>statistics</h2>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={roundedAverage()}
      positive={roundedPositive()}
      />
    </div>
  )
}

export default App