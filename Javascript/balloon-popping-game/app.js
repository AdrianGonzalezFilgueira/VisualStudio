// Tu código aquí
let pop = 0;
let balloons = document.querySelectorAll("div.balloon");
const totalBalloons = balloons.length


balloons.forEach((balloon) => {
    balloon.addEventListener("mouseover", popBalloon)
})


function popBalloon(e) {
    e.target.style.backgroundColor = "#ededed";
    e.target.textContent = "POP!";
    pop++;

    e.target.removeEventListener("mouseover", popBalloon)
    checkGameEnd()
}


function checkGameEnd() {

    if (pop != totalBalloons) {
        return
    }

    let gallery = document.querySelector("#balloon-gallery");
    let message = document.querySelector("#yay-no-balloons");
    gallery.innerHTML = "";
    message.style.display = "block";
}
