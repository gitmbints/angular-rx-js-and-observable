import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {
    // Observable vs Promise

    // Create a Promise
    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(400);
    });

    // Consume a promise
    promise.then((value) => {
      console.log(value);
      console.log('Promise is resolved');
    });

    // Create an Observable
    const observable = new Observable((observer) => {
      console.log('Observable is called');
      observer.next(200);
    });

    // Subscribe to an Observable
    observable.subscribe({
      next: (value) => {
        console.log(value);
        console.log('Observable subscribed');
      }
    });
  }
}
