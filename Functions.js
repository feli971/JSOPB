function verify(){ 
    if (2 === 2) 
    return true;
}
verify()
///////////////////////////

const promesa = new Promise ((resolve, reject) => {
    const i = 10 + 10
    if (i === 20){
    setTimeout(() =>{
        resolve();
    }, 5000);
    } else {
        reject();
    }
});

promesa 
.then(() => console.log("Hola soy una promesa ! "))
.catch (()=> console.log("ERROR !"))
.finally (() => console.log("Aqui estaré"))


///////////////////////////

function* pares(){
  
    for (let i = 0 ; i <=20; i+=2){
       yield i;
        if (i ===20){
        return false;
       
    }
    }
    

    
};
   
   

const resultPair = pares();

console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);
console.log(resultPair.next().value);

