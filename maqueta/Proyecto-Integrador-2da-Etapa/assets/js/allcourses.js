const cursos= [
    {
        id:1,
        name: "FRONTEND BASICO",
        text: "HTML+CSS+JS",
        price: "$2500"
        
    },
    {
        id:2,
        name: "BACKEND BASICO",
        text: "Python+MySQL+JS.",
        price: "$2800"
    },
    {
        id:3,
        name: "FRAMEWORK",
        text: "Angular+Django",
        price: "$2000"
    }
    ]
    
    let card = document.getElementById ("card-template");
    
    cursos.map((curso) => {
        card.innerHTML += `
        <div class="col-lg-4 col-sm-4 mt-5">
              <div class="card card-color">
                <div class="card-body">
                  <div class="row">
                  <div class="col-6"> 
                  <h4 class="card-title">${curso.name}</h4> 
                  <h6 class="card-text">${curso.text}</h6> 
                </div>
                  <div class="col-6">
                  <a href="#" class="btn btn-secondary button-border">Comprar <br> Curso</a>
                  <button type="button" class="btn btn-outline-light button-border" style="margin-top: 0.3em;" disabled>${curso.price} 50% OFF</button>  
                </div>
                </div>
              </div>
            </div>
          </div>
        `;

    } )


    const cursos2= [
      {
          id:1,
          name: "BIBLIOTECAS",
          img: "../Imagenes/html-logo.png",
          text: "React+Boostrap"
      },
      {
          id:2,
          name: "BACKEND",
          img: "../Imagenes/Python-logo.png",
          text: "Java+MySQL+JS."
      },
      {
          id:3,
          name: "FRONTEND",
          img: "../Imagenes/Boostrap-logo.png",
          text: "HTML+CSS+Boostrap"
      }
      ]

    let card2 = document.getElementById ("card-template2");
    
    cursos2.map((x) => {
        card2.innerHTML += `
        <div class="col-lg-4 col-sm-4 mt-5">
              <div class="card card-color">
                <div class="card-body">
                  <div class="row">
                  <div class="col-6"> 
                  <h4 class="card-title">${x.name}</h4> 
                  <h6 class="card-text">${x.text}</h6> 
                </div>
                  <div class="col-6">
                  <a href="#" class="btn btn-secondary button-border">Comprar <br> Curso</a>
                  <button type="button" class="btn btn-outline-light button-border" style="margin-top: 0.3em;" disabled>$2500 50% OFF</button>  
                </div>
                </div>
              </div>
            </div>
          </div>
        `;

    } )

    