const boton = document.querySelector("#btn")

boton.addEventListener("click", ()=>{
    alert("Click en el boton")



})
$("#btn-2").click(() => {
     $("#btn-2").click(console.log("estoy usando jquery"));
});