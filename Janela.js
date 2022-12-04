let Janela = {
  x: 0,
  y: 0,
  width: bloco_lista.offsetWidth,

  render(){
    bloco_lista.style.transform = `translateX(${this.x}px) translateY(${-this.y}px)`;
  },
};


window.addEventListener('mousemove',e=>{
  if (e.buttons == 1) {
    console.log('ok')
    let dx = e.movementX;
    let dy = -e.movementY;

    Janela.x += dx;
    Janela.y += dy;

    Janela.render();
  }
});

export default Janela;