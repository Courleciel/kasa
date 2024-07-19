import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/main.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './components/Error';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logements" element={<Housing />} />
            <Route path="/apropos" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
      <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)
