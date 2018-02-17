import { Observable } from 'rxjs';

let button = document.getElementById("button");
let click = Observable.fromEvent(button, "click");


let readyPlayground = () => {
  return 'ready Playground';
};

let test = `${readyPlayground()}`;

click.subscribe(
    () => console.log(test),
        (e) => console.log(`error ${e}`),
        () => console.log("complete")
    );
