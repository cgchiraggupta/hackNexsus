
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-hackNexus-purple font-bold text-xl">hack<span className="text-hackNexus-dark">Nexus</span></span>
            </Link>
            <p className="text-gray-600 text-sm">
              Connect with skilled developers for your next hackathon. Find the perfect teammates based on skills, interests, and location.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/find-teammates" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Find Teammates
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-hackNexus-purple text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/hacknexus" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-hackNexus-purple">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/hacknexus_in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-hackNexus-purple">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/hacknexus" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-hackNexus-purple">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-4">
              <a href="/help" className="inline-flex items-center text-sm text-hackNexus-purple hover:underline">
                <HelpCircle size={16} className="mr-1" />
                Need help?
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} hackNexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
