
   const Number={
        number:[Math.floor(Math.random()*10),
         Math.floor(Math.random()*10),
         Math.floor(Math.random()*10)]
        };
        
if((Number.number[0]>Number.number[1])&&(Number.number[1]>Number.number[2])){ 
        if((Number.number[0]-Number.number[2])>Number.number[1]) {

                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                'the result:',Number.number[0]-Number.number[2],'is greater than',Number.number[1]);  
        }  
        else if((Number.number[0]-Number.number[2])<Number.number[1]) {
                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                'the result:',Number.number[0]-Number.number[2],'is less than',Number.number[1]);  
        } 
        else if((Number.number[0]-Number.number[2])===Number.number[1]) {
                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                'the result:',Number.number[0]-Number.number[2],'is equal to',Number.number[1]);  
        }  

}
//........................................
else if((Number.number[1]>Number.number[0])&&(Number.number[0]>Number.number[2])){
        if((Number.number[1]-Number.number[2])>Number.number[0]) {

                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                'the result:',Number.number[1]-Number.number[2],'is greater than',Number.number[0]);  
        }  
        else if((Number.number[1]-Number.number[2])<Number.number[0]) {
                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                'the result:',Number.number[1]-Number.number[2],'is less than',Number.number[0]);  
        } 
        else if((Number.number[1]-Number.number[2])===Number.number[0]) {
                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                'the result:',Number.number[1]-Number.number[2],'is equal to',Number.number[0]);  
        } 
        }
        //......................................
        else if((Number.number[2]>Number.number[0])&&(Number.number[0]>Number.number[1])){
                if((Number.number[2]-Number.number[1])>Number.number[0]) {

                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                        'the result:',Number.number[2]-Number.number[1],'is greater than',Number.number[0]);  
                }  
                else if((Number.number[2]-Number.number[1])<Number.number[0]) {
                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                        'the result:',Number.number[2]-Number.number[1],'is less than',Number.number[0]);  
                } 
                else if((Number.number[2]-Number.number[1])===Number.number[0]) {
                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                        'the result:',Number.number[2]-Number.number[1],'is equal to',Number.number[0]);  
                }
                }
                //..............................................
                else if((Number.number[2]>Number.number[1])&&(Number.number[1]>Number.number[0])){
                        if((Number.number[2]-Number.number[0])>Number.number[1]) {

                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                'the result:',Number.number[2]-Number.number[0],'is greater than',Number.number[1]);  
                        }  
                        else if((Number.number[2]-Number.number[0])<Number.number[1]) {
                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                'the result:',Number.number[2]-Number.number[0],'is less than',Number.number[1]);  
                        } 
                        else if((Number.number[2]-Number.number[0])===Number.number[1]) {
                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                'the result:',Number.number[2]-Number.number[0],'is equal to',Number.number[1]);  
                        }
                        }
                        //..............................
                        else if((Number.number[1]>Number.number[2])&&(Number.number[2]>Number.number[0])){
                                if((Number.number[1]-Number.number[0])>Number.number[2]) {

                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                        'the result:',Number.number[1]-Number.number[0],'is greater than',Number.number[2]);  
                                }  
                                else if((Number.number[1]-Number.number[0])<Number.number[2]) {
                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                        'the result:',Number.number[1]-Number.number[0],'is less than',Number.number[2]);  
                                } 
                                else if((Number.number[1]-Number.number[0])===Number.number[2]) {
                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                        'the result:',Number.number[1]-Number.number[0],'is equal to',Number.number[2]);  
                                }
                                }
                                //....................................................................
                                else if((Number.number[0]>Number.number[2])&&(Number.number[2]>Number.number[1])){
                                        if((Number.number[0]-Number.number[1])>Number.number[2]) {

                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                'the result:',Number.number[0]-Number.number[1],'is greater than',Number.number[2]);  
                                        }  
                                        else if((Number.number[0]-Number.number[1])<Number.number[2]) {
                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                'the result:',Number.number[0]-Number.number[1],'is less than',Number.number[2]);  
                                        } 
                                        else if((Number.number[0]-Number.number[1])===Number.number[2]) {
                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                'the result:',Number.number[0]-Number.number[1],'is equal to',Number.number[2]);  
                                        }
                                        }
                                        //......................................................
                                        else if((Number.number[0]===Number.number[1])&&(Number.number[1]>Number.number[2])){
                                                if((Number.number[0]-Number.number[2])>Number.number[1]) {

                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                        'the result:',Number.number[0]-Number.number[2],'is greater than',Number.number[1]);  
                                                }  
                                                else if((Number.number[0]-Number.number[2])<Number.number[1]) {
                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                        'the result:',Number.number[0]-Number.number[2],'is less than',Number.number[1]);  
                                                } 
                                                else if((Number.number[0]-Number.number[2])===Number.number[1]) {
                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                        'the result:',Number.number[0]-Number.number[2],'is equal to',Number.number[1]);  
                                                }
                                                }
                                                //...................................................
                                                else if((Number.number[0]===Number.number[1])&&(Number.number[1]<Number.number[2])){
                                                        if((Number.number[2]-Number.number[1])>Number.number[0]) {

                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                'the result:',Number.number[2]-Number.number[1],'is greater than',Number.number[0]);  
                                                        }  
                                                        else if((Number.number[2]-Number.number[1])<Number.number[0]) {
                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                'the result:',Number.number[2]-Number.number[1],'is less than',Number.number[0]);  
                                                        } 
                                                        else if((Number.number[2]-Number.number[1])===Number.number[0]) {
                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                'the result:',Number.number[1]-Number.number[1],'is equal to',Number.number[0]);  
                                                        }
                                                        }
                                                        //..........................................................
                        
                                                        else if((Number.number[1]===Number.number[2])&&(Number.number[2]<Number.number[0])){
                                                                if((Number.number[0]-Number.number[1])>Number.number[2]) {

                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                        'the result:',Number.number[0]-Number.number[1],'is greater than',Number.number[2]);  
                                                                }  
                                                                else if((Number.number[0]-Number.number[1])<Number.number[2]) {
                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                        'the result:',Number.number[0]-Number.number[1],'is less than',Number.number[2]);  
                                                                } 
                                                                else if((Number.number[0]-Number.number[1])===Number.number[2]) {
                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                        'the result:',Number.number[0]-Number.number[1],'is equal to',Number.number[2]);  
                                                                }
                                                                }
                                                                //.............................................
                                                                else if((Number.number[0]===Number.number[2])&&(Number.number[2]>Number.number[1])){
                                                                        if((Number.number[0]-Number.number[1])>Number.number[2]) {

                                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                'the result:',Number.number[0]-Number.number[1],'is greater than',Number.number[2]);  
                                                                        }  
                                                                        else if((Number.number[0]-Number.number[1])<Number.number[2]) {
                                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                'the result:',Number.number[0]-Number.number[1],'is less than',Number.number[2]);  
                                                                        } 
                                                                        else if((Number.number[0]-Number.number[1])===Number.number[2]) {
                                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                'the result:',Number.number[0]-Number.number[1],'is equal to',Number.number[2]);  
                                                                        }
                                                                        }
                                                                        //...............................................................................
                                                                        else if((Number.number[0]===Number.number[2])&&(Number.number[2]<Number.number[1])){
                                                                                if((Number.number[1]-Number.number[0])>Number.number[2]) {

                                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                        'the result:',Number.number[1]-Number.number[0],'is greater than',Number.number[2]);  
                                                                                }  
                                                                                else if((Number.number[1]-Number.number[0])<Number.number[2]) {
                                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                        'the result:',Number.number[1]-Number.number[0],'is less than',Number.number[2]);  
                                                                                } 
                                                                                else if((Number.number[1]-Number.number[0])===Number.number[2]) {
                                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                        'the result:',Number.number[1]-Number.number[0],'is equal to',Number.number[2]);  
                                                                                }
                                                                                }
                                                                                //.......................................
                                                                                else if((Number.number[0]===Number.number[2])&&(Number.number[2]<Number.number[1])){
                                                                                        if((Number.number[1]-Number.number[2])>Number.number[0]) {

                                                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                                'the result:',Number.number[1]-Number.number[2],'is greater than',Number.number[0]);  
                                                                                        }  
                                                                                        else if((Number.number[1]-Number.number[2])<Number.number[0]) {
                                                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                                'the result:',Number.number[1]-Number.number[2],'is less than',Number.number[0]);  
                                                                                        } 
                                                                                        else if((Number.number[1]-Number.number[2])===Number.number[0]) {
                                                                                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                                'the result:',Number.number[1]-Number.number[2],'is equal to',Number.number[0]);  
                                                                                        }
                                                                                        }
                                                                                        //.................................
                                                                                        else if((Number.number[1]===Number.number[2])&&(Number.number[2]>Number.number[0])){
                                                                                                if((Number.number[1]-Number.number[0])>Number.number[2]) {

                                                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                                        'the result:',Number.number[1]-Number.number[0],'is greater than',Number.number[2]);  
                                                                                                }  
                                                                                                else if((Number.number[1]-Number.number[0])<Number.number[2]) {
                                                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                                        'the result:',Number.number[1]-Number.number[0],'is less than',Number.number[2]);  
                                                                                                } 
                                                                                                else if((Number.number[1]-Number.number[0])===Number.number[2]) {
                                                                                                        console.log('|',Number.number[0],Number.number[1],Number.number[2],'|',
                                                                                                        'the result:',Number.number[1]-Number.number[0],'is equal to',Number.number[2]);  
                                                                                                }
                                                                                                }
                                                                                                //.......................................................
        
                        else{
                                console.log('|',Number.number[0],Number.number[1],Number.number[2],'|')    
                        }










