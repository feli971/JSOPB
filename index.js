class Estudiante{
  constructor(nombre,asignaturas) {
        this.nombre=nombre;
        this.asignaturas=asignaturas;
    
   }
     obtenDatos(){
        console.log(`Nombre: ${this.nombre}, Asignaturas: ${this.asignaturas}`)
    };
};
const estudiante1 = new Estudiante("Felipe",["HTML","CSS","JAVASCRIPT"])
estudiante1.obtenDatos()




