import React from 'react';
import { Calendar } from 'lucide-react';

function Events() {
  const events = [
    {
      id: '1',
      title: 'Hackathon 2024',
      description: 'A 24-hour coding competition to build innovative solutions',
      date: '2024-03-15',
      time: '09:00 AM',
      venue: 'Main Auditorium',
      capacity: 200,
      registeredParticipants: 150,
      type: 'team',
      category: 'technical'
    },
    {
      id: '2',
      title: 'Battle of Bands',
      description: 'Annual music competition featuring college bands',
      date: '2024-03-17',
      time: '06:00 PM',
      venue: 'Open Air Theatre',
      capacity: 500,
      registeredParticipants: 300,
      type: 'team',
      category: 'cultural'
    },
    {
      id: '3',
      title: 'Startup Summit',
      description: 'Learn from successful entrepreneurs and pitch your ideas',
      date: '2024-03-18',
      time: '10:00 AM',
      venue: 'Conference Hall',
      capacity: 150,
      registeredParticipants: 100,
      type: 'individual',
      category: 'workshop'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Register for Event
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.category === 'technical' ? 'bg-blue-100 text-blue-800' :
                  event.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>📅 Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>⏰ Time: {event.time}</p>
                <p>📍 Venue: {event.venue}</p>
                <p>👥 Type: {event.type.charAt(0).toUpperCase() + event.type.slice(1)}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    {event.registeredParticipants} / {event.capacity} registered
                  </span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${(event.registeredParticipants / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;