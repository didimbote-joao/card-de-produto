function viewSofa() {
  alert("Esta funcionando")
  const html = document.documentElement

  html.classList.toggle("sinal")

  alert("Mudanca de modo Esta funcionando")

  const img = document.querySelector("img")
  alert("Selecao da imagem Esta funcionando")
  if (html.classList.contains("sinal")) {
    alert("if Esta funcionando")
    img.setAttribute("src", "./assets/sofa.gif")
    img.setAttribute("alt", "sofa girando")
  } 
  // else {
  //   alert("Desativando o if Esta funcionando")
  //   img.setAttribute("src", "./assets/image 2.png")
  //   img.setAttribute("alt", "Sofa Margarot ")
  // }
}
