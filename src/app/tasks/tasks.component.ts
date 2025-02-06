import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  constructor(private tasksService: TasksService) {}

  get tasksForUser() {
    return this.tasksService.getUserTasks(this.id);
  }

  showAddTask = false;

  addTask() {
    this.showAddTask = true;
  }

  onClose() {
    this.showAddTask = false;
  }
}
