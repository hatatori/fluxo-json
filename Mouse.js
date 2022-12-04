

let Mouse = {
  px: 0,
  py: 0,
  pz: 1,

  render() {
    // bloco_lista.style.transform = `translateX(${this.px}px) translateY(${-this.py}px) scale(${this.pz})`;
    // bloco_lista.style.transform = `translateX(${this.px}px) translateY(${-this.py}px) scale(${this.pz})`;
    bloco_lista.scrollTo(Mouse.px, Mouse.py);
  },
};

// window.onwheel = function(e){
//     if(e.deltaY < 0){
//         Mouse.pz += 0.1
//     }else{
//         Mouse.pz -= 0.1;
//     }
// render();
// }

window.onmousemove=function(e){
    if(e.buttons == 1){
        let x = e.movementX
        let y = -e.movementY
        Mouse.px += x*-1;
        Mouse.py += y;
        Mouse.render()
    }
}

// window.onmouseup=function(){
//   let x = document.querySelectorAll(".bloco")[87].parentElement.offsetLeft;

//   Mouse.px = x 
//   Mouse.render()

//   console.log(document.querySelectorAll(".bloco")[87].parentElement.offsetLeft);
// }



// function render(){
//     bloco_lista.style.transform = `translateX(${Mouse.px}px) translateY(${-Mouse.py}px) scale(${Mouse.pz})`;
// }

// export {render}

export default Mouse