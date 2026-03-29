import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-6">
      <div className="text-center max-w-md">
        <div className="text-[120px] font-black text-gray-100 leading-none select-none">404</div>
        <h1 className="text-3xl font-black text-gray-900 -mt-6 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back to safety.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => navigate(-1)} variant="outline" className="rounded-2xl">
            <ArrowLeft size={18} className="mr-2" /> Go Back
          </Button>
          <Link to="/">
            <Button className="rounded-2xl">
              <Home size={18} className="mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
