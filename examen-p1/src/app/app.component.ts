import { Component } from '@angular/core';
import { Task } from './interfaces/task';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'examen-p1';

  // listado de 10 tareas
  tasks: Task[] = [
    { id: 1, title: 'Vaciar el lavavajillas', completed: false },
    { id: 2, title: 'Pasear al perro', completed: false },
    { id: 3, title: 'Hacer la compra', completed: true },
    { id: 4, title: 'Estudiar Angular', completed: false },
    { id: 5, title: 'Preparar la cena', completed: true },
    { id: 6, title: 'Llamar a la abuela', completed: false },
    { id: 7, title: 'Hacer deporte', completed: false },
    { id: 8, title: 'Leer un libro', completed: true },
    { id: 9, title: 'Ver una película', completed: false },
    { id: 10, title: 'Hacer la cama', completed: false },
  ];

  toggleTaskCompleted($event: number) {
    const task = this.tasks.find((task) => task.id === $event);
    if (task) task.completed = !task.completed;
  }

  deleteTask($event: number) {
    this.tasks = this.tasks.filter((task) => task.id !== $event);
  }
}
