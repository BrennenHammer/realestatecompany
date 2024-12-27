import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ListingsPage from './pages/Listings';
import ServicesPage from './pages/services';
import EventsPage from './pages/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/listings" element={<ListingsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
