import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  counter = interval(1000);

  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];

  subscriber1;
  subscriber2;
  subscriber3;

  onSubscribe1() {
    this.subscriber1 = this.counter.subscribe((data) => {
      this.data1.push(data);
    });
  }

  onUnsubscribe1() {
    this.subscriber1.unsubscribe();
    this.data1.splice(0, this.data1.length);
  }

  onSubscribe2() {
    this.subscriber2 = this.counter.subscribe((data) => {
      this.data2.push(data);
    });
  }

  onUnsubscribe2() {
    this.subscriber2.unsubscribe();
    this.data2.splice(0, this.data2.length);
  }

  onSubscribe3() {
    this.subscriber3 = this.counter.subscribe((data) => {
      this.data3.push(data);
    });
  }

  onUnsubscribe3() {
    this.subscriber3.unsubscribe();
    this.data3.splice(0, this.data3.length);
  }
}
