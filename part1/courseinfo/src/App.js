const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <h4>{props.part.name}</h4>
      <p>{props.part.exercises} exercises</p>
    </>
  )
}

const Content = (props) => (
  <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>
)

const Total = (props) => {
  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <h5>{total} number of exercises in total.</h5>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App