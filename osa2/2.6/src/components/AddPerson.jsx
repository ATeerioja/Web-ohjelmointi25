import personService from "../services/persons.js"
import ErrorMessage from "./ErrorMessage.jsx"

const AddPerson = (newName, newNumber, setNewNumber, setPersons, setNewName, persons, setErrorMessage) => {

  const personObject = {
    name: newName,
    number: newNumber
  }

  if (persons.some(person => person.name === personObject.name)) {
    alert(`${newName} is already added to Phonebook`)
  } else if (persons.some(person => person.number === personObject.number)) {
    alert(`${newNumber} is already added to Phonebook`)
  } else {
    setErrorMessage(`Added ${newName}`)
    setTimeout(() => {setErrorMessage(null)}, 5000)

    personService
      .create(personObject)
      .then(initialPerson => {
        setPersons(persons.concat(initialPerson))
        setNewName('')
        setNewNumber('')
      })
  }
}

export default AddPerson