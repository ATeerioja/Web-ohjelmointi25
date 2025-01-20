import personService from '../services/persons.js'
import Persons from './Persons.jsx'


const deleteHandler = (event, setPersons) => {

  personService
    .destroy(event)
    .then(() => {
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