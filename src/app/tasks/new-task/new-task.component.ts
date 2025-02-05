import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  taskTitle = '';
  taskDate = '';
  taskSummary = '';

  onCancel() {
    this.close.emit();
  }
  
  onSubmit() {
    this.add.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDate
    });
  }

}
