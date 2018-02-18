import { Observable } from 'rxjs';

const startButton = document.querySelector('#start');

Observable.fromEvent(startButton, 'click')
    .subscribe((event) => {
        console.log(event);
    });

Observable.interval(1000)
    .subscribe((x) => console.log(x));
