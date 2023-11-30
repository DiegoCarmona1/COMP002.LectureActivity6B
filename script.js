function buttonClick() {
    console.log("button was clicked");
    button.removeEventListener("click", buttonClick);
}
 let button = document.querySelector("button");
 button.addEventListener("click", buttonClick);
 