import Mouse from "./Mouse.js"
import Janela from "./Janela.js"
import Modal from './Modal.js'


function add_estrutura(data) {

  let el = bloco_lista;

  // let estrutura = `<div>${data.name} - ${data.username} </div>  `;

  let estrutura = `
    <div class="bloco">
      <div class="badge"><img src='imgs/${parseInt(Math.random() * 4 + 1)}.png'></div>
      <h6 class="topo"><img src="./imgs/person.svg"> ${data.id} </h6>
      <div class="img" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src='${data.photo}'></div>
      <p>${data.name}</p>
      <small data-bs-toggle="modal" data-bs-target="#exampleModal"><u>Mais detalhes</u></small>
    </div>
    `;

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.className = "tf-nc";
  span.innerHTML = estrutura;

  li.setAttribute("username", data.username);
  li.setAttribute("parent", data.indicatedBy.username);

  li.username = data.username;
  li.parent = data.indicatedBy.username;

  li.appendChild(span);
  el.appendChild(li);

  li.querySelector("small").onclick = () => Modal.render(data);
  li.querySelector(".img").onclick = () => Modal.render(data);

  

  if (data.children.length > 0) {
    let ul = document.createElement("ul");
    ul.style.display = "none";
  
    let img = new Image()
    img.className = "btn-open"
    img.src = "./imgs/down.svg"
    img.style.width = "30px"
    img.onmouseup = (img) => down(img);
    span.appendChild(img);
    li.appendChild(ul);

    
  }

  data.children.map((e) => {
    add_estrutura( e);
  });

  organiza(el);
}

function organiza(div) {
  for (let i = div.children.length; i >= 0; i--) {
    let el = div.children[i];
    if (el != undefined) {
      let parent_name = el.getAttribute("parent");
      let parent_element = div.querySelector(`[username=${parent_name}] > ul`);
      try {
        parent_element.appendChild(el);
      } catch (e) {}
    }
  }
}

function down(el){
  let u = el.target.parentElement.parentElement.querySelector("ul");

  if (u.style.display == "none") u.style.removeProperty("display");
  else u.style.display = "none";



  let x = el.target.parentElement.parentElement.offsetWidth;
  let card_width = 200
  console.log(el.target.parentElement.parentElement);
  console.log(el.target.parentElement.parentElement.offsetWidth);

  Janela.addX(x/2 - card_width);
  // Janela.addY(-500);
  // console.log(x)
  // console.log(u)
}

function openAll(){
  for(let i of document.querySelectorAll('ul')){
    i.removeAttribute('style')
  }
}

function str2html(str){
  div = document.createElement('div')
  div.innerHTML = str
  return str
}


export { add_estrutura, organiza, down, openAll };