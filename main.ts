import { Observable } from 'rxjs';

const startButton = document.querySelector('#start');

const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);

start$
    .switchMap((event) => interval$)
    .subscribe((x) => console.log(x));


