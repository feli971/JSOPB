const datosPersonales = {nombre: "Felipe",
                         altura: 170,
                         isDeveloper: true,
                         edad: 22
}

const edad = datosPersonales.edad;

const nuevoDatosPersonales =[datosPersonales, 
 {nombre: "Rocky",
 altura: 180,
 isDeveloper: false,
 edad: 27},                          
 {nombre: "Leo",
 altura: 172,
 isDeveloper: false,
 edad: 28}


]

nuevoDatosPersonales.sort((a, b) => b.edad - a.edad   )
console.log(nuevoDatosPersonales)

