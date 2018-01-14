import {Observable} from "rxjs";

let numbers = [1, 2, 5, 6];
//let source = Observable.from(numbers);

let source = Observable.create(observer => {
  let index = 0;
  let produceValue = () => {
    observer.next(numbers[index++]); 

    if(index < numbers.length) {
      setTimeout(produceValue, 2000);
    } else {
      observer.complete();
    }
  }
  produceValue();
}).map(n => n * 2);


source.subscribe(
  (value) => console.log(`value: ${value}`),
  (e) => console.log(`error ${e}`),
  () => console.log("complete")
);



