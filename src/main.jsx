import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Strict mode will remove because useEffect render twice
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
