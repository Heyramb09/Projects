import React from 'react';
import { useQuery } from 'react-query';
import { Users, FileText, BarChart } from 'lucide-react';

const fetchAdminData = async () => {
  // TODO: Replace with actual API call
  return {
    totalUsers: 50,
    totalTasks: 120,
    completedTasks: 80,
  };
};

const AdminDashboard = () => {
  const { data, isLoading, error } = useQuery('adminData', fetchAdminData);

  if (isLoading) return <div>Loading admin dashboard...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="text-blue-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">Total Users</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{data?.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <FileText className="text-green-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">Total Tasks</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{data?.totalTasks}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <BarChart className="text-yellow-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">Completed Tasks</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{data?.completedTasks}</p>
        </div>
      </div>
      {/* Add more admin-specific content here */}
    </div>
  );
};

export default AdminDashboard;