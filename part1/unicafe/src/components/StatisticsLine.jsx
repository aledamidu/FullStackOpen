import React from 'react'

function StatisticsLine({ text, value }) {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

export default StatisticsLine