import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === personObject.name)) {
      alert(`${newName} is already added to Phonebook`)
    } if (persons.some(person => person.number === personObject.number)) {
      alert(`${newNumber} is already added to Phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input
          value={filter}
          onChange={handleFilterChange}
        />
        </div>

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange}
          />
          <br></br>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.filter((person) => 
            person.name.toUpperCase().includes(filter.toUpperCase())).map((person) => 
            <p>{person.name} {person.number}</p>
          )}
        </div>
    </div>
  )

}

export default App