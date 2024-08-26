const conetenedor1 = document.getElementById("contenedor1");
console.log(conetenedor1);
console.log(conetenedor1.children);

const coleccionDivs = document.getElementsByTagName("div");
console.log(coleccionDivs);

const caja = document.querySelectorAll("#contenedor1 .caja");
console.log(caja);

caja.forEach((caja) => {
  console.log(caja);
});


const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja);