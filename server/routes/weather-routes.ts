import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

// GET weather
router.get('weather/:city', async (req, res) => {
  try {
    const city = req.params.city
    const response = await request
      .get(`https://api.api-ninjas.com/v1/weather?city=${city}`)
      .set({ 'X-Api-Key': process.env.X_API_Key })
    res.json(response.body)
  } catch (error) {
    res.status(error.response.status || 500).json(error.resonse.body)
  }
})
