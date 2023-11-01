// --------- En esta funcion declarada se ingresaran los datos de los diferentes elementos que iremos utilizando para darles el evento a realiza -------
function eventHandler() {
  // ------ En este codigo se declara las variables con el nombre del elemento a seleccionar, lo llamamos por su ID (identificador unico) y
  //le añadimos el evento que servira para ejecutar la funcion con el nombre dado a la función -------
  let hamburguesa = document.getElementById("hamburguesa");
  hamburguesa.addEventListener("click", showMenu);
  let cierra = document.getElementById("btnCerrar");
  cierra.addEventListener("click", hideMenu);

  // ----- Aqui se hace el llamado al boton scrol para agregarle el evento scroll top, que aparecera en la pagina siempre y cuando el usuario
  // haya superado el limite mayor a 20 ---------.
  let boton = document.getElementById("btn-scroll");
  boton.addEventListener("click", botonTop);

  // ----- Aqui se realiza el llamado de las etiquetas del formulario por su ID o CLASSNAME para poder agergarles el evento a ejecutar con una funcion -------
  let nombre = document.getElementById("name");
  nombre.addEventListener("change", cambiaNombre);

  //------ Aqui llamamos a la eiqueta por su ID y le agregamos el evento que se ejecutara en una funcion ---------------------
  let telefono = document.getElementById("phone");
  telefono.addEventListener("change", maxiNumero);

  //---- Adquirimos al input submit por su ID y le agregamos el evento y el nombre de la funcion a realizarse para prevenir el envio del formulario--------
  let submit = document.getElementById("form");
  submit.addEventListener("submit", evitaEnvio);
}

// **********************************************************************************************************************************
// ***************************************** FUNCIONES DEL FORMULARIO ***************************************************************
// **********************************************************************************************************************************

//----- En esta funcion tomamos el valor del input y de acuerdo a la cantidad de numeros ingresados(ya sea mayor a 9 o menor de 10) verificaara si esta correcto
// y pintara el background de color verde, y si no cumple con los condiciones se tornara de color rojo y saldra un alert de error---.
function maxiNumero() {
  let number = document.getElementById("phone").value;
  if (number.length >= 9 && number.length <= 10) {
    document.getElementById("phone").style.backgroundColor = "#f7f2dc";
  } else {
    document.getElementById("phone").style.backgroundColor = "red";
  }
}

//------ En esta funcion tomammos la primera letra y lo convertimos a mayusacula, despues cortamos el string desde el primer lugar, es decir Toma lo restante del string
// y lo concatenamos con la primera letra (que ahora sera en mayuscula) y remplazamos los campos vacios.
function cambiaNombre() {
  let nameOriginal = document.getElementById("name").value;
  let firstLetter = nameOriginal.charAt(0).toUpperCase();

  let resto = nameOriginal.slice(1);
  let mayuscula = firstLetter + resto;
  document.getElementById("name").value = mayuscula.replaceAll(" ", "");
}

// --- En esta funcion se le da el parametro del evento y se le da la instruccion de que no envie el formulario.
function evitaEnvio(e) {
  e.preventDefault();
  mensajeError();
  clearForm();
}
//------ Aqui se se llama cada input por su Id y se le da una condicion, si se cumple saldra un mensaje de error y no enviara el formulario ---------.
function mensajeError() {
  let nombreError = document.getElementById("name");
  let correo = document.getElementById("email");
  let telefono = document.getElementById("phone");

  if (nombreError.value.length < 1 || nombreError.value.length == "") {
    document.getElementById("error__name").innerHTML = "Ingrese nombre";
  } else {
    document.getElementById("error__name").innerHTML = "";
  }
  if (correo.value.length < 1 || correo.value.length == "") {
    document.getElementById("error__email").innerHTML =
      "Ingrese correo electronico";
  } else {
    document.getElementById("error__email").innerHTML = "";
  }

  if (telefono.value.length < 1 || telefono.value.length == "") {
    document.getElementById("error__phone").innerHTML = "Ingrese telefono";
  } else {
    document.getElementById("error__phone").innerHTML = "";
  }
}
//------ Aqui se crea la funcion de borrar los datos del formulario una vez presionado el boton de envio ----------------
function clearForm() {
  let form = document.getElementById("form");
  form.reset();
}

