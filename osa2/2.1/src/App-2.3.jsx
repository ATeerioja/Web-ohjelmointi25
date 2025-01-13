const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({course}) => (<div> <h1>{course}</h1> </div>)
const Content = ({parts}) => (parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />)))
const Part = ({id, name, exercises}) => (<div> <p key={id}> {name} {exercises}</p> </div>)
const Total = ({parts}) => <div><strong>total of {parts.reduce((accumulator, part) => (accumulator += part.exercises),0)} exercises</strong></div>


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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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