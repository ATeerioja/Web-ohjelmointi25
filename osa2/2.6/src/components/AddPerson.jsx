import axios from "axios"

const AddPerson = (newName, newNumber, setNewNumber, setPersons, setNewName, persons) => {

  const personObject = {
    name: newName,
    number: newNumber
  }

  if (persons.some(person => person.name === personObject.name)) {
    alert(`${newName} is already added to Phonebook`)
  } else if (persons.some(person => person.number === personObject.number)) {
    alert(`${newNumber} is already added to Phonebook`)
  } else {
    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }
}

export default AddPerson