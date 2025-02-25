import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-task-list-component',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css',
})
export class TaskListComponentComponent {
  @Input()
  tasks: Task[] = [];

  @Output()
  toggleTaskCopletedEvent = new EventEmitter<number>();
  @Output()
  deleteTaskEvent = new EventEmitter<number>();

  completedTasks() {
    return this.tasks.filter((task) => task.completed).length;
  }

  incompleteTasks() {
    return this.tasks.filter((task) => !task.completed).length;
  }

  toggleTaskComplete(task: Task) {
    this.toggleTaskCopletedEvent.emit(task.id);
  }
  deleteTask(task: Task) {
    this.deleteTaskEvent.emit(task.id);
  }
}
