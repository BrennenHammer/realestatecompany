import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ListingsPage from './pages/Listings';
import ServicesPage from './pages/services';
import EventsPage from './pages/Events';
import Navbar from './components/Navbar'
import Listings from './components/Listings'
import Homeworthandlistingalerts from './pages/Homeworthandlistingalerts'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/homeworthandlistingalerts" element={<Homeworthandlistingalerts />} />
      </Routes>
    </Router>
  );
}

export default App;
