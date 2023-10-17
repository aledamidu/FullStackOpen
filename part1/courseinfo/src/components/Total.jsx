import React from 'react'

function Total({ parts }) {
  return (
    <p>Number of exercises {parts.map(part => part.exercises).reduce((a, b) => a + b)}</p>
  )
}

export default Total