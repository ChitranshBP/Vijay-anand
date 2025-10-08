import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import AchievementsPage from './pages/AchievementsPage';
import AwardsPage from './pages/AwardsPage';
import PublicationsList from './pages/PublicationsPage';
import './App.css';
import BooksPage from './pages/BooksPage';
import FamilyPage from './pages/FamilyPage';
import ContactUs from './pages/ContactPage';
import TestimonialPage from './pages/TestimonialsPage';
import AwarenessLecturesPage from './pages/AwarenessLecturesPage';
import ProfessionalAssociationPage from './pages/ProfessionalAssociationPage'
import ProfessionalPresentationsPage from './pages/ProfessionalPresentationsPage';
import GolfChampionshipPage from './pages/GolfChampionshipPage';
import CureFoundationPage from './pages/CureFoundationPage';
import VideoGallery from './pages/VideoGalleryPage';
import PrintGalleryPage from './pages/PrintGalleryPage';



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
           <Route path="/books" element={<BooksPage/>} />
           <Route path="/family" element={<FamilyPage/>} />
           <Route path="/contact" element={<ContactUs/>}/>
           <Route path="/testimonials" element={<TestimonialPage/>}/>
           <Route path="/awareness-lectures" element={<AwarenessLecturesPage/>}/>
          <Route path="/professional-association" element={<ProfessionalAssociationPage/>}/>
                     <Route path="/presentations" element={<ProfessionalPresentationsPage/>}/>
                     <Route path="/ccgc-2" element={<GolfChampionshipPage/>}/>
                     <Route path="/cure-2" element={<CureFoundationPage/>}/>
                     <Route path="/video-gallery" element={<VideoGallery/>}/>
                     <Route path="/print-gallery" element={<PrintGalleryPage/>}/>
   
      
        </Routes>
      </div>
    </Router>);

}

export default App;