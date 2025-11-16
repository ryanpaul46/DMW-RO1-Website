import { useState, useEffect } from 'react'
import { Card, Row, Col, Badge, Spinner, Alert } from 'react-bootstrap'
import { getNews } from '../services/api'
import { mockNews } from '../data/mockData'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const data = await getNews()
      setNews(data)
      setError(null)
    } catch (error) {
      console.error('Error fetching news:', error)
      // Use mock data as fallback
      setNews(mockNews)
      setError(null)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['All', ...new Set(news.map(article => article.category))]
  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(article => article.category === selectedCategory)

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'primary',
      'Welfare': 'success', 
      'Training': 'info',
      'Finance': 'warning',
      'Support Services': 'secondary',
      'Education': 'dark',
      'Recognition': 'danger',
      'Outreach': 'light'
    }
    return colors[category] || 'primary'
  }

  if (loading) {
    return (
      <div className="news">
        <div className="container text-center py-5">
          <Spinner animation="border" role="status" className="mb-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Loading news articles...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="news">
        <div className="container py-5">
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        </div>
      </div>
    )
  }

  return (
    <div className="news">
      <div className="container">
        <h1 className="text-center mb-4">Latest News & Updates</h1>
        
        <div className="text-center mb-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61577058832824" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary me-3"
          >
            📘 Follow us on Facebook
          </a>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`btn btn-sm ${
                  selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Row>
          {filteredNews.length > 0 ? (
            filteredNews.map(article => (
              <Col md={6} lg={4} key={article.id} className="mb-4">
                <Card className="h-100 news-article-card">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                      <Badge bg={getCategoryColor(article.category)} className="mb-2">
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge bg="warning" text="dark" className="ms-2">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    
                    <Card.Title className="h5">{article.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">{article.summary}</Card.Text>
                    
                    {article.content && (
                      <Card.Text className="small flex-grow-1">
                        {article.content.length > 200 
                          ? `${article.content.substring(0, 200)}...` 
                          : article.content
                        }
                      </Card.Text>
                    )}
                    
                    <div className="mt-auto pt-3 border-top">
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          By {article.author || 'DMW RO1'}
                        </small>
                        <small className="text-muted">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <Alert variant="info" className="text-center">
                No news articles found for the selected category.
              </Alert>
            </Col>
          )}
        </Row>
      </div>
    </div>
  )
}

export default News