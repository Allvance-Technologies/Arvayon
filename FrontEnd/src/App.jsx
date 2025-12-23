import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="bg-primary min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
