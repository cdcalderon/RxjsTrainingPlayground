import {Observable} from "rxjs";

let numbers = [1, 2, 5, 6];
//let source = Observable.from(numbers);

let source = Observable.fromEvent(document, "mousemove")
                       .map((e : MouseEvent) => {
                         return {
                           x: e.clientX,
                           y: e.clientY
                         };
                       })
                       .filter(value => value.x > 500)

source.subscribe(
  (value) => console.log(`value: ${value}`),
  (e) => console.log(`error ${e}`),
  () => console.log("complete")
);



