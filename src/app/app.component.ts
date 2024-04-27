import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { filter, from, fromEvent, map, Observable, of } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
	title = "angular-observables";

	data: any[] = [];

	@ViewChild("createbtn") createbtn: ElementRef;

	// createBtnObservable;

	array1 = [1, 2, 3, 4, 5];
	array2 = ["A", "B", "C", "D", "F"];
	name = "Johny Sins";

	// Observable
	/* myObservable = new Observable((observer) => {
		setTimeout(() => observer.next(1), 1000);
		setTimeout(() => observer.next(2), 2000);
		setTimeout(() => observer.next(3), 3000);
		// setTimeout(() => observer.error(new Error("Something went wrong.")), 3000);
		setTimeout(() => observer.next(4), 4000);
		setTimeout(() => observer.next(5), 5000);
		setTimeout(() => observer.complete(), 3000);
	}); */

	// myObservable = of(this.array1, this.array2);

	myObservable = from(this.array1).pipe(
		map((val) => {
			return val * 5;
		}),
		filter((val) => {
			return val % 4 === 0;
		})
	);

	// Observer
	getAsyncData() {
		/* this.myObservable.subscribe(
			(val: any[]) => {
				this.data.push(val);
			},
			(error) => {
				alert(error.message);
			},
			() => {
				alert("All the data is streamed");
			}
		); */

		this.myObservable.subscribe({
			next: (val: any) => {
				this.data.push(val);
			},
			error(error) {
				alert(error.message);
			},
			complete() {
				alert("All the data is streamed");
			},
		});
	}

	/* buttonClicked() {
		this.createBtnObservable = fromEvent(
			this.createbtn.nativeElement,
			"click"
		).subscribe((data) => {
			console.log(data);
			this.showItem();
		});
	} */

	ngAfterViewInit() {
		// this.buttonClicked();
	}

	/* 	showItem() {
		const div = document.createElement("div");
		div.innerText = "Item";
		div.className = "data-list";
		document.getElementById("container").appendChild(div);
	} */
}
