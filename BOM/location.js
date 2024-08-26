console.log(location.href);

console.log(location.host);

console.log(location.pathname);

console.log(location.protocol);

const cargarDocumento= ()=>{

    location.assign('https://google.com');

};

const Regresas = ()=>{
history.back();
}