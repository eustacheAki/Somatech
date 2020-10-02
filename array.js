// let square=[name='rj', age=30, address='kgl'];
// for(let i=0;i<square.length;i++){
//     console.log(square[i]);
// }
//........or,......
// const square=[name='rj', age=30, address='kgl'];
// // for(name of square)console.log(name);
// console.log(square[0]);

// let number=[number1= Math.floor(Math.random()*10),number2= Math.floor(Math.random()*10),
//     number3=Math.floor(Math.random()*10)];
//     console.log(number);
//......................concertinate 2 arrays..........
//another way of creating array
// let arr3=new Array('a','b');
// console.log(arr3)
// var points = new Array();     // Bad way to create the empty array, new keyword complicate the code
// var points = [];              // Good way to create the empty array
let arr1=['eussy',2,3];
let arr2=[2,3,4];
arr2[0]=5;
// let a=5;
// arr2.push('eussy')//add an element
arr=[...arr1,...arr2];// add together two arrays
// console.log(arr1.concat(arr2)) to concatinate two or more arrays
// delete arr[0];//deleting element
// console.log(arr);
//.......................................
// arr.splice(2,0,'lemon','kiwi');The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
//...................................
// console.log(arr.length);
// console.log(Math.max.apply(null,arr));
// console.log('the smallest number is:',arr[0],'and the highest is:',arr.length -1);// to sort by order
// console.log(arr.length-1); // to access last element of an array
// console.log(arr.toString())// to conver into string
// console.log(arr.join('--'));The join() method also joins all array elements into a string
// console.log(arr.pop()); //to remove last element and display it.
// // to remove first element of array and display it
// console.log(arr.unshift('kam'))//element to insert at the begining of array

// for(i=0;i<arr.length;i++)
//     // console.log(arr[i])

// console.log(arr[i]);

// console.log(Array.isArray(arr)); // returns true, to check if element is array
//.................map().............................

// const aki=x=>x*2;
// console.log(a);
// console.log(a.map(aki));
// console.log(sum=a.reduce((acc,value)=> acc+value));
// console.log(new Date(dateString));
let a=[1,2,3,4,5,6,7,8,9,10,11,12];
let sum=0;
for(let i=0;i<a.length;i++){
sum=sum+a[i];
console.log(sum);
}

// let b=2;
// for(i=0;i<=a.length;i++){
//     console.log(a[i]*2); 
// }
// console.log(typeof b);
// const mult=(x)=>x*2
// c=(a.map(mult));
// console.log(c);
// a.pop()
// console.log(a);
// let result=0;
// const number=(total, numb)=> {
//     result=total+numb;
//     return result;
    
// }
// console.log(a.reduce(number));

