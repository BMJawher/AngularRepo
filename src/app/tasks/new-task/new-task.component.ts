import {
  Component,
  Output,
  EventEmitter,
  NgModule,
  inject,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  taskTitle = '';
  taskDate = '';
  taskSummary = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        dueDate: this.taskDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
