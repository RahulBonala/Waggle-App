import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-6">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-red-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-red-500">
              <AlertTriangle size={40} />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4">Something Went Wrong</h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              An unexpected error occurred. Our team has been notified. Please try refreshing the page.
            </p>
            <Button onClick={this.handleReset} className="rounded-2xl">
              <RefreshCw size={18} className="mr-2" /> Reload App
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
