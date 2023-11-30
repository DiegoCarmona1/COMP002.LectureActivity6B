function buttonClick() {
    console.log("button was clicked");
    button.removeEventListener("click", buttonClick);
}
 let button = document.querySelector("button");
 button.addEventListener("click", buttonClick);
let link = document.querySelector("a");
link.addEventListener("click", event => {
    event.preventDefault();
    alert("No DIstractions! Im Coding!");
});