// **********************************************************************************************************************************
// ***************************************** FUNCIONES DE BARRA DE NAVEGACION EJECUTADA EN 600PX ************************************
// **********************************************************************************************************************************
//-- En esta funcion se llama al elemento por su id (identificador unico) y accedemos al estilo con el cual se le signara el tamaño de ancho
//del nav para que se ejecute el tamaño de pantallas pequeñas -----
function showMenu() {
  document.getElementById("navCerrar").style.width = "60%";
}

//----- En esta funcion se realiza la misma operacion que la de la parte de arriba, pero esta vez se le asigna el tamaño a reducir y desaparecera
//cuando se pulse el boton de cerrar el nav  --------
function hideMenu() {
  document.getElementById("navCerrar").style.width = "0";
}

// **********************************************************************************************************************************
// ***************************************** FUNCIONES DEL BOTON DE SCROLL **********************************************************
// **********************************************************************************************************************************
//-- En esta funcion botonTop se realiza los procedimientos para poder realizar el scroll top y nos regrese al nav de la pagina web.
function botonTop() {
  document.body.scrollTop = 0; // sirve para el scroll en safari
  document.documentElement.scrollTop = 0; // sirve para el scroll en firefox,chrome, etc.
}

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    boton = document.getElementById("btn-scroll").style.display = "block";
  } else {
    boton = document.getElementById("btn-scroll").style.display = "none";
  }
}
window.onload = eventHandler;
window.onscroll = scrollFunction;

// **********************************************************************************************************************************
// ************************************************* FUNCIONES DEL CARRUSEL *********************************************************
// **********************************************************************************************************************************

// carrusel;
let carruselGrande = document.querySelector(".grande");
let punto = document.querySelectorAll(".li__punto__carrusel");

punto.forEach((cadaPunto, i) => {
  // Asignamos un CLICK a cadaPunto
  punto[i].addEventListener("click", () => {
    // Guardar la posición de ese PUNTO
    let posicion = i;
    // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -33.3;

    // MOVEMOS el grand
    carruselGrande.style.transform = `translateX(${operacion}%)`;

    // Recorremos TODOS los punto
    punto.forEach((cadaPunto, i) => {
      // Quitamos la clase ACTIVO a TODOS los punto
      punto[i].classList.remove("activo");
    });
    // Añadir la clase activo en el punto que hemos hecho CLICK
    punto[i].classList.add("activo");
  });
});

