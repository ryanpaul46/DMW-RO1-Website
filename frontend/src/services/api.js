import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
      console.error('Backend server is not running. Please start the backend server.')
      throw new Error('Unable to connect to server. Please ensure the backend is running on port 5000.')
    }
    throw error
  }
)

export const getAnnouncements = async () => {
  try {
    const response = await api.get('/announcements')
    return response.data
  } catch (error) {
    console.error('Error fetching announcements:', error.message)
    throw error
  }
}

export const getNews = async () => {
  try {
    const response = await api.get('/news')
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error.message)
    throw error
  }
}

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData)
    return response.data
  } catch (error) {
    console.error('Error submitting contact form:', error.message)
    throw error
  }
}