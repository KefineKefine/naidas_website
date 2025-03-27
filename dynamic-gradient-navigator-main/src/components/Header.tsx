
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-6 z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link text-lg ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `nav-link text-lg ${isActive ? 'active' : ''}`
              }
            >
              Profile
            </NavLink>
            <NavLink 
              to="/hobbies" 
              className={({ isActive }) => 
                `nav-link text-lg ${isActive ? 'active' : ''}`
              }
            >
              Hobbies
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link text-lg ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
