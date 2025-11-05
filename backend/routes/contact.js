import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

// POST /api/contact
router.post('/', [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .escape()
    .withMessage('Name must be between 2-50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email required'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 500 })
    .escape()
    .withMessage('Message must be between 10-500 characters')
], (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: errors.array() 
      })
    }

    const { name, email, message } = req.body

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