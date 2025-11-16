import express from 'express'
import cors from 'cors'
import { announcements } from './data/announcements.js'
import { news } from './data/news.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Test routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Test server running' })
})

app.get('/api/announcements', (req, res) => {
  try {
    console.log('Announcements requested:', announcements.length, 'items')
    res.json(announcements)
  } catch (error) {
    console.error('Announcements error:', error)
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/news', (req, res) => {
  try {
    console.log('News requested:', news.length, 'items')
    res.json(news)
  } catch (error) {
    console.error('News error:', error)
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`)
  console.log('Available endpoints:')
  console.log('- GET /api/health')
  console.log('- GET /api/announcements')
  console.log('- GET /api/news')
})