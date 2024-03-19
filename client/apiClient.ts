import request from 'superagent'
import { Weather } from '../models/weather.ts'

export async function getWeather(city: string): Promise<Weather> {
  console.log('made it to get weather')
  const response = await request.get(`${serverURL}/weather/${city}`)
  return response.body
}
