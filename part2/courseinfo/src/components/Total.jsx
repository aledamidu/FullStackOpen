import React from 'react'

function Total({ parts }) {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <h4>total of {total} exercises</h4>
  )
}

export default Total