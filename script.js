let img_src = ["images/wizard.png", "images/mouse.png", "images/mouse2.jpg"];

i = 0;
j = 0;
let slider = document.getElementById("slider");

let timer;

let effect = "size";
function next() {
  i++;
  if (i >= img_src.length) i = 0;
  addEffect();
  setTimeout(change, 1000);
}
function previous() {
  i--;
  j++;
  if (j > img_src.length) {
    j = 1;
  }
  if (i < img_src.length) {
     i = img_src.length - j;
}
  addEffect();
  setTimeout(change, 1000);
}
function start() {
  stop();
  timer = setInterval(next, 2000);
}
function stop() {
  clearInterval(timer);
}

function addEffect() {
  slider.classList.add(effect);
}

function change() {
  slider.src = img_src[i];
  slider.classList.remove(effect);
}