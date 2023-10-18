

function Filter({ filter, setFilter }) {
  return (
    <div>filter show with <input value={filter} onChange={e => setFilter(e.target.value)} /></div>
  )
}

export default Filter