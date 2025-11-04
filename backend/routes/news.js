import express from 'express'
import { news } from '../data/news.js'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    res.json(news)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' })
  }
})

export default router