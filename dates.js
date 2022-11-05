const now = new Date();
const miCumple = new Date (1997, 9 , 15);
const compareDate = now > miCumple
console.log(compareDate)

const diaCumpleaños = miCumple.getDay()
const mesCumpleaños = miCumple.getMonth()
const añoCumpleaños = miCumple.getFullYear()
