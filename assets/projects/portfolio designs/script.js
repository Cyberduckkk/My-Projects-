var typed = new Typed(".auto-type", {
    strings:["Youtuber", "Freelancer","Photographer","Designer","Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var menu = document.getElementById("menu");
menu.onclick = function(){
    menu.classList.toggle("openmenu")
}