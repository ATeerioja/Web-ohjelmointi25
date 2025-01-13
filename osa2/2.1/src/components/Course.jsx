const Header = ({course}) => 
  <div>
    <h1>{course}</h1> 
  </div>

const Content = ({parts}) => 
  parts.map(part => 
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )

const Part = ({id, name, exercises}) => 
  <div> 
    <p key={id}> {name} {exercises}</p> 
  </div>

const Total = ({parts}) => 
  <div>
    <strong>total of {parts.reduce((accumulator, part) => (accumulator += part.exercises),0)} exercises</strong>
  </div>

const Course = ({courses}) =>
  courses.map(course =>
    <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>)

export default Course