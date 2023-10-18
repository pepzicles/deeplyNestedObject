const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++){
    options[i].addEventListener("click", () => {
        for (let j = 0; j < options.length; j++) {
            if (options[j].classList.contains("selected")) {
                options[j].classList.remove("selected");
            }
        }

        options[i].classList.add("selected");
        for (let k = 0; k < options.length; k++) {
            options[k].classList.add("selectall");
        }

        let forVal = options[i].getAttribute("for");
        let selectInput = document.querySelector("#" + forVal);
        let getAtt = selectInput.getAttribute("type");

        if (getAtt == "checkbox") {
            selectInput.setAttribute("type", "radio");
        } else if (selectInput.checked == true) {
            options[i].classList.remove("selected");
            selectInput.setAttribute("type", "checkbox");
        }

        let array = [];
        for (let l = 0; l < options.length; l++) {
            if (options[l].classList.contains("selected")) {
                array.push(l);
            }
        }
        if (array.length == 0) {
            for (let m = 0; m < options.length; m++) {
                options[m].removeAttribute("class");
            }
        }
    });
}

var targetElement = document.getElementById("target-element");
var newDiv = document.createElement("p")
newDiv.style.maxWidth = 200;
newDiv.style.fontSize = 35;
targetElement.parentNode.insertBefore(newDiv, targetElement.nextSibling)

function changeState() {
    colors = ["rgb(163, 21, 21)", "rgb(48, 87, 26)", "rgb(5, 84, 71)", "rgb(15, 34, 112)", "rgb(67, 36, 92)", "rgb(105, 18, 90)", "rgb(107, 24, 50)"]
    words = ['conservative', 'backward', 'authoritarian', 'dictatorial', 'autocratic']
    newDiv.innerHTML = words[Math.floor(Math.random() * 3)];
    newDiv.style.backgroundColor = colors[Math.floor(Math.random() * 7)];
}

setInterval(changeState, 1000);








//ANIMATING FLIP CARDS
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card__inner");

  card.addEventListener("click", function (e) {
    card.classList.toggle("is-flipped");
  });
});
