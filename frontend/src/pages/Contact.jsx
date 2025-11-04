import { useState } from 'react'
import { submitContactForm } from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Address:</strong> DMW Regional Office 1, Ilocos Region</p>
            <p><strong>Phone:</strong> (072) 687-0873</p>
            <p><strong>Email:</strong> launion@dmw.gov.ph</p>
            <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
            
            <div className="office-location mt-4">
              <h4>Office Location</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.5!2d120.3159809!3d16.612413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33918f8e99cf6f27%3A0x4819684f2595ca8b!2sDepartment%20of%20Migrant%20Workers%20Regional%20Office%201!5e0!3m2!1sen!2sph!4v1640995200000"
                  width="100%"
                  height="250"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DMW Regional Office 1 Location"
                ></iframe>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact