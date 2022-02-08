const API = "https://pure-woodland-29790.herokuapp.com/coins";


const getAPI = (url) => {

  return fetch(url)

    .then((response) => response.json())

    .then((datosJson) => {

      cardData(datosJson.data.coins);
      //console.log(datosJson.data.coins);
    })

    .catch((error) => {
      console.log("Error in the API", error);
    });
};


//esta variable esper que le lleguen los datos
const cardData = (data) => {
  //En esta variable cargamos los datos de la tarjeta
  let html = "";
  //Agrego nuestra moneda al principio
  html += '<tr>';
  html += `<th scope="row">1</th>`;
  html += `<td>PoioCoin</td>`;
  html += `<td>PIO</td>`;
  html += `<td><img src="./assets/img/logo-fondo2.png" width="30px"></td>`;
  html += `<td>$65,499.47</td>`;
  html += '</tr>';
  //Variable ch de character que guardara el personaje
  data.forEach((ch) => {
    html += '<tr>';
    html += `<th scope="row">${ch.rank + 1}</th>`;
    html += `<td>${ch.name}</td>`;
    html += `<td>${ch.symbol}</td>`;
    html += `<td><img src="${ch.iconUrl}" width="30px"></td>`;
    html += `<td>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ch.price)}</td>`;
    html += '</tr>';
  });
  document.getElementById("characters").innerHTML = html;
};


//Cuando se ejecuta se evnia la variable de la URL y la funcion la recibe
getAPI(API);