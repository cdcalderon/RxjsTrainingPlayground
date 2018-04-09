import { Observable } from 'rxjs';

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');

const interval$ = Observable.interval(1000);

const intervalThatStops$ = interval$
    .takeUntil(stop$);

const startInterval$ = start$
    .switchMapTo(intervalThatStops$)
    .scan((acc)=> {
        return {count: acc.count + 1}
    }, {count:0})
    .subscribe((x)=> console.log(x));



