import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary text-glow">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-glow transition-colors underline text-lg">
          Return to GameHub
        </a>
      </div>
    </div>
  );
};

export default NotFound;
