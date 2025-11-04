import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getAnnouncements = async () => {
  const response = await api.get('/announcements')
  return response.data
}

export const getNews = async () => {
  const response = await api.get('/news')
  return response.data
}

export const submitContactForm = async (formData) => {
  const response = await api.post('/contact', formData)
  return response.data
}