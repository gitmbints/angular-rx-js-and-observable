import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {
    // Async Subject
    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.complete();
    asyncSubject.next(300);

    asyncSubject.subscribe({
      next: (data: number) => {
        console.log(`Subscriber 1: ${data}`);
      },
      complete: () => {
        console.log('Subscriber complete method.');
      }
    });

    asyncSubject.subscribe({
      next: (data: number) => {
        console.log(`Subscriber 2: ${data}`);
      },
      complete: () => {
        console.log('Subscriber 2 complete method.');
      }
    });

    asyncSubject.subscribe({
      next: (data: number) => {
        console.log(`Subscriber 3: ${data}`);
      },
      complete: () => {
        console.log('Subscriber 3 complete method.');
      }
    });
  }
}
