import React from 'react';
import { Brain, Clock, Users, Award } from 'lucide-react';

function Quizzes() {
  const quizzes = [
    {
      id: '1',
      title: 'Technical Knowledge Quiz',
      description: 'Test your technical knowledge across various domains',
      duration: 30,
      totalQuestions: 20,
      participants: 150,
      difficulty: 'Medium',
      category: 'Technical'
    },
    {
      id: '2',
      title: 'Cultural Awareness Quiz',
      description: 'Challenge yourself with questions about art, music, and culture',
      duration: 20,
      totalQuestions: 15,
      participants: 120,
      difficulty: 'Easy',
      category: 'Cultural'
    },
    {
      id: '3',
      title: 'Sports Trivia',
      description: 'Show off your knowledge of sports history and rules',
      duration: 25,
      totalQuestions: 18,
      participants: 90,
      difficulty: 'Hard',
      category: 'Sports'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Available Quizzes</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          View My Results
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {quiz.difficulty}
                </span>
                <Brain className="h-5 w-5 text-indigo-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{quiz.duration} mins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{quiz.totalQuestions} questions</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{quiz.participants} participants</span>
              </div>

              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;