const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DMW Regional Office 1</h3>
            <p>“𝑻𝒂𝒉𝒂𝒏𝒂𝒏 𝒏𝒈 𝒎𝒈𝒂 𝑶𝑭𝑾𝒔 𝒔𝒂 𝑵𝒐𝒓𝒕𝒆”</p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: launion@dmw.gov.ph</p>
            <p>Phone: (072) 123-4567</p>
            <p>
              <a 
                href="https://www.facebook.com/profile.php?id=61577058832824" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#60a5fa'}}
              >
                Follow us on Facebook
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Department of Migrant Workers Regional Office 1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer