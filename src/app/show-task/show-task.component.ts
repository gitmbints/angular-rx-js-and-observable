import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.taskService.CreateTask.subscribe({
      next: (task: string) => {
        this.tasks.push(task);
      }
    });  
  }
}
