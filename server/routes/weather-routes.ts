import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

// GET weather
router.get('weather/:city', async (req, res) => {
  try {
    const city = req.params.city
    const response = await request
      .get(`https://api.api-ninjas.com/v1/fowlweather?city=${city}`)
      .set({ 'X-Api-Key': process.env.WEATHER_KEY })
    res.json(response.body)
    console.log(city)
  } catch (error) {
    res.status(error.response.status || 500).json(error.resonse.body)
  }
})

export default router
