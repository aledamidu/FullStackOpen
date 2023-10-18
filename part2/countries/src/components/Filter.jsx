import React from 'react'

function Filter({ filter }) {
  return (
    <div>
      <span>Find Countries</span>
      <input type='search' onChange={(e) => filter.setFilter(e.target.value)} value={filter.filter} />
    </div>
  )
}

export default Filter