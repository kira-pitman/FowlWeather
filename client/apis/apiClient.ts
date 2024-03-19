import request from 'superagent'
import { Weather } from '../../models/weather'

const serverURL = '/api/v1/fowlweather'

export async function fetchWeather(city: string): Promise<Weather> {
  const response = await request.get(`${serverURL}/fowlweather/${city}`)
  return response.body
}
