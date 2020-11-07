/**
// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];**/
let items = [ {"id":2, "name":"b", "isSelected":true}, {"id":5, "name":"e", "isSelected":false},{"id":7, "name":"g", "isSelected":true},{"id":4, "name":"d", "isSelected":true}]

// let isSelected=items.sort(function (a, b) {
//   return a.isSelected===b.isSelected;
// });
// isSelected =items.sort((a, b) => a.isSelected>b.isSelected)

let isSelected= items.sort(function(x,y) {
  console.log("x",x)
  console.log("y",y)
  console.log("typeof ", typeof Boolean(x.isSelected), "val",Boolean(x.isSelected) )
  let v=(Boolean(x.isSelected) === Boolean(y.isSelected))? 0 : x.isSelected? -1 : 1;
  console.log("v",v)
        // true values first`
        return (Boolean(x.isSelected) === Boolean(y.isSelected))? 0 : x.isSelected? -1 : 1;
        // false values first
        // return (x === y)? 0 : x? 1 : -1;
    });

console.log("isSelected",isSelected)

// // sort by value
// let idN=items.sort(function (a, b) {
//   return a.id - b.id;
// });
// console.log("idN", idN)
// // sort by name
// items.sort(function(a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });


