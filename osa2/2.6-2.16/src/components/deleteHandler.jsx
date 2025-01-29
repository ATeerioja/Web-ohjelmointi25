import personService from '../services/persons.js'


const deleteHandler = (event, setPersons, setErrorMessage, name) => {


  personService
    .destroy(event)
    .then(() => {
      setErrorMessage(`Deleted ${name}`)
      setTimeout(() => {setErrorMessage(null)}, 5000)
      
      personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
    })
    .catch(error => {
      console.log(error)
    })
}

export default deleteHandler