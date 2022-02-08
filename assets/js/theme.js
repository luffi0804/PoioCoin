let tema1 = document.getElementById("themeLight");
let tema2 = document.getElementById("themeDark");

let temaUser = document.getElementById("theme");

const cambiarTema1 = () => {
  let tema1 = '<link href="./assets/css/style-light.css" rel="stylesheet" type="text/css" />';
  theme.innerHTML = tema1;
  localStorage.setItem("tema", tema1);
}

const cambiarTema2 = () => {
  let tema2 = '<link href="./assets/css/style-dark.css" rel="stylesheet" type="text/css" />';
  theme.innerHTML = tema2;
  localStorage.setItem("tema", tema2);
}


if (localStorage.getItem("tema")) {
  theme.innerHTML = localStorage.getItem("tema");
}

tema1.onclick = () => {
  cambiarTema1();
}

tema2.onclick = () => {
  cambiarTema2();
}