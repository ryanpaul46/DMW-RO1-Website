import express from 'express'

const router = express.Router()

// POST /api/contact
router.post('/', (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // In a real application, you would save this to a database
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message, timestamp: new Date() })

    res.json({ 
      success: true, 
      message: 'Your message has been received. We will get back to you soon.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Failed to submit contact form' })
  }
})

export default router