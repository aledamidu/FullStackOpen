

function PersonForm({ handleSubmit, name, number }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={name.newName} onChange={e => name.setNewName(e.target.value)} />
      </div>
      <div>number: <input value={number.newNumber} onChange={e => number.setNewNumber(e.target.value)} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm