import React from 'react'

function Button({ state, setState, children }) {
  return (
    <button onClick={() => setState(state + 1)}>{children}</button>
  )
}

export default Button