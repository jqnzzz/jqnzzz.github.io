console.log("Muy buenas");
console.log("ancho:" + window.innerWidth)
let par;
par = document.getElementById("parrafito");
if (window.innerWidth < 700) {
    par.innerHTML = "Menor a 700 px";
}
else {
    par.innerHTML = "Mayor o igual a 700 px";
}
let captura;
function setup() {
    createCanvas(800, 600)
    noCursor();
    captura = createCapture(VIDEO);
    captura.hide();
}

function draw() {
    background(220,0,0)
    image(captura, 0, 0, 300, 300);
    ellipse(mouseX, mouseY, 100, 100);
}