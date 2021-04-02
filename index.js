const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".button");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += values[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber(){
    return Math.floor(Math.random()*values.length);
}