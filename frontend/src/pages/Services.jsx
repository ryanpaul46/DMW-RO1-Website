const Services = () => {
  const services = [
    {
      id: 1,
      title: "OFW Registration",
      description: "Register as an Overseas Filipino Worker",
      requirements: ["Valid passport", "Employment contract", "Medical certificate"]
    },
    {
      id: 2,
      title: "Welfare Assistance",
      description: "Support services for OFWs and their families",
      requirements: ["Valid ID", "Proof of employment abroad"]
    },
    {
      id: 3,
      title: "Reintegration Programs",
      description: "Programs for returning OFWs",
      requirements: ["OFW ID", "Certificate of employment"]
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  {service.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services