function fetchData(){
    fetch("https://reqres.in/api/users")
    .then(response => {
        console.log(response);
        return response.json();
     })
    .then(usuario => {
        console.log(usuario); 
        console.log(usuario.data); 
     const html = usuario.data.map(user =>
      {  
        console.log(user);
        console.log(user.first_name +" - " + user.email);
         return `
         <div class="user">
         <p><img src="${user.avatar}" alt=" ${user.first_name}"/> </p>
         <p> Nombre: ${user.first_name}</p>
         <p> Email: ${user.email}</p>
         </div>           ` 
     }).join("");
     console.log(html);
     document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch(error =>{
        console.log("El error es: "+error);
    })
}

fetchData();