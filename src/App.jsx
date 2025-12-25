import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchedulePage from './pages/SchedulePage';
import SpeakersPage from './pages/SpeakersPage';
import StudentsPage from './pages/StudentsPage';
import CompaniesPage from './pages/CompaniesPage';
import SponsorshipPage from './pages/SponsorshipPage';
import PitchYourIdea from './pages/PitchYourIdea';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/pitch-your-idea" element={<PitchYourIdea />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
