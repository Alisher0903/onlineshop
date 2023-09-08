import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'aos/dist/aos.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ToastContainer/>
    <App />
  </BrowserRouter>
);

reportWebVitals();