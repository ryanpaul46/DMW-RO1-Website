# DMW Regional Office 1 Website

An interactive website for the Department of Migrant Workers Regional Office 1 in the Philippines.

## Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

## Project Structure

```
DMW RO1 Website/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js + Express backend
│   ├── routes/             # API routes
│   ├── data/               # Sample data
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on http://localhost:5000

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on http://localhost:3000

## Features

### Current Features
- **Home Page** - Welcome section with latest announcements
- **Services Page** - Information about DMW services and requirements
- **Contact Page** - Contact form and office information
- **Responsive Design** - Mobile-friendly interface
- **API Integration** - Frontend communicates with backend API

### API Endpoints
- `GET /api/health` - Health check
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get specific announcement
- `POST /api/contact` - Submit contact form

## Development

### Frontend Development
- Uses Vite for fast hot module replacement
- Proxy configured to backend API (`/api` → `http://localhost:5000`)
- Modern React with hooks and functional components

### Backend Development
- Express server with modular routing
- CORS enabled for frontend communication
- Basic error handling and validation
- Environment configuration with dotenv

## Deployment

### Frontend Build
```bash
cd frontend
npm run build
```

### Production Backend
```bash
cd backend
npm start
```

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication and authorization
- File upload functionality
- Email notifications
- Admin dashboard
- Multi-language support (Filipino/English)
- Online appointment booking
- Document tracking system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is developed for the Department of Migrant Workers Regional Office 1.