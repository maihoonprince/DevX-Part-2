
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Infinity } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              DevX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/learn" className="text-sm font-medium hover:text-primary transition-colors">
              Learn
            </Link>

            <Link to="/chatbot" className="text-sm font-medium hover:text-primary transition-colors">
              Chatbot
            </Link>

            <Link to="/playground" className="text-sm font-medium hover:text-primary transition-colors">
              Playground
            </Link>

            <Link to="https://comrade-pa0i.onrender.com" className="text-sm font-medium hover:text-primary transition-colors">
              Community
            </Link>

            <Link to="/developers" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              Dev<Infinity className="h-4 w-4" />
            </Link>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => navigate('/dsa-questions')}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/learn"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                to="/playground"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Playground
              </Link>
              <Link
                to="/community"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/developers"
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Dev<Infinity className="h-4 w-4" />
              </Link>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  navigate('/dsa-questions');
                  setIsMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
