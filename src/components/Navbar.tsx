
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  Menu, 
  MessageSquare, 
  Search, 
  User, 
  Calendar, 
  Users,
  X
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be managed by auth context in a real app
  const location = useLocation();
  
  // Dummy notification count
  const notificationCount = 3;

  // Function to check active route
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-hackNexus-purple font-bold text-xl">hack<span className="text-hackNexus-dark">Nexus</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/hackathons" 
                  className={`${isActive('/hackathons') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1`}
                >
                  <Calendar size={18} />
                  <span>Hackathons</span>
                </Link>
                <Link 
                  to="/find-teammates" 
                  className={`${isActive('/find-teammates') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1`}
                >
                  <Users size={18} />
                  <span>Find Teammates</span>
                </Link>
                <Link 
                  to="/messages" 
                  className={`${isActive('/messages') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1`}
                >
                  <MessageSquare size={18} />
                  <span>Messages</span>
                </Link>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell size={20} />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                      {notificationCount}
                    </span>
                  )}
                </Button>
                <Link to="/profile">
                  <Avatar className="cursor-pointer hover:ring-2 hover:ring-hackNexus-purple transition-all">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/hackathons" 
                  className={`${isActive('/hackathons') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Explore Hackathons
                </Link>
                <Link 
                  to="/about" 
                  className={`${isActive('/about') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple px-3 py-2 rounded-md text-sm font-medium`}
                >
                  About
                </Link>
                <Link to="/login">
                  <Button variant="outline" className={`ml-4 ${isActive('/login') ? 'border-hackNexus-purple text-hackNexus-purple' : ''}`}>Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button className={`ml-2 ${isActive('/signup') ? 'bg-hackNexus-lightPurple' : 'bg-hackNexus-purple hover:bg-hackNexus-lightPurple'}`}>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-hackNexus-purple focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/hackathons" 
                  className={`${isActive('/hackathons') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar size={18} />
                  <span>Hackathons</span>
                </Link>
                <Link 
                  to="/find-teammates" 
                  className={`${isActive('/find-teammates') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users size={18} />
                  <span>Find Teammates</span>
                </Link>
                <Link 
                  to="/messages" 
                  className={`${isActive('/messages') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare size={18} />
                  <span>Messages</span>
                </Link>
                <Link 
                  to="/notifications" 
                  className={`${isActive('/notifications') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                  {notificationCount > 0 && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                      {notificationCount}
                    </span>
                  )}
                </Link>
                <Link 
                  to="/profile" 
                  className={`${isActive('/profile') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/hackathons" 
                  className={`${isActive('/hackathons') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore Hackathons
                </Link>
                <Link 
                  to="/about" 
                  className={`${isActive('/about') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/login" 
                  className={`${isActive('/login') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  to="/signup" 
                  className={`${isActive('/signup') ? 'text-hackNexus-purple' : 'text-gray-600'} hover:text-hackNexus-purple block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
