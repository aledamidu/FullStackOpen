import { useEffect, useState } from "react"
import { getAllCountries } from "./api/countriesApi"
import Filter from "./components/Filter"
import Countries from "./components/Countries"

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data)
    })
  }, [])

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <>
      <Filter filter={{ filter, setFilter }} />
      {filter && (
        <Countries countries={filteredCountries} setFilter={setFilter} />
      )}

    </>
  )
}

export default App
