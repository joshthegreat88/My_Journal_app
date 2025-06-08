import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Journals from './pages/Journals'
import TrackMood from './pages/TrackMood'
import Profile from './pages/Profile'   
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Extractaspdf from './pages/Extractaspdf'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/track-mood" element={<TrackMood />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/extractaspdf" element={<Extractaspdf />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
