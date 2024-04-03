
export function addtoList(list,btn,input){
  const d = document;
    const $list = d.querySelector(list),
    $btn = d.getElementById(btn),
    $input = d.getElementById(input);
//boton para crear li
    $btn.addEventListener("click",(e)=>{
      const inputText = $input.value.trim();
      if(inputText !== ''){
       const $li = d.createElement("li");
        $li.textContent = inputText;
     
      $list.appendChild($li);
           
       //boton para tachar lista
       const check = d.createElement("i");
       
      check.innerHTML = `<div class="done"><lord-icon  
       src="https://cdn.lordicon.com/cgzlioyf.json"
       trigger="click"
       stroke="bold"
       state="hover-loading"
       style="width:30px;height:30px">
   </lord-icon></div>`;
   $li.appendChild(check)     

   check.addEventListener("click",(e)=>{
  
    if(e.target){
      $li.classList.toggle("text-decoration-line-through")
      
      
    }
  })

  //boton para borrar lista
   const trash = d.createElement("i");
   trash.innerHTML = `<div><lord-icon 
   src="https://cdn.lordicon.com/drxwpfop.json"
   trigger="hover"
   stroke="bold"
   style="width:30px;height:30px">
</lord-icon></div>`


trash.addEventListener("click",(e)=>{
  
  if(e.target){

    Swal.fire({
      title: "¿estas seguro que deseas borrar?",
      text: "se borrara de la lista",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "borrar"
    }).then((result) => {
      if (result.isConfirmed) {
        $li.remove()
        Swal.fire({
          title: "¡borrado!",
          text: "se ha borrado de la lista c:",
          icon: "success"
        });
      }
    });
   
  }
})
$li.appendChild(trash)     


      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "añadido",
        showConfirmButton: false,
        timer: 800
      });
      
      $input.value = '';
                  
      }





      else{ Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "el campo esta vacio",
        footer: "Agrega una tarea para añadirla a la lista"
      });}
    })


    
}