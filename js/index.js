
import { btnCheck } from "./modules/action.js";
import { addtoList } from "./modules/add-list.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    addtoList(".list","btn","input")
    btnCheck(".done",".li")
})