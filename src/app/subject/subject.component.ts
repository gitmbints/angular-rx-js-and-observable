import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

    const obs = new Subject();

    // Subscriber 1
    /* obs.subscribe({
      next: (value) => {
        console.log(value);
      }
    }); */

    // Subscriber 2
   /*  obs.subscribe({
      next: (value) => {
        console.log(value);
      }
    }); */

    // obs.next(Math.random());

    const data = ajax('https://randomuser.me/api/');

    obs.subscribe({
      next: (value) => {
        console.log(value);
      }
    });

    obs.subscribe({
      next: (value) => {
        console.log(value);
      }
    });

    obs.subscribe({
      next: (value) => {
        console.log(value);
      }
    });
    // obs Subject is used as a consumer not as an emitter
    data.subscribe(obs);
  }
}
