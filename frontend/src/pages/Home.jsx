import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { getAnnouncements, getNews } from '../services/api'
import { mockAnnouncements, mockNews } from '../data/mockData'
import dmwRo1Image from '../assets/images/DMW RO1.jpg'
import dmwPacdImage from '../assets/images/DMW PACD.jpg'
import dmwWorkImage from '../assets/images/DMW WORK.jpg'

const Home = () => {
  const [announcements, setAnnouncements] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [announcementsData, newsData] = await Promise.all([
        getAnnouncements(),
        getNews()
      ])
      setAnnouncements(announcementsData)
      setNews(newsData.filter(article => article.featured).slice(0, 3))
      setError(null)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Use mock data as fallback
      setAnnouncements(mockAnnouncements)
      setNews(mockNews.filter(article => article.featured).slice(0, 3))
      setError(null)
    } finally {
      setLoading(false)
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
            {loading ? (
              <div className="text-center">Loading announcements...</div>
            ) : error ? (
              <div className="text-center text-danger">{error}</div>
            ) : announcements.length > 0 ? (
              announcements.map(announcement => (
                <div key={announcement.id} className="announcement-card">
                  <h3>{announcement.title}</h3>
                  <p>{announcement.content}</p>
                  <small>{new Date(announcement.date).toLocaleDateString()}</small>
                </div>
              ))
            ) : (
              <div className="text-center">No announcements available.</div>
            )}
          </div>
          
          <div className="latest-news mt-5">
            <h2>Latest News</h2>
            <div className="news-grid">
              {loading ? (
                <div className="text-center">Loading news...</div>
              ) : error ? (
                <div className="text-center text-danger">{error}</div>
              ) : news.length > 0 ? (
                news.map(article => (
                  <div key={article.id} className="news-card">
                    <div className="news-image-placeholder">
                      <span>📰</span>
                    </div>
                    <div className="news-category">{article.category}</div>
                    <h3>{article.title}</h3>
                    <p className="news-summary">{article.summary}</p>
                    <div className="news-meta">
                      <small>By {article.author}</small>
                      <small>{new Date(article.date).toLocaleDateString()}</small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">No news available.</div>
              )}
            </div>
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