import React from 'react'
import StatisticsLine from './StatisticsLine'

function Statistics({ good, neutral, bad }) {


  return (<>
    {(good || neutral || bad) ? <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} />
        <StatisticsLine text="positive" value={`${(good / (good + neutral + bad)) * 100}%`} />
      </tbody>
    </table > : <p>No feedback given</p>}
  </>)
}

export default Statistics

