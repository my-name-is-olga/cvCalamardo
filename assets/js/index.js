let titulo = document.getElementById("titulo");
let encabezado = document.getElementById("encabezado");

console.dir(encabezado); //console.dir me permite ver los valores a manipular del DOM de la etiqueta.

titulo.innerHTML = "Carlos Alberto Calamardo El Hermoso";

titulo.onclick = function () {
  //   if (titulo.style.textDecoration === "underline") {
  //     titulo.style.textDecoration = null;
  //   } else if (titulo.style.textDecoration !== "underline") {
  //     titulo.style.textDecoration = "underline";
  //   }

  if (titulo.style.textDecoration === "underline") {
    titulo.style.textDecoration = null;
  } else {
    titulo.style.textDecoration = "underline";
  }
};

encabezado.onclick = function () {
  if (encabezado.style.backgroundColor === "white") {
    encabezado.style.backgroundColor = "yellow";
  } else {
    encabezado.style.backgroundColor = "white";
  }
};



/*  ------------JQUERY------------------------------------ */
$(document).ready(function () {
  $("i").click(function () {
    if ($(this).css("color") === "rgb(255, 255, 0)") {
      $("i").css("color", "rgb(255, 255, 255)");
    } else {
      $("i").css("color", "rgb(255, 255, 0)");
    }
  });
});
