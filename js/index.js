
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
      //2 Recorrer lista de warriors
      for(let i=0; i<warriors.length; i++){
        //3 por cada warrior generar tr
        let tr = document.createElement("tr");     //dentro del parentesis puede ir cualquier elemento html
        //4 por cada atributo generar td
        let tdNro = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdElemento = document.createElement("td");
        let tdDescripcion = document.createElement("td");
        let tdAcciones = document.createElement("td");
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
