 const d = document;
export function btnCheck(btn,li) {

const $btn = d.querySelector(btn);

d.addEventListener("click",(e)=>{
  
  if(e.target.matches($btn)){
 const $li = d.querySelector(li);
    $li.ClassList.add("text-decoration-line-through")
    
    
  }
})
    
}