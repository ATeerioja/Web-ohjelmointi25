import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import FilterPersons from './components/FilterPersons'
import personService from './services/persons.js'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      <FilterPersons 
        filter={filter}
        handleFilterChange={handleFilterChange}

      />

      <h3>Add a new</h3>
      <PersonForm 
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        setPersons={setPersons}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} setPersons={setPersons}/>

    </div>
  )

}

export default App
