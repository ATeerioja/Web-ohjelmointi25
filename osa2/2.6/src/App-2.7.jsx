import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }

    if (persons.some(person => person.name === personObject.name)) {
      alert(`${newName} is already added to Phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }



  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map((person) => <p key={person.name}>{person.name}</p>)}
        </div>

    </div>
  )

}

export default App