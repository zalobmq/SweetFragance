//Scrip mapa de calor 
var heatmapInstance = h337.create({
    container: document.body, //Contenedor que toma de referencia.
    radius: 25                // Tamaño del puntero de marca de calor.
  });
  document.body.onmousemove = function(ev) {  //Toma el movimiento del rato.
    heatmapInstance.addData({
      x: ev.layerX,
      y: ev.layerY,
      value: 1
    });
  };
  