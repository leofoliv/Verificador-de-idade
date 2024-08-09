function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("ano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("sexo");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "Bebe.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "AdolescenteHomem.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "HomemAdulto.jpg");
      } else {
        img.setAttribute("src", "Idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "Bebe.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "AdolescenteMulher.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "MulherAdulta.jpg");
      } else {
        img.setAttribute("src", "Idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