// const mix2= {
// number:[Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
// }

// console.log(mix2.number[0]);

// if (number1===0){
// console.log(number1);
// }
// else{
//     console.log(number2,number3);
// }

//  if(mix(Number.number[0])>mix(Number.number[1])&& mix(Number.number[0])>mix(Number.number[2]))
//         {
//             console.log('the great number between three number is',mix(Number.number[0]), 'number one is great than others')
//  }

// console.log('the great number between three number is',mix(), 'number one is great than others')
// }
// mix()
// if(Number.number[0]>Number.number[1] && Number.number[0]>Number.number[2])
// {
//     console.log('the great number between three number is',mix(), 'number one is great than others')
// }
// else if((Number.number[1]>Number.number[0]&&Number.number[1]>Number.number[2])){
//     console.log('the great number between three number is',mix(), 'number two is great than others')
// }
// else if((Number.number[2]>Number.number[0]&&Number.number[2]>Number.number[1])){
//     console.log('the great number between three number is',mix(), 'number three is great than others')
// }
// else if((Number.number[2]===Number.number[0]&&Number.number[2]===Number.number[1])){
//     console.log('equality')}
//     else{
//         console.log('mixed')
//     }




// let number=function(){
//     number1= Math.floor(Math.random()*10)
//     number2= Math.floor(Math.random()*10)
//     number3= Math.floor(Math.random()*10)
//     console.log(number1,number2,number3);
// }
// number()
// let number1= Math.floor(Math.random()*10)
// let number2= Math.floor(Math.random()*10)
// let number3= Math.floor(Math.random()*10)
// console.log(number1,number2,number3);

