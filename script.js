var typed = new Typed(".auto-type", {
    strings:["Programmer", "Frontend Developer","Designer",],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var menu = document.getElementById("menu");
menu.onclick = function(){
    menu.classList.toggle("openmenu")
}