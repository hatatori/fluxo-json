let Mouse = {
    px: 0,
    py: 0,
    pz: 1,
}

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

        Mouse.px += x;
        Mouse.py += y;
        // window.scrollTo(-px, py);

        render()
    }
}

function render(){
    bloco_lista.style.transform = `translateX(${Mouse.px}px) translateY(${-Mouse.py}px) scale(${Mouse.pz})`;
}

export default Mouse