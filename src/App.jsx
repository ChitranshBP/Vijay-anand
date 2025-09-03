import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import AchievementsPage from './pages/AchievementsPage';
import AwardsPage from './pages/AwardsPage';
import PublicationsList from './pages/PublicationsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-inter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
           <Route path="/publications" element={<PublicationsList/>} />
        </Routes>
      </div>
    </Router>);

}

export default App;