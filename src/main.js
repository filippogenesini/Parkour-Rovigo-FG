;(function () {

  var menu = document.getElementById("js-menu")
  var tendina = document.getElementById("js-tendina")
  var testoMenuAperto = "Chiudi"
  var testoMenuChiuso = "Menu"

  var dropdown = function () {
    console.log("ho cliccato")
    tendina.classList.toggle("nascosto")
    
    if (menu.text == testoMenuChiuso) {
      menu.text = testoMenuAperto
    } else {
      menu.text = testoMenuChiuso
    }
  }


  menu.addEventListener("click", dropdown)



})()
