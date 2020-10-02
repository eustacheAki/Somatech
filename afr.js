const afri={
    rwanda:{
        ur:{
           student: {
               stud1: {
                   name: 'shema',
                   age:26
               },
               stud2: {
                   name: 'akimana',
                   age:26
               }
           }
        }
    }
};
let x='stud1'
console.log(afri.rwanda.ur.student[x]);
x='stud2'
console.log(afri.rwanda.ur.student[x]);
