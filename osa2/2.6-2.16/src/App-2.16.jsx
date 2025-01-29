import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import FilterPersons from './components/FilterPersons.jsx'
import personService from './services/persons.js'
import ErrorMessage from './components/ErrorMessage.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
      <ErrorMessage message={errorMessage} />
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
        setErrorMessage={setErrorMessage}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} setPersons={setPersons} setErrorMessage={setErrorMessage}/>

    </div>
  )

}

export default App
