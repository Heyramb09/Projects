export interface User {
  id: string;
  email: string;
  name: string;
  registeredEvents: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  capacity: number;
  registeredParticipants: number;
  type: 'individual' | 'team';
  category: 'technical' | 'cultural' | 'sports' | 'workshop';
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
}