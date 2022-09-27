let datosNasa = [];

function mostrarDatos(array) {
  let mostrarCosasEnHtml = "";

  for (let dato of array) {
    let informacion = dato.data;

    mostrarCosasEnHtml += `
           
        <div class="list-group-item">
                <div class="col cards">
                    <img src="${dato.links[0].href}" class="rounded img-thumbnail tamaño">
                </div>
                <div class="col text">
                    <h6 class="d-"> ${informacion[0].title} </h6>
                    <p class="overflow-auto prueba">${informacion[0].description}</p>
                </div>
                
            </div>`;
  }
  document.getElementById("contenedor").innerHTML = mostrarCosasEnHtml;
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnBuscar").addEventListener("click", () => {
    let valor = document.getElementById("inputBuscar").value;

    getJSONData(url + "search?q=" + valor).then(function (resultObj) {
      if (resultObj.status === "ok") {
        datosNasa = resultObj.data.collection.items;
        mostrarDatos(datosNasa);
      }
    });
  });
});
