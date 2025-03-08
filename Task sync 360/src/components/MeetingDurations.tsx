import React from 'react';
import { useQuery } from 'react-query';
import { Clock } from 'lucide-react';

const fetchMeetingDurations = async () => {
  // TODO: Replace with actual API call to Google Meet API
  return [
    { id: 1, title: 'Team Standup', duration: 15, date: '2024-03-18' },
    { id: 2, title: 'Project Review', duration: 45, date: '2024-03-19' },
    { id: 3, title: 'Client Meeting', duration: 60, date: '2024-03-20' },
  ];
};

const MeetingDurations = () => {
  const { data: meetings, isLoading, error } = useQuery('meetingDurations', fetchMeetingDurations);

  if (isLoading) return <div>Loading meeting durations...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meeting</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration (minutes)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {meetings?.map((meeting) => (
            <tr key={meeting.id}>
              <td className="px-6 py-4 whitespace-nowrap">{meeting.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Clock className="text-blue-500 mr-2" size={18} />
                  {meeting.duration}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{meeting.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingDurations;