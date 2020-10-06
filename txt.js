// const circle={
//     radius:1,
//     location:2,
//     draw(){
//         console.log('draw')
//     }
// };
// console.log(circle);

//                 factory function

// const createCircle=(radius,location)=>{
//     return {radius,
//         location,
//         draw(){
//             console.log('draw')
//         }
//     };
// }
// const circl=createCircle(1,3);
// console.log(circl);


//               constractor function


//using a constructor 

// function person(first_name,last_name){ 
//     this.first_name = first_name; 
//     this.last_name = last_name; 
//  } 
//  //creating new instances of person object 
//  let person1 = new person('Mukul','Latiyan'); 
//  let person2 = new person('Rahul','Avasthi'); 
   
//  console.log(person1); 
// //  console.log(`${person2.first_name} ${person2.last_name}`); 

const person=(fname,lname)=>{
    return {
        fname,
        lname
    };
}
let p1=person('akimana','eustache');
// console.log(p1.fname)

// Object.create() 

const name={
    fname:'akimana',
    lname:'muringa',
    comb:function(){
        return (`the fullname is: ${this.fname} ${this.lname}`);
    },
    age:30
};
let names=Object.create(name);
names.fname='kamende';
names.lname='munguzi';
// console.log(names.comb());
 class perso{
     constructor(a,b,c){
         this.a=a;
         this.b=b;
         this.c=c;
     }
         f1(){
                return (this.a +' '+ this.b + ' ' +'and I am aged'+' '+this.c);
         }
     }  
let pers=new perso('matungo','mur',30);
console.log(pers.f1());



