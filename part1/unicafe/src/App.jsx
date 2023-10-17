import { useState } from "react"
import Statistics from "./components/Statistics"
import Buttons from "./components/Buttons"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Buttons good={{ good, setGood }} neutral={{ neutral, setNeutral }} bad={{ bad, setBad }} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App
