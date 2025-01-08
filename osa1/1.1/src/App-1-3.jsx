const Header = (props) => (<div> <h1>{props.course}</h1> </div>)
const Part = (props) => (<div> <p>{props.name} {props.exercises}</p> </div>)
const Total = (props) => {
  let total = 0
  props.total.forEach((obj) => total += obj.exercises);

  return <p>Number of exercises {total}</p>
}

const Content = (props) => props.parts

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3]
  const formatted = parts.map(part => (<Part name={part.name} exercises={part.exercises} />))

  return (
    <div>
      <Header course={course} />
      <Content parts={formatted}/>
      <Total total={parts} />
    </div>
  )
}

export default App