import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Optional: log to a service (Sentry, etc.)
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Something went wrong 😢
          </h2>
          <h3 className="text-gray-600">
            {this.state.error?.message || "An unexpected error occurred."}
          </h3>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Reload Page
          </button>
          <br />
          <br />
          <p>{this.state.error?.stack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
