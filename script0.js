// import Lista from "./net.json" assert { type: "json" };
import { add_estrutura, openAll } from "./Estrutura_scroll.js";
import Mouse from './Mouse.js'


fetch('./net.json')
.then(e=>e.json())
.then(Lista=>{
    // console.log(e)

        
    
    let { data } = Lista;

    add_estrutura(data);

    btn_open_all.onclick = () => openAll();

})