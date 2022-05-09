
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
        let tdElemento = document.createElement("td");
        let tdDescripcion = document.createElement("td");
        let tdAcciones = document.createElement("td");


        //Definir valores de los elementos *innerText valor interno
        tdNro.innerText = i+1;
        tdNombre.innerText = w.name;

        //Icons
        let type = document.createElement("i");
        if (w.type == "1"){
          //Water <i class="fa-solid fa-droplet"></i> 
          // Para pasarle al elemento type (js) para agregarle clases (html)
          type.classList.add("fa-solid","fa-droplet"); 
        }else if (w.type == "2"){
          //Fire <i class="fa-solid fa-fire"></i>
          type.classList.add("fa-solid","fa-fire");
        }else if (w.type == "3"){
          //Grass  <i class="fa-solid fa-leaf"></i>
          type.classList.add("fa-solid","fa-leaf");
        }else if (w.type == "4"){
          //Normal <i class="fa-regular fa-face-meh-blank"></i>
          type.classList.add("fa-regular","fa-face-meh-blank");
        }else if (w.type == "5"){
          //Duelist  <i class="fa-duotone fa-hand-back-fist"></i>
          type.classList.add("fa-solid","fa-hand-back-fist");
        }else if (w.type == "6"){
          //Cosmic <i class="fa-solid fa-star"></i> 
          type.classList.add("fa-solid","fa-star");
        }else if (w.type == "7"){
          //Undead <i class="fa-solid fa-ghost"></i>
          type.classList.add("fa-solid","fa-ghost");
        }else if (w.type == "8"){
          //mistic <i class="fa-solid fa-wand-magic-sparkles"></i>
          type.classList.add("fa-solid","fa-wand-magic-sparkles")
        }


        tdElemento.appendChild(type);
        //Agregar elemento dentro de otro: AppendChild
        //Definir texto innerText
        //definir Html innerHtml

        tdDescripcion.innerHTML = w.description
        //ToDo tdAcciones

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
  //Crea un arreglo --> en verdad es una "lista" porque es dinámica
  const warriors = [];

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
