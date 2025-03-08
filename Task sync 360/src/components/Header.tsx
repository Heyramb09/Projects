import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, CheckSquare, Video, LogOut, Settings } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const isAdmin = true; // TODO: Replace with actual admin check

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TaskSync360</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-200">
                <Home className="mr-1" size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="flex items-center hover:text-blue-200">
                <CheckSquare className="mr-1" size={18} />
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/meetings" className="flex items-center hover:text-blue-200">
                <Video className="mr-1" size={18} />
                Meetings
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/admin" className="flex items-center hover:text-blue-200">
                  <Settings className="mr-1" size={18} />
                  Admin
                </Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout} className="flex items-center hover:text-blue-200">
                <LogOut className="mr-1" size={18} />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;