let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


let Opne = document.querySelector(".ofcanva_opnes");
let link1 = document.querySelector(".top_menu_content li:nth-child(1)");
let link2 = document.querySelector(".top_menu_content li:nth-child(2)");
let link3 = document.querySelector(".top_menu_content li:nth-child(3)");
let link4 = document.querySelector(".top_menu_content li:nth-child(4)");
let link5 = document.querySelector(".top_menu_content li:nth-child(5)");
let link6 = document.querySelector(".top_menu_content li:nth-child(6)");
let link7 = document.querySelector(".top_menu_content li:nth-child(7)");
let Close = document.querySelector(".ofcanvas_closew");


Opne.addEventListener("click" , function(){
    link1.style.animation = "animationr 1s ease 0s 1 normal forwards";
    link2.style.animation = "animationr 1s ease 0.1s 1 normal forwards";
    link3.style.animation = "animationr 1s ease 0.2s 1 normal forwards";
    link4.style.animation = "animationr 1s ease 0.3s 1 normal forwards";
    link5.style.animation = "animationr 1s ease 0.4s 1 normal forwards";
    link6.style.animation = "animationr 1s ease 0.5s 1 normal forwards";
    link7.style.animation = "animationr 1s ease 0.6s 1 normal forwards";
})

Close.addEventListener("click" , function(){
    link1.style.animation = "";
    link2.style.animation = "";
    link3.style.animation = "";
    link4.style.animation = "";
    link5.style.animation = "";
    link6.style.animation = "";
    link7.style.animation = "";
})

