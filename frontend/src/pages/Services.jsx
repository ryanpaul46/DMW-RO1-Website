const Services = () => {
  const services = [
    {
      id: 1,
      title: "PEOS",
      subtitle: "Pre-Employment Orientation Seminar",
      description: "The Online PEOS is a web based learning session and is a pre-application requirement provided for applicants prospecting to work overseas.",
      requirements: ["Valid passport", "Employment contract", "Medical certificate"],
      icon: "🌐",
      color: "linear-gradient(135deg, #60a5fa, #3b82f6)",
      link: "https://peos.dmw.gov.ph/"
    },
    {
      id: 2,
      title: "E-registration",
      subtitle: "Electronic Registration System",
      description: "Online registration platform for overseas Filipino workers to complete their employment documentation digitally.",
      requirements: ["Valid ID", "Email address", "Mobile number"],
      icon: "📝",
      color: "linear-gradient(135deg, #10b981, #059669)",
      link: "https://onlineservices.dmw.gov.ph/OnlineServices/POEAOnline.aspx"
    },
    {
      id: 3,
      title: "OFW Records",
      subtitle: "Worker Records Management",
      description: "Comprehensive database system for accessing and managing overseas Filipino worker employment records and history.",
      requirements: ["OFW ID", "Valid identification"],
      icon: "📋",
      color: "linear-gradient(135deg, #f59e0b, #d97706)",
      link: "https://ofwrecords.dmw.gov.ph/"
    },
    {
      id: 4,
      title: "BM Processing",
      subtitle: "Balik Manggagawa Processing",
      description: "Streamlined processing services for returning overseas Filipino workers seeking new employment opportunities abroad.",
      requirements: ["Previous OFW records", "Valid passport", "Employment contract"],
      icon: "🔄",
      color: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
    },
    {
      id: 5,
      title: "Direct Hire Processing",
      subtitle: "Direct Employment Services",
      description: "Processing services for workers hired directly by foreign employers without recruitment agency involvement.",
      requirements: ["Employment contract", "Employer verification", "Medical certificate"],
      icon: "👥",
      color: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    {
      id: 6,
      title: "DMW Online Help Desk",
      subtitle: "Digital Support Services",
      description: "24/7 online assistance platform providing support and guidance for all DMW services and inquiries.",
      requirements: ["Valid email", "Contact information"],
      icon: "💬",
      color: "linear-gradient(135deg, #06b6d4, #0891b2)"
    },
    {
      id: 7,
      title: "ORAA",
      subtitle: "Overseas Recruitment Administration",
      description: "Comprehensive agency management system for overseas recruitment and administration services.",
      requirements: ["Agency license", "Valid documentation"],
      icon: "🏢",
      color: "linear-gradient(135deg, #6366f1, #4f46e5)",
      link: "https://apps.dmw.gov.ph/oraa/login.aspx"
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className="service-card" 
              style={{background: service.color || 'white'}}
              onClick={() => service.link && window.open(service.link, '_blank')}
            >
              <div className="service-icon">{service.icon}</div>
              <h1 style={{color: service.color ? 'white' : '#1e40af'}}>{service.title}</h1>
              {service.subtitle && <h4 style={{color: service.color ? 'white' : '#374151', fontWeight: 'normal', marginBottom: '1rem'}}>{service.subtitle}</h4>}
              <p style={{color: service.color ? 'white' : '#333'}}>{service.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services