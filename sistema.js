var w = document.querySelector(".constant");
var tituloName = "Pressione o botão ou a tecla enter para iniciar";

console.log(tituloName);

var animation = true;

function start() {
  console.log("começamdo animação");
  if (animation == true) {
    animation = false;
    console.log(animation);
    let titulo = document.querySelector(".titulo");

    let tituloArray = tituloName.split("");
    console.log(tituloArray);
    titulo.innerHTML = "";

    tituloArray.forEach((letra, i) => {
      setTimeout(() => {
        titulo.innerHTML += letra;
        if (titulo.innerHTML == tituloName) {
          animation = true;
        }
      }, 75 * i);
    });
  }
  console.log(animation);
}

//botão Enter

document.addEventListener("keypress", function (i) {
  if (i.key === "Enter") {
    const btm = document.querySelector(".botao");
    btm.click();
  }
});
