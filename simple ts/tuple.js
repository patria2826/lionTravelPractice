var tupleee = [123, "No"];
console.log(tupleee[0]);
var tuple_arr = [];
tuple_arr.push(tupleee);
console.log(tuple_arr);
tuple_arr.push(tupleee);
console.log(tuple_arr);
tuple_arr.push(tupleee);
console.log(tuple_arr);
// tuple_arr.push(true); error~~~
tuple_arr.map(function (e, i) { console.log(e, i); });
