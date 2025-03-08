import React from 'react';
import { useQuery } from 'react-query';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const fetchDashboardData = async () => {
  // TODO: Replace with actual API call
  return {
    tasksCompleted: 15,
    upcomingMeetings: 3,
    pendingTasks: 7,
  };
};

const Dashboard = () => {
  const { data, isLoading, error } = useQuery('dashboardData', fetchDashboardData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={24} />
          <h2 className="text-xl font-semibold">Tasks Completed</h2>
        </div>
        <p className="text-3xl font-bold mt-2">{data?.tasksCompleted}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <Clock className="text-blue-500 mr-2" size={24} />
          <h2 className="text-xl font-semibold">Upcoming Meetings</h2>
        </div>
        <p className="text-3xl font-bold mt-2">{data?.upcomingMeetings}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <AlertCircle className="text-yellow-500 mr-2" size={24} />
          <h2 className="text-xl font-semibold">Pending Tasks</h2>
        </div>
        <p className="text-3xl font-bold mt-2">{data?.pendingTasks}</p>
      </div>
    </div>
  );
};

export default Dashboard;