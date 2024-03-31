import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Todo } from './todo';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  imports: [
    MatExpansionModule,
    NgClass,
    MatButtonModule,
    MatChipsModule,
  ],
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos: Todo[] = [
    {
      id: crypto.randomUUID(),
      title: 'Learn Angular',
      status: 'in progress',
      details: 'Learn angular control flow'
    },
    {
      id: crypto.randomUUID(),
      title: 'Learn Supabase',
      status: 'completed',
      details: 'Need to learn supabase'
    },
    {
      id: crypto.randomUUID(),
      title: 'Learn NgRx',
      status: 'not started',
      details: 'Need to learn NgRx'
    }
  ];

  constructor() {
    setTimeout(() => {
      console.info('Updating todo...');
      this.todos.forEach(t => t.title = `Updated ${t.title}`);
    }, 2000);
  }
}
