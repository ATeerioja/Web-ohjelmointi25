const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}


const Header = (props) => (<div> <h1>{props.course}</h1> </div>)
const Content = (props) => {
  const formatted = props.parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))
  return formatted
}
const Part = (props) => (<div> <p key={props.id}> {props.name} {props.exercises}</p> </div>)
const Total = (props) => {
  let total = 0
  props.total.forEach((obj) => total += obj.exercises);

  return <p>Number of exercises {total}</p>
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App