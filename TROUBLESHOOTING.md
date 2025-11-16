# Troubleshooting Guide

## Common Issues and Solutions

### 1. API 500 Internal Server Error

**Problem**: Frontend shows "Failed to load content" and browser console shows 500 errors for `/api/announcements` and `/api/news`.

**Solution**:
1. Make sure the backend server is running:
   ```bash
   cd backend
   npm run dev
   ```
2. Check if the server starts on port 5000
3. Verify the data files don't have syntax errors

### 2. React Router Warnings

**Problem**: Console shows warnings about React Router future flags.

**Solution**: Already fixed in App.jsx with future flags:
```jsx
<Router 
  basename={import.meta.env.PROD ? '/DMW-RO1-Website' : '/'}
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}
>
```

### 3. Facebook Embed Errors

**Problem**: Multiple Facebook-related errors in console.

**Solution**: These are normal and don't affect functionality. They're from the embedded Facebook iframe and can be ignored.

### 4. Backend Won't Start

**Problem**: Backend server fails to start.

**Solutions**:
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Check if port 5000 is available
3. Use the test server:
   ```bash
   node test-server.js
   ```

### 5. Frontend Can't Connect to Backend

**Problem**: Network errors or connection refused.

**Solutions**:
1. Ensure backend is running on port 5000
2. Check if frontend proxy is configured correctly in vite.config.js
3. Verify CORS settings in backend server.js

## Quick Start

Use the provided batch script to start both servers:
```bash
start-dev.bat
```

Or manually:
1. Terminal 1: `cd backend && npm run dev`
2. Terminal 2: `cd frontend && npm run dev`

## Testing Backend Only

To test if backend data is working:
```bash
cd backend
node test-server.js
```

Then visit:
- http://localhost:5000/api/health
- http://localhost:5000/api/announcements  
- http://localhost:5000/api/news