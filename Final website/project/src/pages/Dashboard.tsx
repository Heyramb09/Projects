import React from 'react';
import { Calendar, Award, Bell } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">My Events</h2>
          </div>
          <p className="text-gray-600 mb-4">You have registered for 2 events</p>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <span>Hackathon 2024</span>
              <span className="text-sm text-gray-500">Mar 15</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <span>Battle of Bands</span>
              <span className="text-sm text-gray-500">Mar 17</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Quiz Performance</h2>
          </div>
          <p className="text-gray-600 mb-4">Recent quiz scores</p>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <span>Technical Quiz</span>
              <span className="font-medium text-green-600">85%</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <span>Cultural Quiz</span>
              <span className="font-medium text-green-600">92%</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <ul className="space-y-3">
            <li className="p-3 bg-gray-50 rounded-md">
              <p className="font-medium">Hackathon Team Registration</p>
              <p className="text-sm text-gray-600">Complete your team registration by Mar 10</p>
            </li>
            <li className="p-3 bg-gray-50 rounded-md">
              <p className="font-medium">New Quiz Available</p>
              <p className="text-sm text-gray-600">Technical quiz is now open for participation</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md">
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-lg font-bold text-indigo-600">15</div>
              <div className="text-sm text-gray-500">MAR</div>
            </div>
            <div>
              <h3 className="font-medium">Hackathon 2024</h3>
              <p className="text-sm text-gray-600">9:00 AM - Main Auditorium</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md">
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-lg font-bold text-indigo-600">17</div>
              <div className="text-sm text-gray-500">MAR</div>
            </div>
            <div>
              <h3 className="font-medium">Battle of Bands</h3>
              <p className="text-sm text-gray-600">6:00 PM - Open Air Theatre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;