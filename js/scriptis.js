function calcNota() {
    var media = 7;
    var elementoResultado = document.getElementById("resultado");
    var notaPri = Number(document.getElementById("primeiro").value);
    var notaSeg = Number(document.getElementById("segundo").value);
    var notaTer = Number(document.getElementById("terceiro").value);
    var notaQuar = Number(document.getElementById("quarto").value);
  
    var notaFinal = (notaPri + notaSeg + notaTer + notaQuar) / 4;
  
    if (notaFinal == 7 || notaFinal > 7) {
      elementoResultado.innerHTML = "Isso aí, sua média final é " + notaFinal;
    } else {
      elementoResultado.innerHTML =
        "Infelizmente não foi dessa vez, sua média final é " + notaFinal;
    }
  }
  
  //Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
  