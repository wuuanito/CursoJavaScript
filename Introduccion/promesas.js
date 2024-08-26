const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = false;

    if (exito) {
      resolve("La operacion tuvo exito");
    } else {
      reject("La operacion fracaso");
    }
  }, 4000);
});

promesa.then((mensaje)=>{

    alert(mensaje);
})
promesa.catch((mensaje)=>{alert(mensaje)});