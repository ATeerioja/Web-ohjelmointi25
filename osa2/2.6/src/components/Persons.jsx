const Persons = ({persons, filter}) => {
  return (
    <div>
    {persons.filter((person) => 
    person.name.toUpperCase().includes(filter.toUpperCase())).map((person) => 
    <p key={person.name}>{person.name} {person.number}</p>
  )}
    </div>
)}

export default Persons