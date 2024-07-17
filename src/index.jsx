import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
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
            <Route path="/àpropos" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
                </Router>
  </React.StrictMode>,
document.getElementById('root')
)
