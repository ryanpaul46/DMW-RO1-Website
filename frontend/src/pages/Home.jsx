import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { getAnnouncements } from '../services/api'

const Home = () => {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const data = await getAnnouncements()
      setAnnouncements(data)
    } catch (error) {
      console.error('Error fetching announcements:', error)
    }
  }

  return (
    <div className="home">
      <section className="hero">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="/public/images/DMW RO1.jpg"
              alt="DMW Services"
            />
            <Carousel.Caption>
              <h1>Welcome to DMW Regional Office 1</h1>
              <p>Your partner in overseas employment and migrant worker welfare</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="/public/images/DMW PACD.jpg"
              alt="OFW Support"
            />
            <Carousel.Caption>
              <h1>OFW Services & Support</h1>
              <p>Comprehensive assistance for overseas Filipino workers</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="/images/DMW WORK.jpg"
              alt="Welfare Programs"
            />
            <Carousel.Caption>
              <h1>Welfare & Reintegration</h1>
              <p>Programs to support OFWs and their families</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="announcements">
        <div className="container">
          <h2>Latest Announcements</h2>
          <div className="announcements-grid">
            {announcements.map(announcement => (
              <div key={announcement.id} className="announcement-card">
                <h3>{announcement.title}</h3>
                <p>{announcement.content}</p>
                <small>{new Date(announcement.date).toLocaleDateString()}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home