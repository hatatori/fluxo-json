import Lista from "./net.json" assert { type: "json" };
import { add_estrutura, openAll } from "./Estrutura.js";

let { data } = Lista;

add_estrutura(data);

btn_open_all.onclick = () => openAll();