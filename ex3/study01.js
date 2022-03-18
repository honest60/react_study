/*
function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(avg(2, 3, 4, 5)); // 3.5);
*/
// reduce() 사용 / start
/*
function avg(...args) { 
    var init_num = 0;
    return (args.reduce((previousValue,currentValue) => 
        { return previousValue + currentValue; }) ) / args.length;
}

console.log(avg(2, 3, 4, 5)); // 3.5);
*/
// reduce() 사용 / end

//Rest파라미터(...) 연산자 /start
function foo(...rest) {
    console.log(Array.isArray(rest)); // true
    console.log(rest); // [ 1, 2, 3, 4, 5 ]
  }
  foo(1, 2, 3, 4, 5);
//Rest파라미터(...) 연산자 /end