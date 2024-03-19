import { Outlet } from 'react-router-dom'
import Weather from './Weather'
import SearchBar from './SearchBar.tsx'
import { useState } from 'react'

import { Weather as WeatherType } from '../../models/weather.ts'
import { fetchWeather } from '../apis/apiClient'

const emptyCity = {
  city_name: '',
  temp: 0,
  feels_like: 0,
  humidity: 0,
  min_temp: 0,
  max_temp: 0,
  wind_speed: 0,
  wind_degrees: 0,
  sunrise: 0,
  sunset: 0,
}

function App() {
  const [city, setCity] = useState<WeatherType>(emptyCity)
  const [searchText, setSearchText] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weatherData = await fetchWeather(searchText)
    setCity({ ...weatherData, city_name: searchText })
    console.log('pressed submitted')
  }

  return (
    <>
      <h1>🪿 Fowl Weather 🪿</h1>

      <div className="body">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          handleSubmit={handleSubmit}
        />

        <div className="result-container">
          {city != emptyCity ? <Weather city={city} /> : ''}
        </div>
      </div>
    </>
  )
}

export default App
