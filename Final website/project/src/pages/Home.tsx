import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Brain, Bell } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to FestX</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your ultimate platform for managing and participating in college fest events.
          Join us for an unforgettable experience of learning, fun, and competition!
        </p>
        <Link
          to="/events"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
        >
          Explore Events
        </Link>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Event Management</h3>
          <p className="text-gray-600">Browse and register for various technical, cultural, and sports events.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Users className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team Registration</h3>
          <p className="text-gray-600">Create or join teams for group events and competitions.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Brain className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
          <p className="text-gray-600">Participate in challenging quizzes and win exciting prizes.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Bell className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Updates</h3>
          <p className="text-gray-600">Get real-time notifications about events and announcements.</p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Featured Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Hackathon 2024",
              date: "March 15-16, 2024",
              category: "Technical"
            },
            {
              title: "Battle of Bands",
              date: "March 17, 2024",
              category: "Cultural"
            },
            {
              title: "Startup Summit",
              date: "March 18, 2024",
              category: "Workshop"
            }
          ].map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-2">
                {event.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;