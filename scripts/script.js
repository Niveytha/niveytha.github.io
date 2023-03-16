let container = document.getElementById("container");

const texts = container.getElementsByTagName("p");
const buttons = container.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    document.body.style.setProperty(
      "--drift",
      Math.floor(Math.random() * 400) - 200 + "px"
    );
    button.classList.toggle("active");
    setTimeout(() => {
      button.classList.toggle("active");
    }, 2000);
  });
}

function splitText(words) {
  for (let word of words) {
    let newword = word.textContent.split(" ");
    word.textContent = "";
    for (let i = 0; i < newword.length; i++) {
      let newWords = newword[i].split("");
      let wordwrap = document.createElement("span");
      wordwrap.classList.add("word-" + i, "word");
      wordwrap.setAttribute("data-word", newword[i]);
      let letters = newword[i].split("");
      let j = 0;
      for (let letter of letters) {
        j++;
        wordwrap.innerHTML +=
          '<span style="--char-index:' +
          j +
          '" data-char="' +
          letter +
          '">' +
          letter +
          "</span>";
      }
      word.appendChild(wordwrap);
    }
  }
  document.body.classList.add("loaded");
}

function addSVG(buttons) {
  let i = 0;
  for (let button of buttons) {
    i++;
    button.innerHTML += "<span class='overlay'></span>";
  }
}

splitText(texts);
splitText(buttons);
addSVG(buttons);

var pointerX = 0;
var pointerY = 0;
var width = window.innerWidth / 2;
var height = window.innerHeight / 2;
var body = document.body;
var light = document.getElementById("light");

window.addEventListener(
  "resize",
  function (event) {
    width = window.innerWidth / 2;
    height = window.innerHeight / 2;
  },
  true
);

document.onmousemove = function (event) {
  pointerX = ((width - event.pageX) * -1) / width;
  pointerY = ((height - event.pageY) * -1) / height;
  body.style.setProperty("--x", pointerX);
  body.style.setProperty("--y", pointerY);
  body.style.setProperty("--total", Math.abs(pointerX) + Math.abs(pointerY));
};
