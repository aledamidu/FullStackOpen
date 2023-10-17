import React from 'react'
import Button from './Button'

function Buttons({ good, neutral, bad }) {

  return (<div>
    <Button state={good.good} setState={good.setGood}>good</Button>
    <Button state={neutral.neutral} setState={neutral.setNeutral}>neutral</Button>
    <Button state={bad.bad} setState={bad.setBad}>bad</Button>
  </div>

  )
}

export default Buttons