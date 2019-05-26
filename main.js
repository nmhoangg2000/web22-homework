// console.log("Hello world");

// // const a = 10;

// // console.log(a);

// // a = "Hello";

// let b = 10;
// var c = 15;

// console.log(b);

// b = true;

// console.log(b);

// //khai báo object
// const obj = {
//     b: 100,
//     c: "Hello"
// };

// console.log(obj.b);
// console.log(obj["b"]);
// //thêm vào object
// obj.d = true;
// obj["e"] = 1000;
// obj.b = {
//     a:1000
// };
// delete obj.c;

// console.log(obj);

// const arr = [ 213, 'Hello', 2139, true ];

// arr.push("100");

// console.log(arr.length);


// const number = 100.234145342;
// console.log(number.toFixed(2));
// const char = "jkdhfkahgjadgfja";
// char.toLowerCase();
// char.toUpperCase();
// console.log(char.length);
// // Number(number).toFixed(2);

// const now = new Date();   //lấy ngày và giờ trên hệ thống
// console.log(now);
// console.log(now.getDate());
// console.log(now.getHours());

// console.log(/([A-Z])\w/.test);

// const err = new Error("Đây là lỗi");

// throw err;

//Function scope
// var a = 100;

// function aFunc() {
//     var b = 50;

//     function bFunc(){
//         var c = 15;
//     }
//     console.log(a); //100
//     console.log(b); //50
//     console.log(c); //err

// }

// aFunc();

// console.log(a); //100
// console.log(b); //lỗi

// setTimeout(function(){
//     console.log("1s");
// }, 1000);
// setInterval(function(){
//     console.log("1s");
// }, 1000);

// function countDown(count){
//     for(let i = count; i >= 0; i--){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000*(count-i));
        
//     }
// }

// countDown(5);

// var a = 10;
// if(true){
//     var a = 15;
// }

// console.log(a);
// console.log(b);

// console.log("begin");
// setTimeout(function(){
//     console.log("1s")
// }, 1000)
// console.log("end");

// function print(message){
//     console.log(message);
// }
// print("Hello");
// const printClone = print;

// printClone("World");


// function print(message, time, cb){
//     setTimeout(function(){
//         console.log(message);
//         if(cb) cb();
//     }, time);
// }

// print("Đánh răng", 2000, function(){
//     print("Rửa mặt", 1500);
// });

// console elem = document.createElement('p');
// elem.innerText = "Hello world"