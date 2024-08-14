import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="989679819726-e7ncsvjvtk6i7vjqpta0o0quncmp4u16.apps.googleusercontent.com">
      <Login />
    </GoogleOAuthProvider>

  </React.StrictMode>,
)