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
import PancreaticCancerIndiaPage from './pages/services/PancreaticCancerIndiaPage';
import AdrenalCancerIndiaPage from './pages/services/AdrenalCancerIndiaPage';
import ProtonTherapyIndiaPage from './pages/services/ProtonTherapyIndiaPage';
import BreastCancerPage from './pages/conditions/BreastCancerPage';
import ChemotherapyPage from './pages/treatment/ChemotherapyPage';
import ImmunotherapyPage from './pages/treatment/ImmunotherapyPage';
import TargetedTherapyPage from './pages/treatment/TargetedTherapyPage';
import HormoneTherapyPage from './pages/treatment/HormoneTherapyPage';
import BiologicalTherapyPage from './pages/treatment/BiologicalTherapyPage';
import PrecisionOncologyPage from './pages/treatment/PrecisionOncologyPage';
import ExternalBeamRadiationPage from './pages/treatment/ExternalBeamRadiationPage';
import IMRTPage from './pages/treatment/IMRTPage';
import IGRTPage from './pages/treatment/IGRTPage';
import SRSPage from './pages/treatment/SRSPage';
import SBRTPage from './pages/treatment/SBRTPage';
import BrachytherapyPage from './pages/treatment/BrachytherapyPage';
import TomotherapyPage from './pages/treatment/TomotherapyPage';
import ProtonTherapyPage from './pages/treatment/ProtonTherapyPage';
import CombinedModalityTherapyPage from './pages/treatment/CombinedModalityTherapyPage';
import SupportiveOncologyCarePage from './pages/treatment/SupportiveOncologyCarePage';
import './App.css';
import Conferences from './pages/ConferencesPage';
import DoctorAwarenessTalks from './pages/DoctorAwarenessPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventPage';
import CancerClinicsPage from './pages/CancerClinicsPage';
import CancerClinicDetailPage from './pages/CancerClinicDetailPage';
import SurvivorsPage from './pages/SurvivorsPage';
import SurvivorDetailPage from './pages/SurvivorDetailPage';
import TermsAndConditionsPage from './pages/terms-and-conditions';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MedicalDisclaimerPage from './pages/MedicalDisclaimerPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import FAQPage from './pages/FaqPage';





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
          <Route path="/faq" element={< FAQPage />} />
          <Route path="/terms-and-conditions" element={< TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={< PrivacyPolicyPage />} />
          <Route path="/medical-disclaimer" element={< MedicalDisclaimerPage />} />
          <Route path="/cookie-policy" element={< CookiePolicyPage />} />

          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />

          {/* Cancer Clinics */}
          <Route path="/cancer-clinics" element={<CancerClinicsPage />} />
          <Route path="/cancer-clinics/:clinicId" element={<CancerClinicDetailPage />} />

          {/* Survivors */}
          <Route path="/survivors" element={<SurvivorsPage />} />
          <Route path="/survivors/:survivorId" element={<SurvivorDetailPage />} />

          {/* Services */}
          <Route path="/pancreatic-cancer-treatment-in-secunderabad" element={<PancreaticCancerPage />} />
          <Route path="/pancreatic-cancer-treatment-in-india" element={<PancreaticCancerIndiaPage />} />
          <Route path="/adrenal-cancer-treatment-in-india" element={<AdrenalCancerIndiaPage />} />
          <Route path="/proton-therapy-treatment-in-india" element={<ProtonTherapyIndiaPage />} />
          <Route path="/services" element={<ServiceListPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailWrapper />} />

          {/* Conditions */}
          <Route path="/conditions/breast-cancer" element={<BreastCancerPage />} />

          {/* Treatment */}
          <Route path="/treatment/chemotherapy" element={<ChemotherapyPage />} />
          <Route path="/treatment/immunotherapy" element={<ImmunotherapyPage />} />
          <Route path="/treatment/targeted-therapy" element={<TargetedTherapyPage />} />
          <Route path="/treatment/hormone-therapy" element={<HormoneTherapyPage />} />
          <Route path="/treatment/biological-therapy" element={<BiologicalTherapyPage />} />
          <Route path="/treatment/precision-oncology" element={<PrecisionOncologyPage />} />
          <Route path="/treatment/external-beam-radiation" element={<ExternalBeamRadiationPage />} />
          <Route path="/treatment/imrt" element={<IMRTPage />} />
          <Route path="/treatment/igrt" element={<IGRTPage />} />
          <Route path="/treatment/srs" element={<SRSPage />} />
          <Route path="/treatment/sbrt" element={<SBRTPage />} />
          <Route path="/treatment/brachytherapy" element={<BrachytherapyPage />} />
          <Route path="/treatment/tomotherapy" element={<TomotherapyPage />} />
          <Route path="/treatment/proton-therapy" element={<ProtonTherapyPage />} />
          <Route path="/treatment/combined-modality-therapy" element={<CombinedModalityTherapyPage />} />
          <Route path="/treatment/supportive-oncology-care" element={<SupportiveOncologyCarePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
