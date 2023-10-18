import { remove } from "../api/personsApi"

function Persons({ persons, handleDelete }) {

  return (
    <div>{persons.map(person => <div key={person.id}><p >{person.name} {person.number} <button onClick={() => { handleDelete(person.id) }}>delete</button></p></div>)}</div>
  )
}

export default Persons