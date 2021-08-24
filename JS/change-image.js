let darkMode = document.querySelector("#active-dark-mode");
let imgName = document.querySelector("#icon-lamp");
let logo = document.querySelector("#logo-dark-mode");

darkMode.onclick = function () {

  if (imgName.src.match("off")) {
    imgName.src = "img/lampada-on.png";
    logo.src = "img/instagram-logo3.png"
  } else {
    imgName.src = "img/lampada-off.png";
    logo.src = "img/instagram-logo.png"
  }

};
