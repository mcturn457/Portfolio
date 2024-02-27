
const bodyWidth = document.body.clientWidth;

window.onload = function() {

    if(bodyWidth > 480){

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const pixel1 = document.getElementById("pixel");
        const pixel2 = document.getElementById('pixel2');
    
        let interval = null;
        let interval2 = null;
        
        let iteration = 0;
        let iteration2 = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            pixel1.innerText = pixel1.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return pixel1.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= pixel1.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 35);
    
    
        setTimeout(function() {
        
            clearInterval(interval2);
            
            interval2 = setInterval(() => {
                pixel2.innerText = pixel2.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration2) {
                    return pixel2.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
                
                if(iteration2 >= pixel2.dataset.value.length){ 
                clearInterval(interval2);
                }
                
                iteration2 += 1 / 3;
            }, 40);
            
        }, 1000);

    }

}


// select the favicon for dark or light mode
const faviconEl = document.querySelector('link[rel="icon"]')

// watch for changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener
function themeChange(event) {
    if (event.matches) {
        faviconEl.setAttribute('href', 'favicon-dark.png')
    } else {
        faviconEl.setAttribute('href', 'favicon-light.png')
    }
}


// Add active class to the current button (highlight it)
var header = document.getElementById("nav");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });

}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = [];
interval['pixel'] = null;
interval['pixel2'] = null;
interval['about'] = null;
interval['projects'] = null;
interval['footer'] = null;
interval['rights'] = null;
interval['nav1'] = null;
interval['nav2'] = null;
interval['nav3'] = null;


function randomDigits(event, str) {
    let iteration = 0;
    
    clearInterval(interval[str]);
    
    interval[str] = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval[str]);
        }
        
        iteration += 1 / 3;
    }, 20);
}


if(bodyWidth > 480){
    document.querySelector("#pixel").onmouseover = event => randomDigits(event, 'pixel')
    document.querySelector("#pixel2").onmouseover = event => randomDigits(event, 'pixel2')
    document.querySelector("#about-head").onmouseover = event => randomDigits(event, 'about')
    document.querySelector("#projects-head").onmouseover = event => randomDigits(event, 'projects')
    document.querySelector("#footer").onmouseover = event => randomDigits(event, 'footer')
    document.querySelector("#rights").onmouseover = event => randomDigits(event, 'rights')
    document.querySelector("#nav1").onmouseover = event => randomDigits(event, 'nav1')
    document.querySelector("#nav2").onmouseover = event => randomDigits(event, 'nav2')
    document.querySelector("#nav3").onmouseover = event => randomDigits(event, 'nav3')
}


// glow effect

const blob = document.getElementById("blob");

    if(bodyWidth > 480){
        window.onpointermove = event => { 
            const { clientX, clientY } = event;
            
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 2000, fill: "forwards" });
            }
    }


// show navbar

window.onscroll = function() {
var navbar = document.querySelector('.nav');
var bodyHeight = window.innerWidth;

if (window.scrollY > 500) {
    navbar.style.visibility = 'visible';
} else {
    navbar.style.visibility = 'hidden';
}
};

// show navbar highlight

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav a');

//     window.addEventListener('scroll', function() {
//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;

//             if (pageYOffset >= sectionTop - sectionHeight / 3) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').slice(1) === current) {
//                 link.classList.add('active');
//             }
//         });
//     });
// });


// color Switch

function colorSwitch() {
    var newColor = document.getElementById('color-input');
    var r = document.querySelector(':root');


    // var back_color = [255,255,255];
    // var text_color = '#000000';
    // var text_color = hexToRgb(newColor.value);


    // if (getContrastRatio(back_color, text_color) > 3) {
    //     back_color = '#000000';
    //     text_color = [255,255,255];
    // } else {
    //     back_color = [255,255,255];
    //     text_color = '#000000';
    // }

    // r.style.setProperty('--text-color', back_color);
    // r.style.setProperty('--background-color', back_color);
    r.style.setProperty('--primary-color', newColor.value);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
     ] : null;
}

const getLuminanace = (values) => {
    const rgb = values.map((v) => {
      const val = v / 255;
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
};
  
const getContrastRatio = (colorA, colorB) => {
    const lumA = getLuminanace(colorA);
    const lumB = getLuminanace(colorB);
  
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
};


// Animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// show color input

window.onload = function() {
    var colorInput = document.getElementById('color-input');
    var r = document.querySelector(':root');
    colorInput.value = getComputedStyle(r).getPropertyValue("--primary-color");
}