function add_estrutura(data) {

  let el = bloco_lista;

  // let estrutura = `<div>${data.name} - ${data.username} </div>  `;

  let estrutura = `
      <div class="bloco">
        <h6 class="topo"> <img src="./person.svg"> ${data.level == undefined ? 0 : data.level} - ${data.username} </h6>
        <div class="img"><img src='avatar.jpg'></div>
        <p>${data.name}</p>
        <small>${data.email}</small>
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

  if (data.children.length > 0) {
    let ul = document.createElement("ul");
    ul.style.display = "none";
  
    let img = new Image()
    img.className = "btn-open"
    img.src = "down.svg"
    img.style.width = "30px"
    img.onclick = (img) => down(img);
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
  
  if (u.style.display=='none') 
    u.style.removeProperty("display");
  else
    u.style.display = "none";
}

function openAll(){
  for(let i of document.querySelectorAll('ul')){
    i.removeAttribute('style')
  }
}


export { add_estrutura, organiza, down, openAll };