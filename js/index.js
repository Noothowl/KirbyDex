
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
  
  
document.querySelector("#btn-register").addEventListener("click", ()=>{
    let name = document.querySelector("#WarriorName-txt").value;         //value is for value of "input"

    let description = tinymce.get("WarriorDescription-txt").getContent();//tinyme.get - g.etContent is for value of "tinymc"

    let legend = document.querySelector("#Legend-toggle-yes").checked;    //checked is for value of "radio button"

    let type = document.querySelector("#Type-select").value;

    console.log("RegisterIntentaste registrar a ", name,description,legend,type);

});
