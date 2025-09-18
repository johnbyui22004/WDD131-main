let selectElem = document.querySelector("select");
let logo = document.querySelector(".logo");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current === "dark") {
    // Change the body to dark
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    // Change the logo to the dark mode logo
    logo.src = "byui-logo_white.png"; 
  } else if (current === "light") {
    // Change the body to light
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    // Change the logo to the light mode logo
    logo.src = "byui-logo_blue.webp"; 
  }
}