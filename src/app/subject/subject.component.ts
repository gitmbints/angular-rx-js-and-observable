import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {
    /* const obs = new Observable((observer) => {
      observer.next(Math.random());
    }); */

    const obs = new ReplaySubject(2);

    obs.next(100);
    obs.next(200);
    obs.next(300);


    // Subscriber 1
    obs.subscribe({
      next: (value) => {
        console.log("Subscriber 1: ", value);
      }
    });

    // Subscriber 2
    obs.subscribe({
      next: (value) => {
        console.log("Subscriber 2: ", value);
      }
    });

    obs.next(Math.random());

    // Subscriber 3
    obs.subscribe({
      next: (value) => {
        console.log("Subscriber 3: ", value);
      }
    });

    obs.next(45);
  }
}
