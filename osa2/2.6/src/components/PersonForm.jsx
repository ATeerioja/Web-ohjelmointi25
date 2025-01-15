import AddPerson from "./AddPerson"

const PersonForm = ({setNewNumber ,persons, newName, handlePersonChange, newNumber, handleNumberChange, setPersons, setNewName}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    AddPerson(newName, newNumber,setNewNumber, setPersons, setNewName, persons)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: 
        <input value={newName} onChange={handlePersonChange}/>
        <br></br>
        number: 
        <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  
)}

export default PersonForm