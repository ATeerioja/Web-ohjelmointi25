import deleteHandler from "./deleteHandler"

const Persons = ({persons, filter, setPersons, setErrorMessage}) => {

  return (
    <div>
    {persons.filter((person) => 
    person.name.toUpperCase().includes(filter.toUpperCase())).map((person) => 
    <p key={person.id}>{person.name} {person.number} <button onClick={() => deleteHandler(person.id, setPersons, setErrorMessage, person.name)}>delete</button></p>
    )}      
   </div>
  )} 

  

export default Persons