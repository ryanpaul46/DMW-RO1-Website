import express from 'express'
import { announcements } from '../data/announcements.js'

const router = express.Router()

// GET /api/announcements
router.get('/', (req, res) => {
  try {
    res.json(announcements)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch announcements' })
  }
})

// GET /api/announcements/:id
router.get('/:id', (req, res) => {
  try {
    const announcement = announcements.find(a => a.id === parseInt(req.params.id))
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' })
    }
    res.json(announcement)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch announcement' })
  }
})

export default router