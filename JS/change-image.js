var img = document.getElementById("icon-lamp").src;
var imgOn = `img/lampada-on.png`;
var imgOff = `img/lampada-off.png`;
var acender = true;
var apagar = false;
var count = 0;

function status() {
  count++;

  console.log(count);

  if (count % 2 == 0) {
    return acender;
  } else {
    return apagar;
  }

}
console.log(count);

console.log(status());

function onOff() {
  if (status() != true) {
    document.getElementById("icon-lamp").src = imgOff;
    apagar = false;
  } else {
    document.getElementById("icon-lamp").src = imgOn;
  }
}

onOff();
