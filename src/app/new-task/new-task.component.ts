import { TaskService } from './../Services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  onCreateNewTask() {
    this.taskService.OnCreateTask(this.newTask);
  }
}
