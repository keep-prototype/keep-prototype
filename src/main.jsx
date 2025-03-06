import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { BottomBar } from './widgets/BottomBar.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <BottomBar />
  </BrowserRouter>
);
