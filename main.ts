import { Observable } from 'rxjs';

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');

const interval$ = Observable.interval(1000);

const startInterval$ = start$
    .switchMapTo(interval$);

const stopInterval$ = stop$
    .switchMapTo(interval$);

startInterval$
    .subscribe((x) => console.log(x));


