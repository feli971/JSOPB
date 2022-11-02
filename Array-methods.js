const listaCompras = ["Huevos", "Leche", "Pollo", "Avena", "Carne", "Rapiditas"];
const adding = listaCompras.push("Aceite de girasol");
const removeFromList = listaCompras.pop()

const favoriteMovie= [
    {titulo : "Inception ",
    director : "Christopher Nolan", 
    fecha : 2010},

    {titulo : "The mask",
    director : "Chuck russell", 
    fecha : 1994},

    {titulo : "The Corki",
    director : "Morm Lee", 
    fecha : 2015},

    {titulo : "Jay Killer 777",
    director : "Christopher Nolan", 
    fecha : 2007},

    {titulo : "Luck for me",
    director : "Naval Ravikant", 
    fecha : 1890},

    {titulo : "One step at a time",
    director : "Chom lee", 
    fecha : 1994}
]

const filterList = favoriteMovie.filter(value  =>{
    
    if (value.fecha >= 2010){
        return value.fecha
    }
})

const mapList = favoriteMovie.map(value =>{
    if (value = value.director){
        return value
    }
})

const mapListOriginal = favoriteMovie.map(value =>{
    if (value = value.titulo){
        return value
    }

})

const titleDirectors = mapListOriginal.concat(mapList)

const spreadConcat = [...mapListOriginal, ...mapList, 'Hi']
console.log(spreadConcat)