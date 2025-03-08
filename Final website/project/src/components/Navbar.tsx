import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Home, User, Brain } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8" />
            <span className="text-xl font-bold">FestX</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/events" className="flex items-center space-x-1 hover:text-indigo-200">
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </Link>
            <Link to="/quizzes" className="flex items-center space-x-1 hover:text-indigo-200">
              <Brain className="h-5 w-5" />
              <span>Quizzes</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-white text-indigo-600 font-medium hover:bg-indigo-50"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;