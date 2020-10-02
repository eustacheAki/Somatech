// let number1= Math.floor(Math.random()*10)
// let number2= Math.floor(Math.random()*10)
// let number3= Math.floor(Math.random()*10)
// // let dif=0;

// // /**
// //  * 
// //  * @param {number1} number1 
// //  * @param {equal} number2 
// //  * @param {negativity} number3 
// //  */
// const all= (number1,number2,number3)=>{
//     if((number1-number3) === number2){
//         console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is equal to', number2 );
//     }else if((number1-number3) > number2){
//         console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is greater than', number2 );
//     }else{
//         console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is less than', number2 );
//     }
// }

// const all2=(number1,number2,number3)=>{
//     if((number1-number3)=== number1){
//         console.log('|',number1,number2,number3,'|' ,'the result', (number1-number3),'is equal to ',number1);
//     }else{
//     console.log('|',number1,number2,number3,'|','the result',(number1-number3),'is less than', number2);
// }
// }

// /// -----------------correct answer------------------------------------

// if(number1> number2 && number1> number3){
//       ///-------------------------
//     if( number2 > number3){
//         all(number1,number2,number3)
//         // if((-) === ){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is equal to', number2 );
//         // }else if((number1-number3) > number2){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is greater than', number2 );
//         // }else{
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is less than', number2 );
//         // }

//     }else{
//         all(number1,number3,number2)
//         // if((number1-number2) === number3){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number1-number2),'is equal to', number3 );
//         // }else if((number1-number2) > number3){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number1-number2),'is greater than', number3 );
//         // }else{
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number1-number2),'is less than', number3 );
//         // }
//     }
//   ///-------------------------
// }else if (number2> number1 && number2> number3){
//     ///-------------------------
    
//     if( number1 > number3){
//         all(number2,number1,number3)
//         // if((number2-number3) === number1){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number2-number3),'is equal to', number1 );
//         // }else if((number1-number3) > number2){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number2-number3),'is greater than', number1 );
//         // }else{
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number2-number3),'is less than', number1 );
//         // }

//     }else{
//         all(number2,number3,number1)
//         // if((number2-number1) === number3){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number2-number1),'is equal to', number3 );
//         // }else if((number1-number3) > number2){
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number2-number1),'is greater than', number3 );
//         // }else{
//         //     console.log('|',number1,number2,number3,'|', 'the result:',(number2-number1),'is less than', number3 );
//         // }
//     }
//     ///--------------------------
// }else if (number3> number1 && number3> number2){
//    ///-------------------------
    
//    if( number1 > number2){
//        all(number3,number1,number2)
//     // if((number3-number2) === number1){
//     //     console.log('|',number1,number2,number3,'|', 'the result:',(number3-number2),'is equal to', number1 );
//     // }else if((number3-number1) > number2){
//     //     console.log('|',number1,number2,number3,'|', 'the result:',(number3-number2),'is greater than', number1 );
//     // }else{
//     //     console.log('|',number1,number2,number3,'|', 'the result:',(number3-number2),'is less than', number1 );
//     // }

// }else{
//     all(number3,number2,number1)
//     // if((number3-number1) === number2){
//     //     console.log('|',number1,number2,number3,'|', 'the result:',(number3-number1),'is equal to', number2 );
//     // }else if((number3-number1) > number2){
//     //     console.log('|',number1,number2,number3,'|', 'the result:',(number3-number1),'is greater than', number2 );
//     // }else{
//     //     console.log('|',number1,number2,number3,'|', 'the result:',(number3-number1),'is less than', number2 );
//     // }
// }
// ///--------------------------
// }else if(number1 === number2 && number1 === number3){
//   console.log(number1,'and',number2, 'and ',number3,'are equal');
// }else if(number2=== number1 && number1 > number3){
//     all2(number2,number1,number3)
// //     if((number1-number3)=== number1){
// //         console.log('|',number1,number2,number3,'| the result', (number1-number3),'is equal to ',number1);
// //     }else{
// //     console.log('|',number1,number2,number3,'|',(number1-number3),'is less than', number2);
// // }
// }
// else if(number2=== number1 && number1 > number3){
//     all2(number1,number1,number3)
// //     if((number1-number3)=== number1){
// //         console.log('|',number1,number2,number3,'| the result', (number1-number3),'is equal to ',number1);
// //     }else{
// //     console.log('|',number1,number2,number3,'|',(number1-number3),'is less than', number2);
// // }
// }else if(number3=== number1 && number1 > number2){
//     all2(number1,number1,number2)
// //     if((number1-number2)=== number1){
// //         console.log('|',number1,number2,number3,'| the result', (number1-number2),'is equal to ',number1);
// //     }else{
// //     console.log('|',number1,number2,number3,'| the result',(number1-number3),'is less than', number2);
// // }
// }else if(number3=== number2 && number1 < number2){
//     all2(number2,number3,number1)
// //     if((number2-number1)=== number3){
// //         console.log('|',number1,number2,number3,'| the result', (number2-number1),'is equal to ',number2);
// //     }else{
// //     console.log('|',number1,number2,number3,'| the result',(number2-number1),'is less than', number2);
// // }
// }
// let count=0;
// function cc(card){
//     switch (card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case 'J':
//         case 'Q':
//         case 'K':
//         case 'A':
//             count--;
//             break;
//     }
//     return count;
// }
// console.log(cc(6))
//........................factorial.................................
// const Factorial=(num)=>{
// answer=1;
// if(num===0||num===1){
//    return answer; 
// }else{
// for(let i=num;i>=1;i--){
//   answer=answer*i;  
// }
// return answer;
// }
// }
// console.log(Factorial(0));
let psed=[];
let answer=0;
for(let ans=1;ans<=5;ans++){
    if(psed[0]===1||psed[1]===1){
console.log(ans)
    }
  answer=answer+ans;
  console.log(psed.push(answer));
}

