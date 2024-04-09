import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

// GET weather
router.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city
    const response = await request
      .get(`https://api.api-ninjas.com/v1/weather?city=${city}`)
      .query({ 'X-Api-Key': process.env.WEATHER_KEY })
    res.json(response.body)
  } catch (error) {
    res.status(500).json(error.response.body)
  }
})

export default router