//----- Aqui se declara una variable de arreglo de objectos de recetas el cual cotendrán la informacion de cada receta ---------------
let recipes = [
  {
    id: "fisrt-recipe-r1",
    title: "ESPAGUETIS DE CALABACÍN",
    description: "Una opción más veggie y sana de comer pasta que de costumbre",
    ingredientes: [
      { 1: " 4 huevos" },
      { 2: " 2 calabacines" },
      { 3: " 1 cebolla morada" },
      { 4: " 1 diente de ajo" },
      { 5: " pimienta y sal" },
    ],
    preparacion:
      "Escalda las espirales de calabacín en agua hirviendo con sal durante 2 minutos. Escúrrelas y sumérgelas rápidamente en un bol con agua muy fría. Escúrrelas de nuevo y reserva. Añade las espirales de calabacín, salpimienta y saltea unos instantes. Agrega la mitad del cebollino picado.Con ayuda de un aro de emplatar, reparte los espaguetis de calabacín en los platos formando un nido. Espolvorea con el cebollino picado.",
    imagen: "img/imagenes-recetas/pasta-calabacin.jpg",
  },
  {
    id: "second-recipe-r2",
    title: "ENSALADA CON NARANJA Y PISTACHO",
    description:
      "Esta ensalada con naranja y pistachos, estos aportan vitamina, minerales y proteínas.",
    ingredientes: [
      { 1: " 2 naranjas" },
      { 2: " 50 gramos de pistacho" },
      { 3: " 50 gramos rucula" },
      { 4: " 5 chrds de aceite de oliva" },
      { 5: " sal al gusto" },
    ],
    preparacion:
      "Corta una naranja y media en gajos y retira la piel. Exprime la mitad restante para extraer el zumo. Pela y pica los pistachos. Prepara la vinagreta mezclando cuatro cucharadas de aceite con el vinagre, dos cucharadas de zumo de naranja, una pizca de sal y dos cucharadas de cebollino picado. Reparte los ingredientes en los platos y aliña con la vinagreta.",
    imagen: "img/imagenes-recetas/ensalada-naranja.jpg",
  },
  {
    id: "second-recipe-r3",
    title: "ENSALADA SALUDABLE DE AGUACATE",
    description:
      "son ideales porque mejoran la salud, porque las últimas aportan vitamina C, Su potasio ayuda a reducir la presión arterial.",
    ingredientes: [
      { 1: " 16 tomastes cherry" },
      { 2: " 1 aguacate" },
      { 3: " 1 dátil" },
      { 4: " 1 naranja" },
      { 5: " pimienta negra molida" },
    ],
    preparacion:
      " Exprime la naranja y mezcla su zumo, el aceite de oliva, el dátil sin semilla y un pellizquito de pimienta negra recién molida en la batidora.Pela el aguacate, retírale el hueso y corta su pulpa en cubitos de unos 2 cm.Corta los tomates cherry en mitades.Decora la ensalada,acompáñala de la vinagreta de naranja con semillas de amapola.",
    imagen: "img/imagenes-recetas/ensalada-avocado.jpg",
  },
  {
    id: "second-recipe-r4",
    title: "CREMA DE ZANAHORIA",
    description:
      "las zanahorias son ricas en vitaminas (C, E, B3, B6, B1, B2); carotenos, retinol y ácido fólico. ",
    ingredientes: [
      { 1: " 3 zanahorias" },
      { 2: " 1 cebolla" },
      { 3: " 60gr de mantequilla" },
      { 4: " 1 cucharada de harina" },
      { 5: " 200ml de caldo de pollo" },
    ],
    preparacion:
      "Pela la cebolla y las zanahorias, y trocéalas. Rehoga la primera en la mantequilla 2 min. Añade la zanahoria, espolvorea con la harina, vierte el caldo, salpimenta y cuece 10 min.Reparte la crema en 4 cuencos y sírvela decorada con los crujientes de queso y piñones.",
    imagen: "img/imagenes-recetas/crema-zanahoria.jpg",
  },
  {
    id: "second-recipe-r5",
    title: "ENSALADA DE GARBANZOS CON ATÚN",
    description:
      "Los garbanzos son una fuente de vitaminas del grupo B, sobre todo, aportan ácido fólico y vitamina A y un poco de vitamina C.",
    ingredientes: [
      { 1: " 200gr de garbanzos cocidos" },
      { 2: " 6 tomatos cherry" },
      { 3: " 1 lata de atún" },
      { 4: " 4 cucharadas de aceite de oliva" },
      { 5: " pimienta y sal" },
    ],
    preparacion:
      "Limpia la cebolleta y pícala. Lava los tomates y córtalos en gajos.Enjuaga los garbanzos y mézclalos con el maíz, los tomates, la cebolla y el atún escurrido. Sirve la ensalada de garbanzos aliñada con la vinagreta.",
    imagen: "img/imagenes-recetas/ensalada-garbanzos.jpg",
  },
  {
    id: "second-recipe-r6",
    title: "ARROZ VIUDO CON SETAS",
    description:
      "Este arroz viudo con setas es para ti.Tiene verduras, setas, especias... por lo que este plato de viudo no tiene mucho.",
    ingredientes: [
      { 1: " 200gr de arroz" },
      { 2: " 100gr  de setas" },
      { 3: " 1 pimiento rojo" },
      { 4: " 1/2 cebolla" },
      { 5: " 1 brocoli" },
    ],
    preparacion:
      "Pela las cebollas y los ajos y pícalos. Lava los pimientos, límpialos y córtalos en daditos. Limpia, lava y separa en ramitos del brocoli. Limpia y lava las setas.Incorpora el arroz, salpimienta y tuéstalo durante 2 minutos. Añade el brocoli y los guisantes.Cuece a fuego fuerte durante 6 minutos y luego durante 10 minutos a fuego suave. Deja reposar por 5 minutos y sirve.",
    imagen: "img/imagenes-recetas/arroz-viudo-con-setas.jpg",
  },
  {
    id: "second-recipe-r7",
    title: "BERENJENAS RELLENAS",
    description:
      "Una opción saludable para cenar deliciosa y fácil de hacer es esta receta con berenjenas rellenas de verduras de todos los colores que están de muerte.",
    ingredientes: [
      { 1: " 2 berenjenas" },
      { 2: " 1 pimiento rojo" },
      { 3: " 1 calabacin" },
      { 4: " 100ml de salsa de tomate" },
      { 5: " 4 huevos" },
    ],
    preparacion:
      "Despunta las berenjenas, lávalas y pártelas por la mitad a lo largo. Vacíalas y cuécelas 5 min al vapor. Luego, ponlas bocabajo para que suelten el exceso de líquido.Lava toda la verdura y córtala en dados.Agrega a continuación la berenjena y el calabacín y deja cocer por 10 minutos más. Hornéalas hasta que el huevo se cuaje y sírvelas enseguida.",
    imagen: "img/imagenes-recetas/berenjenas-rellenas.jpg",
  },
  {
    id: "second-recipe-r8",
    title: "PIZZA EXPRÉS DE PAN DE MOLDE",
    description:
      "Es la reina de las cenas en el sofá. Pero si te la preparas tú, seguro que es mucho más sana que una precocinada.",
    ingredientes: [
      { 1: " 4 rebanadas de pan" },
      { 2: " 150gr de tomate frito" },
      { 3: " 100gr de queso rallado" },
      { 4: " 1/2 calabacín" },
      { 5: " 8 rodajas de mozzarella" },
    ],
    preparacion:
      "Lava el calabacín y córtalo en láminas finas con una mandolina.las rebanadas Úntalas con el tomate y espolvoréalas con orégano. Reparte encima el queso rallado, el calabacín y la mozzarella.Hornéalas 7 minutos en el horno precalentado a 180° C, hasta que el queso se funda. Sirve con la albahaca y un hilo de aceite.",
    imagen: "img/imagenes-recetas/pizza-expres.jpg",
  },
];

