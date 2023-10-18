import { useEffect, useState } from "react"
import { getWeather } from "../api/weatherApi"


function Weather({ capital }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather(capital).then((data) => {
      setWeather(data)
    })
  }, [capital])


  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>temperature {Math.round(weather?.main.temp)}°C</div>
      <img src={"http://openweathermap.org/img/wn/" + weather?.weather[0].icon + ".png"} alt={weather?.weather[0].description} />
      <div>wind {weather?.wind.speed} m/s</div>
    </div>
  )
}

export default Weather