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
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
}

export default AddPerson