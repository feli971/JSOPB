const nombre ="Felipe"
const apellido = "Rodriguez"
const nombreyApellido = {nombre, apellido};

sessionStorage.setItem("nombre",JSON.stringify(nombreyApellido));
localStorage.setItem("nombre",JSON.stringify(nombreyApellido));
const ahora = new Date(); 
document.cookie=` nombreyApellido= ${JSON.stringify(nombreyApellido)};expires=${ahora.setTime(ahora.getTime() + (60 * 2000))}`


