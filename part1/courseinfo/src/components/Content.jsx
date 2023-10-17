import Part from './Part'

function Content({ parts }) {
  return (
    <>
      {parts.map(part => (
        <Part key={part.name} part={part} />
      ))}
    </>
  )
}

export default Content