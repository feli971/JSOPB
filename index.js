const cuenta = val => {
    if (val === 20){
        return val;
        
    };
     throw new Error("El valor es incorrecto. debe ser igual a 20") 
} 

const resultado = cuenta(20);

try{
    console.log(`Resultado ejecutado correctamente: ${resultado}`)
    
} catch(e){
    console.log(`No se pudo ejecutar por que: ${e}`)
} finally{
    console.log("Ejecución permanente");
}

    


  







