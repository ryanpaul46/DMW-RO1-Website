import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { getAnnouncements } from '../services/api'
import dmwRo1Image from '../assets/images/DMW RO1.jpg'
import dmwPacdImage from '../assets/images/DMW PACD.jpg'
import dmwWorkImage from '../assets/images/DMW WORK.jpg'

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
              src={dmwRo1Image}
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
              src={dmwPacdImage}
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
              src={dmwWorkImage}
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
          
          <div className="facebook-feed mt-5">
            <h3 className="text-center mb-4">Follow Our Facebook Page</h3>
            <div className="text-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61577058832824&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="500"
                style={{border: 'none', overflow: 'hidden', maxWidth: '100%'}}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home