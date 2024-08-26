const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["post1", "post2", "post3"];
      const error = false;
      if (error) {
        reject("Error al obtner los posts");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

fetchPosts().then((mensaje) => {
  console.log(mensaje);
}).catch((error)=>{
    console.log(error);
});
