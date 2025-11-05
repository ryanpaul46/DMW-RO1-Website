import { useState } from 'react'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap'

const About = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-primary mb-3">Overview</h3>
              <p>DMW Regional Office 1 serves the provinces of Ilocos Norte, Ilocos Sur, La Union, and Pangasinan, providing comprehensive support and services to overseas Filipino workers and their families in the Ilocos Region.</p>
              <h4 className="text-primary mt-4 mb-3">History</h4>
              <p style={{ textAlign: "justify" }}>
                The Department of Migrant Workers (DMW) is the executive department of the Philippine government tasked to protect the rights and promote the welfare of overseas Filipino workers (OFWs). 
                The department was created by virtue of the DMW Act or the Republic Act (RA) No. 11641, which was signed by President Rodrigo Roa Duterte on December 30, 2021.
                The DMW Act (RA No. 11641) took effect on February 3, 2022, wherein the DMW was created, established, and constituted. 
                It now assumes and performs all the powers and functions of seven merged agencies, namely: the Philippine Overseas Employment Administration (POEA); 
                the Office of the Undersecretary for Migrant Workers' Affairs (OUMWA) of the DFA; the International Labor Affairs Bureau (ILAB) and all Philippine Overseas Labor Offices (POLO) under DOLE; the National Maritime Polytechnic (NMP); 
                the National Reintegration Center for OFWs (NRC) under the OWWA, and the Office of the Social Welfare Attaché (OSWA) under the DSWD.
                The DMW is mandated to facilitate the overseas employment and reintegration of Filipino workers, while taking into consideration the national development programs of the National Economic and Development Authority. It is also tasked to promote the empowerment and protection of OFWs through continuous training and knowledge development.</p>
            </Card.Body>
          </Card>
        )
      case 'mission-vision':
        return (
          <Row>
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h3 className="text-primary mb-3">Our Mission</h3>
                  <p>We commit to empower our migrant workers through digital transformation of our processes and ensuring sustained ease of doing business.
                    We shall effectively manage the full cycle of Filipino labor migration from industry regulation, labor market development, 
                    facilitative deployment, provision of on-site protection and up to a national reintegration program that enhances OFW skills, 
                    knowledge and competence, and facilitates their safe and productive reintegration in their communities.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h3 className="text-primary mb-3">Our Vision</h3>
                  <p>The DMW is the exclusive home in government of our overseas Filipino workers (OFWs) and their families that protects their rights. Promotes their welfare, 
                    and unleashes their potential to fulfill their destiny as co-architects of national development.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )

      case 'core-values':
        return (
          <div>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4 text-center">
                <h3 className="text-primary mb-3">Core Values (C.I.T.E.S)</h3>
              </Card.Body>
            </Card>
            <div className="d-flex flex-column gap-3">
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">C - Compassion</h4>
                  <p>We foster a culture of care, demonstrating kindness, respect, and commitment to improving the lives of OFWs and their families.</p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">I - Integrity</h4>
                  <p>We adhere to legal, moral, and ethical principles, building trust with the OFWs and their families.</p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">T - Transparency</h4>
                  <p>We ensure openness in our actions, decisions, and processes, providing information in a timely and honest manner.</p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">E - Excellence</h4>
                  <p>We strive to deliver high-quality, efficient services that meet the needs of OFWs and their families, consistently adhering to our established Quality Management System.</p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">S - Service</h4>
                  <p>We place ourselves in the service of our OFWs and their families, ensuring error-free transactions and timely delivery of services.</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        )

      case 'key-officials':
        return (
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-primary mb-3">Key Officials</h3>
              <Row>
                <Col md={6}>
                  <div className="official-card mb-3">
                    <h5>Regional Director</h5>
                    <p className="text-muted">Name: [To be updated]</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="official-card mb-3">
                    <h5>Assistant Regional Director</h5>
                    <p className="text-muted">Name: [To be updated]</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )
      case 'org-chart':
        return (
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="text-primary mb-3">Organizational Chart</h3>
              <div className="text-center">
                <p>Organizational chart will be displayed here.</p>
                <div className="org-chart-placeholder">
                  <img src="/DMW-RO1-Website/images/org-chart.png" alt="Organizational Chart" className="img-fluid" style={{maxHeight: '400px'}} />
                </div>
              </div>
            </Card.Body>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="about">
      <Container>
        <h1 className="text-center mb-5">About Us</h1>
        
        <Nav variant="tabs" className="mb-4 justify-content-center">
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
              className="about-nav-link"
            >
              Overview & History
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'mission-vision'} 
              onClick={() => setActiveTab('mission-vision')}
              className="about-nav-link"
            >
              Mission & Vision
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'core-values'} 
              onClick={() => setActiveTab('core-values')}
              className="about-nav-link"
            >
              CORE Values
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'key-officials'} 
              onClick={() => setActiveTab('key-officials')}
              className="about-nav-link"
            >
              Key Officials
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'org-chart'} 
              onClick={() => setActiveTab('org-chart')}
              className="about-nav-link"
            >
              Organizational Chart
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {renderContent()}
      </Container>
    </div>
  )
}

export default About