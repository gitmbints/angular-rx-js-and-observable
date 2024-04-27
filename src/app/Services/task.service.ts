import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TaskService{
  // CreateTask: EventEmitter<string> = new EventEmitter<string>();

  CreateTask: Subject<string> = new Subject<string>();

  OnCreateTask(task: string){
    this.CreateTask.next(task);
  }
}