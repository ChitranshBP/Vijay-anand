import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { services } from './pages/services';
import { useParams } from 'react-router-dom';
import ServiceListPage from './pages/ServiceListPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import AchievementsPage from './pages/AchievementsPage';
import AwardsPage from './pages/AwardsPage';
import PublicationsList from './pages/PublicationsPage';
import BooksPage from './pages/BooksPage';
import FamilyPage from './pages/FamilyPage';
import ContactUs from './pages/ContactPage';
import TestimonialPage from './pages/TestimonialsPage';
import AwarenessLecturesPage from './pages/AwarenessLecturesPage';
import ProfessionalAssociationPage from './pages/ProfessionalAssociationPage';
import ProfessionalPresentationsPage from './pages/ProfessionalPresentationsPage';
import GolfChampionshipPage from './pages/GolfChampionshipPage';
import CureFoundationPage from './pages/CureFoundationPage';
import VideoGallery from './pages/VideoGalleryPage';
import PrintGalleryPage from './pages/PrintGalleryPage';
import PancreaticCancerPage from './pages/services/PancreaticCancerPage';
import './App.css';
import Conferences from './pages/ConferencesPage';
import DoctorAwarenessTalks from './pages/DoctorAwarenessPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventPage';
import CancerClinicsPage from './pages/CancerClinicsPage';
import CancerClinicDetailPage from './pages/CancerClinicDetailPage';
// Wrapper to pass service data to ServiceDetailPage via URL param
const ServiceDetailWrapper = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return <div className="p-20 text-center">Service not found.</div>;
  }

  return <ServiceDetailPage service={service} />;
};

function App() {
  return (
    <Router>
      <div className="font-inter">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Other pages */}
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/publications" element={<PublicationsList />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/awareness-lectures" element={<AwarenessLecturesPage />} />
          <Route path="/professional-association" element={<ProfessionalAssociationPage />} />
          <Route path="/presentations" element={<ProfessionalPresentationsPage />} />
          <Route path="/ccgc-2" element={<GolfChampionshipPage />} />
          <Route path="/cure-2" element={<CureFoundationPage />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/print-gallery" element={<PrintGalleryPage />} />
          <Route path="/conference" element={<Conferences />} />
          <Route path="/doctor-speaks" element={< DoctorAwarenessTalks />} />



<Route path="/events" element={<EventsPage />} />
  <Route path="/events/:eventId" element={<EventDetailPage />} />

          {/* Cancer Clinics */}
          <Route path="/cancer-clinics" element={<CancerClinicsPage />} />
          <Route path="/cancer-clinics/:clinicId" element={<CancerClinicDetailPage />} />

          {/* Services */}
          <Route path="/service/pancreatic-cancer" element={<PancreaticCancerPage />} />
          <Route path="/services" element={<ServiceListPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
