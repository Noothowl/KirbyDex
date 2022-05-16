
tinymce.init({
    selector: 'textarea#WarriorDescription-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

//Crea un arreglo --> en verdad es una "lista" porque es dinámica
const warriors = [];
//Función normal se declara así: Funct = ()=>{}
//Funciión asociada a un botón se declara así
const deleteWarrior= function(){
  Swal.fire({
    title:'Desea eliminar al guerrero "'+warriors[this.nro].name+'" ?',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    confirmButtonText: 'Sí, elimínalo!',
    
  });
  console.log(this.nro);
};

  //Funciones se definen arriba
  //cargarTabla
  const cargarTabla = ()=>{
    // Generación dinámica
      //1 Ref a la tabla
      let tbody = document.querySelector("#tbody-table");
      //Eliminar la lista interna para evitar copias
      tbody.innerHTML = ""; //--> null inner elements

      //2 Recorrer lista de warriors
      for(let i=0; i<warriors.length; i++){
        let w = warriors[i]; // "W" va a ser el warrior en el index actual
        //3 por cada warrior generar tr
        let tr = document.createElement("tr");     //dentro del parentesis puede ir cualquier elemento html
        //4 por cada atributo generar td
        let tdNro = document.createElement("td");
        let tdNombre = document.createElement("td");
        if(w.legend){
          tdNombre.classList.add("text-warning");
          tdNombre.classList.add("bg-dark");
        }

        let tdElemento = document.createElement("td");
        let tdDescripcion = document.createElement("td");
        let tdAcciones = document.createElement("td");
        tdAcciones.classList.add("text-center");
        let btn = document.createElement("button"); //Crea elemento boton
        btn.classList.add("btn","btn-outline-danger"); //Agrega clases al elemento boton
        btn.innerText="Eliminar guerrero"; //añade texto al elemento boton
        btn.nro= i;
        btn.addEventListener("click", deleteWarrior);
        tdAcciones.appendChild(btn); //Agrega un elemento en otro (tdAcciones agrega dentro el btn)



        //Definir valores de los elementos *innerText valor interno
        tdNro.innerText = i+1;
        tdNombre.innerText = w.name;

        //Icons
        let type = document.createElement("i");
        if (w.type == "1"){
          //Water <i class="fa-solid fa-droplet"></i> 
          // Para pasarle al elemento type (js) para agregarle clases (html)
          type.classList.add("fa-lg","fa-solid","fa-droplet", "text-primary"); 
        }else if (w.type == "2"){
          //Fire <i class="fa-solid fa-fire"></i>
          type.classList.add("fa-lg","fa-solid","fa-fire", "text-danger");
        }else if (w.type == "3"){
          //Grass  <i class="fa-solid fa-leaf"></i>
          type.classList.add("fa-lg","fa-solid","fa-leaf", "text-success");
        }else if (w.type == "4"){
          //Normal <i class="fa-regular fa-face-meh-blank"></i>
          type.classList.add("fa-lg","fa-regular","fa-face-meh-blank", "text-secondary");
        }else if (w.type == "5"){
          //Duelist  <i class="fa-duotone fa-hand-back-fist"></i>
          type.classList.add("fa-lg","fa-solid","fa-hand-back-fist","text-dark");
        }else if (w.type == "6"){
          //Cosmic <i class="fa-solid fa-star"></i> 
          type.classList.add("fa-lg","fa-solid","fa-star", "text-warning");
        }else if (w.type == "7"){
          //Undead <i class="fa-solid fa-ghost"></i>
          type.classList.add("fa-lg","fa-solid","fa-ghost");
        }else if (w.type == "8"){
          //mistic <i class="fa-solid fa-wand-magic-sparkles"></i>
          type.classList.add("fa-lg","fa-solid","fa-wand-magic-sparkles", "text-info")
        }

        tdElemento.classList.add("text-center");
        tdElemento.appendChild(type);
        //Agregar elemento dentro de otro: AppendChild
        //Definir texto innerText
        //definir Html innerHtml

        tdDescripcion.innerHTML = w.description
      

        //5 agregar td a los tr     *appendChild para agregar elemento dentro de otro
        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdElemento);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdAcciones);
        //6 agregar tr a la tabla
        tbody.appendChild(tr);
      }


    
  };
  

document.querySelector("#btn-register").addEventListener("click", ()=>{
    let name = document.querySelector("#WarriorName-txt").value;         //value is for value of "input"

    let type = document.querySelector("#Type-select").value;

    let description = tinymce.get("WarriorDescription-txt").getContent();//tinyme.get - g.etContent is for value of "tinymc"

    let legend = document.querySelector("#Legend-toggle-yes").checked;    //checked is for value of "radio button"

    
    
    //Crea el objeto "warrior"
    let warrior= {};
    //Crea la propiedad de warrior
    warrior.name =name;
    warrior.description = description;
    warrior.legend= legend;
    warrior.type = type;
    //Añadir objeto a la lista
    warriors.push(warrior);
    //Cargar elemento en la tabla
    cargarTabla();

    //SweetAlert
    Swal.fire("Registro exitoso!","EL guerrero ingresado", "success");


});


//Clear btn function --> Esto jhace que se vacíe el formulario
document.querySelector("#btn-clear").addEventListener("click", ()=>{
  document.querySelector("#WarriorName-txt").value="";
  // document.querySelector("#WarriorDescription-txt").value="";
  tinymce.get("WarriorDescription-txt").setContent(""); //Solo para el tinymce
  document.querySelector("#Legend-toggle-no").checked = true;
  document.querySelector("#Type-select").value="1";

});