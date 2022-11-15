const dado1 = Math.random(Math.round()) * 5;
const dado2 = Math.random(Math.round()) * 5;
const suma = dado1 + dado2; 

const array=[]
for (let i = 1; i <= 36000; i++){
    
    if(suma === suma){
        array.push(i)
    
    }
 }
console.log(array)