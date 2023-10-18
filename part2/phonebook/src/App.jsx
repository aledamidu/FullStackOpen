import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { create, getAll, remove, update } from './api/personsApi'
import { useEffect } from 'react'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [personsUpdate, setPetsonsUpdate] = useState(false)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')


  useEffect(() => {
    getAll().then(data => {
      setPersons(data)
    })
  }, [personsUpdate])

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      showMessage({ message: 'Name or number is missing', type: 'error' })
      return
    }
    else if (persons.find(person => person.name === newName)) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) && update(persons.find(person => person.name === newName).id, { name: newName, number: newNumber })
        .then(() => {
          setPetsonsUpdate(!personsUpdate)
          showMessage({ message: `Updated ${newName} successfully`, type: 'success' })
        }).catch(() => {
          showMessage({ message: "Something went wrong", type: "error" })
        })

      return
    }
    create({ name: newName, number: newNumber }).then(() => {
      setPetsonsUpdate(!personsUpdate)
      showMessage({ message: `Added ${newName} successfully`, type: 'success' })
      setNewName('')
      setNewNumber('')
    }).catch(() => {
      showMessage({ message: "Something went wrong", type: "error" })
    })

  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleDelete = (id) => {
    window.confirm('Are you sure?') && remove(id).then(() => {
      setPetsonsUpdate(!personsUpdate)
    }).catch((error) => {
      if (error.response.status === 404) {
        showMessage({ message: "Person already Deleted", type: "error" })
      } else {
        showMessage({ message: "Something went wrong", type: "error" })
      }
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {message && <Notification message={message} />}
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} name={{ newName, setNewName }} number={{ newNumber, setNewNumber }} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App