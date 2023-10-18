import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const getWeather = (capital) => {
  return axios.get(`${baseUrl}?q=${capital}&appid=${api_key}&units=metric`).then((response) => {
    return response.data
  })
}
export { getWeather }