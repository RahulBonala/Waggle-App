import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { SearchResults } from './pages/SearchResults';
import { SitterProfile } from './pages/SitterProfile';
import { Checkout } from './pages/Checkout';
import { Tracking } from './pages/Tracking';
import { PaymentComplete } from './pages/PaymentComplete';
import { AuthModal } from './components/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; mobile: string } | null>(null);

  const handleLoginSuccess = (userData: { name: string; mobile: string }) => {
    setUser(userData);
    setIsAuthOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onLoginClick={() => setIsAuthOpen(true)} user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/" />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/sitter/:id" element={<SitterProfile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/payment-complete" element={<PaymentComplete />} />
          </Routes>
        </main>
        <Footer />
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    </Router>
  )
}

export default App
