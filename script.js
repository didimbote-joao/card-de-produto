function buttonMode() {
  const html = document.documentElement;

  html.classList.toggle("sinal")

  const img = document.querySelector("sofa img")
  if (html.classList.contains("sinal")) {
    img.setAttribute("src", "./assets/w-brand.png")
    img.setAttribute("alt", "Windows")
  }
  else{
    img.setAttribute("src", "./assets/image 2.png")
    img.setAttribute("alt", "Sofa Margarot ")
  }
}