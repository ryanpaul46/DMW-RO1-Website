import { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { getNews } from '../services/api'

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const data = await getNews()
      setNews(data)
    } catch (error) {
      console.error('Error fetching news:', error)
    }
  }

  return (
    <div className="news">
      <div className="container">
        <h1 className="text-center mb-4">Latest News</h1>
        <div className="text-center mb-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61577058832824" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow us on Facebook for Latest Updates
          </a>
        </div>
        <Row>
          {news.map(article => (
            <Col md={6} lg={4} key={article.id} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.summary}</Card.Text>
                  <small className="text-muted">
                    {new Date(article.date).toLocaleDateString()}
                  </small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default News