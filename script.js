const sideNav = document.querySelector(".sideNav")
const overlay = document.querySelector(".overlay")
const ham = document.querySelector(".ham")
const menuX = document.querySelector(".menuX")
const menuItems = document.querySelectorAll(".menuLink")

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHamburger)
})

ham.addEventListener("click", toggleHamburger)
menuX.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function toggleHamburger() {
    overlay.classList.toggle("showOverlay")
    sideNav.classList.toggle("showNav")
}

function myFunction() {
    document.body.style.backgroundColor = "lightgray";
}
function myFunction1() {
    document.body.style.backgroundColor = "red";
}
function myFunction2() {
    document.body.style.backgroundColor = "orange";
}
function myFunction3() {
    document.body.style.backgroundColor = "yellow";
}
function myFunction4() {
    document.body.style.backgroundColor = "green";
}
function myFunction5() {
    document.body.style.backgroundColor = "blue";
}
function myFunction6() {
    document.body.style.backgroundColor = "purple";
}