function buttonClick() {
    console.log("button was clicked");
}
 let button = document.querySelector("button");
 button.addEventListener("click", buttonClick);
 if (buttonClick() = 1) {
    button.removeEventListener("click", buttonClick)
 }