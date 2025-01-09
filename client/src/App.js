import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ListingsPage from './pages/Listings';
import ServicesPage from './pages/services';
import EventsPage from './pages/Events';
import LoginPage from './pages/Login';
import AddListing from './components/AddListing';
import Homeworthandlistingalerts from './pages/Homeworthandlistingalerts';
import AdminDash from './components/AdminDash'; // Admin dashboard component
import AdminRoute from './components/AdminRoute'; // AdminRoute for route protection
import AdminDashboard from './pages/Admindashboard'
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addlisting" element={<AddListing />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />



        {/* Admin Route with protection */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminDash />
            </AdminRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
