import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Gamepad2 className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors" />
            <span className="text-2xl font-bold text-glow">GameHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className={isActive("/") ? "btn-gaming" : "hover:text-primary transition-colors"}
              >
                Home
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant={isActive("/login") ? "default" : "ghost"}
                className={isActive("/login") ? "btn-gaming" : "hover:text-primary transition-colors"}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button 
                variant={isActive("/register") ? "default" : "ghost"}
                className={isActive("/register") ? "btn-gaming" : "hover:text-primary transition-colors"}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;