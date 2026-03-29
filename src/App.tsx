import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { SearchResults } from './pages/SearchResults';
import { SitterProfile } from './pages/SitterProfile';
import { Checkout } from './pages/Checkout';
import { Tracking } from './pages/Tracking';
import { PaymentComplete } from './pages/PaymentComplete';
import { BecomeSitterPage } from './pages/BecomeSitterPage';
import { UserProfile } from './pages/UserProfile';
import { Notifications } from './pages/Notifications';
import { NotFound } from './pages/NotFound';
import { AuthModal } from './components/AuthModal';
import { useAppStore } from './store/useAppStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAppStore();
  if (!user) return <Navigate to="/" />;
  return <>{children}</>;
};

function App() {
  const { user, isAuthModalOpen, setAuthModalOpen } = useAppStore();

  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <Toaster position="top-center" />
          <Navbar />
          <main id="main-content" className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/sitter/:id" element={<SitterProfile />} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/tracking/:bookingId" element={<ProtectedRoute><Tracking /></ProtectedRoute>} />
              <Route path="/payment-complete" element={<ProtectedRoute><PaymentComplete /></ProtectedRoute>} />
              <Route path="/become-a-sitter" element={<BecomeSitterPage />} />
              <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
              <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setAuthModalOpen(false)}
          />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
