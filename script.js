// fakeload
const loader = document.querySelector('.loader');

    window.addEventListener('load', () => {
        // loader.style.display = 'none';
        loader.classList.add('loader--hidden');

        loader.addEventListener('transitionend', () => {
            document.body.removeChild('loader');
        })
    })

// script for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
        })
    })
})
// script for navigation bar hide scroll
let prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
                 
        let currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos) {
            document.getElementById("nav-header").style.top = "0";
            // turns off hide nav bar at 1024px
        } else if(window.screen.width > 1024) {
            document.getElementById("nav-header").style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
        }

// script for autotype hero
        let typed = new Typed("#auto-type",{
            strings: ["I am a web developer specialized in front-end development currently based in Davao."],
            typeSpeed: 60,
            loop: false
        })
// script for work xp button show details
// loads the the first job
window.onload = showDev()

function showDev() {
    
    document.getElementById("job-title").innerText = "Front-end Web Developer"
    document.getElementById("year").innerText = "2022 - Present"
    document.getElementById("job-description").innerHTML =
     `
    <li>
        Started my endevour as a self-taught web developer
    </li>
    <li>
        Volunteered to create a website for Lupon Kagan Islamic Welfare Association Inc.
        using HTML, CSS, and JS
    </li>`
}


function showEntrep() {
    
    document.getElementById("job-title").innerText = "Self-employed(Pizza Maker)"
    document.getElementById("year").innerText = "2020 - 2022"
    document.getElementById("job-description").innerHTML =
     `
    <li>
        Baked Neapolitan Pizza
    </li>
    <li>
        Created and updated company digital presence to enhance product
        marketing through professional website and optimized social media
        profiles.
    </li>
    <li>
        Managed purchasing, sales, marketing and operations efficiently.
    </li>`
}

function showFarmer() {
    
    document.getElementById("job-title").innerText = "Banana Farmer"
    document.getElementById("year").innerText = "2019 - 2020"
    document.getElementById("job-description").innerHTML = 
    `
    <li>
        Applies the optimal amount of fertilizers every week
    </li>
    <li>
        Inspects for banana diseases and rehabilitate sick bananas
    </li>`
}

function showTech() {
    
    document.getElementById("job-title").innerText = "IT Technician"
    document.getElementById("year").innerText = "2017 - 2018"
    document.getElementById("job-description").innerHTML = 
    `
    <li>
        Patiently walked individuals through basic troubleshooting tasks
    </li>
    <li>
        Managed system-wide operating system and software deployments as
        well as related software upgrade problems
    </li>`
}

// script to make hamburger menu comeout & add 'active' class to the nav-bar and hamburger

function hamBurger() {

    burgerButtonOn = document.getElementById("hamburger");
    burgerMenuActive = document.getElementById("nav-bar");

    burgerMenuActive.classList.toggle("burger-menu-is-active");
    burgerButtonOn.classList.toggle("hamburger-is-active");

    // removes the burger when you click a navlink
    let home = document.getElementById('home');
    let about = document.getElementById('about');
    let xp = document.getElementById('xp');
    let cont = document.getElementById('cont');
    home.addEventListener('click', hideBurger);
    about.addEventListener('click', hideBurger);
    xp.addEventListener('click', hideBurger);
    cont.addEventListener('click', hideBurger);

    function hideBurger() {
        burgerMenuActive.classList.remove("burger-menu-is-active");
        burgerButtonOn.classList.remove("hamburger-is-active");
    }
}

