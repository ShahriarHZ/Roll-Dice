function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = "ludu" + randomNumber + ".png";
    document.getElementById("dice").src = imageSource;
}
document.getElementById("btn").addEventListener("click", rollDice);
