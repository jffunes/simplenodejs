/*
Formas de integrar un Script a HTML
1) Archivo Externo: <script src="js/archivo.js"></script>
2) Bloque Interno: <script></script>
3) Atributo HTML: onclick, onchange, onblur...
*/

window.onload = function() {
  persona = {
    nombre: "Martin",
    edad: 40,
    peso: 95,
    altura: 1.82,
    comidas_preferidas: ["milanga", "pizza", "zapallito"],
    quejarse: function() {
      alert("uy! que pesado estoy");
    }
  };

  perro = {
    nombre: "Fido",
    tipo: "Caniche",
    peso: 20,
    ladra: function() {
      if (this.peso > 30) {
        alert("wof wof");
      } else {
        alert("guau guau");
      }
    },
    hacer_dieta: function() {
      this.peso = this.peso - 1;
    }
  };
};

texto =
  '[{"nombre":"Martín","edad":40,"peso":95,"altura":1.82,"comidas_preferidas":["milanga","pizza","zapallito relleno"]},{"nombre":"Joel","edad":30,"peso":95,"altura":1.82,"comidas_preferidas":["arepas","tequeño"]},{"nombre":"Jose","edad":31,"peso":80,"altura":1.72,"comidas_preferidas":["asado","repas","pastas"]}]';
los_pibes = JSON.parse(texto);
