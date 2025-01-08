const Header = (props) => (<div> <h1>{props.course}</h1> </div>)
const Part = (props) => (<div> <p>{props.name} {props.exercises}</p> </div>)
const Total = (props) => {
  let total = 0
  props.total.forEach((obj) => total += obj.exercises);

  return <p>Number of exercises {total}</p>
}

const Content = (props) => {
  const formatted = props.parts.map(part => (<Part name={part.name} exercises={part.exercises} />))
  return formatted
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
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total={course.parts} />
    </div>
  )
}

export default App