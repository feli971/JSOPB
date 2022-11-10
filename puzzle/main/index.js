const source = document.querySelectorAll(".parrafo");
const contenedor = document.querySelectorAll(".section");

source.forEach(parrafo =>{
  parrafo.addEventListener("dragstart", e  =>{ 
    console.log("drag")
    parrafo.classList.add("dragging")
    e.dataTransfer.setData("id", parrafo.id)
  })


  parrafo.addEventListener("drag", () =>{ 
    console.log("drag")
  })



  parrafo.addEventListener("dragend", () =>{ 
    console.log("dragend")
    parrafo.classList.remove("dragging")
  })
})

contenedor.forEach(container => {
  container.addEventListener("dragover", e =>{
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy" 
    console.log("drag over")
  
  })


  container.addEventListener("drop", e =>{
    console.log("drop")
    const id_parrafo = e.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    container.appendChild(parrafo);
  
  })
})