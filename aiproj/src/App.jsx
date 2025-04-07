import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import ImageGen from './Pages/Imagegen';
import Signup from './Pages/Signup';
import './App.css'; // Import your global styles

function App() {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="App">
        <Navbar /> {/* Navbar is outside Routes so it appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/Imagegen" element={<ImageGen />} /> {/* ImageGen page */}
          <Route path="/Signup" element={<Signup />} /> {/* Signup page */}
          {/* Add a 404 route for unknown paths */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;