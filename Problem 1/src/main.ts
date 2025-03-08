import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// Components
@Component({
  selector: 'app-event-list',
  template: `
    <div class="events-container">
      <h2>Fest Events</h2>
      <div class="event-grid">
        <div *ngFor="let event of events" class="event-card">
          <h3>{{event.name}}</h3>
          <p>{{event.description}}</p>
          <p>Date: {{event.date}}</p>
          <button (click)="register(event)">Register</button>
        </div>
      </div>
    </div>
  `
})
class EventListComponent {
  events = [
    { id: 1, name: 'Tech Talk', description: 'Engaging discussions on latest technologies', date: '2024-03-15' },
    { id: 2, name: 'Coding Contest', description: 'Competitive programming challenge', date: '2024-03-16' },
    { id: 3, name: 'Cultural Night', description: 'Music and dance performances', date: '2024-03-17' }
  ];

  register(event: any) {
    console.log('Registering for:', event.name);
  }
}

@Component({
  selector: 'app-quiz',
  template: `
    <div class="quiz-container">
      <h2>Tech Quiz</h2>
      <div *ngIf="currentQuestion" class="question-card">
        <p>{{currentQuestion.question}}</p>
        <div class="options">
          <button *ngFor="let option of currentQuestion.options" 
                  (click)="selectAnswer(option)"
                  [class.selected]="selectedAnswer === option">
            {{option}}
          </button>
        </div>
      </div>
    </div>
  `
})
class QuizComponent {
  currentQuestion = {
    question: 'What is Angular?',
    options: ['A database', 'A framework', 'A programming language', 'An operating system'],
    correct: 'A framework'
  };
  selectedAnswer: string = '';

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }
}

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h2>Welcome, {{username}}</h2>
      <div class="dashboard-grid">
        <div class="dashboard-card">
          <h3>My Events</h3>
          <ul>
            <li *ngFor="let event of registeredEvents">{{event}}</li>
          </ul>
        </div>
        <div class="dashboard-card">
          <h3>Quiz Scores</h3>
          <p>Tech Quiz: {{quizScore}}/100</p>
        </div>
      </div>
    </div>
  `
})
class DashboardComponent {
  username = 'Student';
  registeredEvents = ['Tech Talk', 'Coding Contest'];
  quizScore = 85;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <nav class="navbar">
        <h1>FestX</h1>
        <div class="nav-links">
          <a [routerLink]="['/']">Events</a>
          <a [routerLink]="['/quiz']">Quiz</a>
          <a [routerLink]="['/dashboard']">Dashboard</a>
        </div>
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
class App {
  constructor() {}
}

// Routes configuration
const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'dashboard', component: DashboardComponent }
];

// Bootstrap the application
bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));