// **********************************************************************************************************************************
// ****************************************** FUNCIONES OBTENIENDO INFORMACION DE RECETAS *******************************************
// **********************************************************************************************************************************

//---- Aqui se declara una variable en el cual se le asigna el llamado del contenedor por su ID, el que contedra  los contenedores con sus elementos del array de recetas.
let recetasContent = document.getElementById("recipesContainer");

//---- Aqui se crea la función recetas, el cual recorrera el array de objetos de recetas con un bucle y por cada objeto creara un contenedor en el cual contedra un titulo por cada descripción,el contexto, un listado
// con cada ingrediente y su respectiva imagen.

function recetas() {
  for (let i = 0; i < recipes.length; i++) {
    let recetaBox = document.createElement("div");
    recetaBox.className = "recetaBox";
    recetasContent.appendChild(recetaBox);

    let title = document.createElement("h2");
    title.textContent = recipes[i].title;
    title.className = "titulo__recipe";
    recetaBox.appendChild(title);

    let titleDescript = document.createElement("h3");
    let textoDescript = document.createElement("p");
    titleDescript.innerText = "Descripción";
    textoDescript.textContent = recipes[i].description;
    textoDescript.className = "content__recipe";
    recetaBox.appendChild(titleDescript);
    recetaBox.appendChild(textoDescript);

    // ----- aqui se crea el titulo de ingredientes y se hace un bucle para recorrer el array de objetos de ingredientes para luego crear un texto con el valor de cada objecto del array ingrecientes y colocarlos
    // dentro de la etiqueta lista el cual sera el hijo de una lista ordenada ---------.
    let titleIngre = document.createElement("h3");
    titleIngre.innerText = "Ingredientes";
    recetaBox.appendChild(titleIngre);
    let ol = document.createElement("ol");
    let ingre = recipes[i].ingredientes;
    for (let i = 0; i < ingre.length; i++) {
      let listIngre = document.createTextNode(Object.values(ingre[i]));
      let li = document.createElement("li");
      li.appendChild(listIngre);
      ol.appendChild(li);
      recetaBox.appendChild(ol);
    }

    let titlePrepa = document.createElement("h3");
    let prepararReceta = document.createElement("p");
    titlePrepa.innerText = "Preparación";
    prepararReceta.textContent = recipes[i].preparacion;
    prepararReceta.className = "content__recipe";
    recetaBox.appendChild(titlePrepa);
    recetaBox.appendChild(prepararReceta);

    let imagenRecipe = document.createElement("img");
    imagenRecipe.src = recipes[i].imagen;
    imagenRecipe.className = "img__recipe";
    recetaBox.appendChild(imagenRecipe);
  }
}

// -- En esta linea de codigo se hace el llamado de la función recetas ----.
recetas();
