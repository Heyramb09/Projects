import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { CheckCircle, Clock, AlertTriangle, Plus } from 'lucide-react';

const fetchTasks = async () => {
  // TODO: Replace with actual API call
  return [
    { id: 1, title: 'Complete project proposal', status: 'completed', dueDate: '2024-03-20', assignedTo: 'John Doe' },
    { id: 2, title: 'Review code changes', status: 'in-progress', dueDate: '2024-03-22', assignedTo: 'Jane Smith' },
    { id: 3, title: 'Update documentation', status: 'pending', dueDate: '2024-03-25', assignedTo: 'Bob Johnson' },
  ];
};

const fetchInterns = async () => {
  // TODO: Replace with actual API call
  return [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ];
};

const createTask = async (newTask) => {
  // TODO: Replace with actual API call
  console.log('Creating new task:', newTask);
  return { id: Date.now(), ...newTask, status: 'pending' };
};

const TaskList = () => {
  const queryClient = useQueryClient();
  const [newTask, setNewTask] = useState({ title: '', dueDate: '', assignedTo: '' });
  const { data: tasks, isLoading: tasksLoading, error: tasksError } = useQuery('tasks', fetchTasks);
  const { data: interns, isLoading: internsLoading, error: internsError } = useQuery('interns', fetchInterns);

  const createTaskMutation = useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
      setNewTask({ title: '', dueDate: '', assignedTo: '' });
    },
  });

  if (tasksLoading || internsLoading) return <div>Loading...</div>;
  if (tasksError || internsError) return <div>An error occurred: {((tasksError || internsError) as Error).message}</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTaskMutation.mutate(newTask);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'in-progress':
        return <Clock className="text-blue-500" size={20} />;
      case 'pending':
        return <AlertTriangle className="text-yellow-500" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            className="w-full px-4 py-2 border rounded-md"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            required
          />
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            required
          />
          <select
            className="w-full px-4 py-2 border rounded-md"
            value={newTask.assignedTo}
            onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
            required
          >
            <option value="">Assign to</option>
            {interns.map((intern) => (
              <option key={intern.id} value={intern.name}>
                {intern.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Create Task
        </button>
      </form>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold p-6 bg-gray-50">Active Tasks</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.filter(task => task.status !== 'completed').map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(task.status)}
                    <span className="ml-2 capitalize">{task.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{task.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{task.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;