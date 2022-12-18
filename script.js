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
        } else {
            document.getElementById("nav-header").style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
        }

// script for autotype hero
        let typed = new Typed("#auto-type",{
            strings: ["I am a web developer specialized in front-end development currently based in Davao."],
            typeSpeed: 30,
            loop: false
        })
// script for work xp button show details
// loads the the first job
window.onload = showEntrep()

function showEntrep() {
    
    document.getElementById("job-title").innerText = "Self-employed(Pizza Maker)"
    document.getElementById("year").innerText = "December 2020- MAY 2022"
    document.getElementById("job-description").innerHTML =
     `
    <li>
        Sourced initial funding to get business up and running while planning initial
        structure and making strategic first hires.
    </li>
    <li>
        Evaluated suppliers to maintain cost controls and improve operations.
    </li>
    <li>
        Created and updated company digital presence to enhance product
        marketing through professional website and optimized social media
        profiles.
    </li>
    <li>
        Promoted positive customer experience through day-to-day supervision
        and management of Abel's Pizza Co.
    </li>
    <li>
        Managed purchasing, sales, marketing and operations efficiently.
    </li>`
}

function showFarmer() {
    
    document.getElementById("job-title").innerText = "Banana Farmer"
    document.getElementById("year").innerText = "October 2019 - May 2020"
    document.getElementById("job-description").innerHTML = 
    `
    <li>
        Applies the optimal amount of fertilizers every week.
    </li>
    <li>
        Inspects for banana diseases and rehabilitate sick bananas.
    </li>
    <li>
        Maintains the population of the suckers.
    </li>`
}

function showTech() {
    
    document.getElementById("job-title").innerText = "IT Technician"
    document.getElementById("year").innerText = "April 2017 - December 2018"
    document.getElementById("job-description").innerHTML = 
    `
    <li>
        Maintained officed PCs, network and mobile devices.
    </li>
    <li>
        Refurbished PC systems and peripherals such as monitors, networking
        equipment, printers, and more.
    </li>
    <li>
        Configured systems according to prescribed software and hardware
        frameworks.
    </li>
    <li>
        Patiently walked individuals through basic troubleshooting tasks.
    </li>
    <li>
        Managed system-wide operating system and software deployments as
        well as related software upgrade problems.
    </li>
    <li>
        Monitored systems in operation and quickly troubleshot errors.
    </li>
    <li>
        Tested and installed motherboards, processors and graphics cards on
        desktops and laptops for corporate staff.
    </li>
    <li>
        Explained technical information in clear terms to promote better
        understanding for non-technical users.
    </li>`
}

// script to make hamburger menu comeout & add 'active' class to the nav-bar and hamburger

function hamBurger() {

    burgerButtonOn = document.getElementById("hamburger");
    burgerMenuActive = document.getElementById("nav-bar");

    burgerMenuActive.classList.toggle("burger-menu-is-active");
    burgerButtonOn.classList.toggle("hamburger-is-active");

}