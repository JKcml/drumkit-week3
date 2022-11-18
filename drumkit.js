let input = document.querySelector("body");

let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");

input.addEventListener('keypress', (e) => {
    if (e.key === "A" || e.key === "a") {
        boom.play();
    } else if (e.key === "S" || e.key === "s") {
        clap.play();
    } else if (e.key === "D" || e.key === "d") {
        hihat.play();
    } else if (e.key === "F" || e.key === "f") {
        kick.play();
    } else if (e.key === "G" || e.key === "g") {
        openhat.play();
    } else if (e.key === "H" || e.key === "h") {
        ride.play();
    } else if (e.key === "J" || e.key === "j") {
        snare.play();
    } else if (e.key === "K" || e.key === "k") {
        tink.play();
    } else if (e.key === "L" || e.key === "l") {
        tom.play();
    }
});
