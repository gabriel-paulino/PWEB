const targets = Array.from(document.querySelectorAll('.js-scroll-trigger'));
const navbar = document.getElementById('mainNav');

//Smooth scrolling when clicking an anchor link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const closeResponsiveMenu = () => {
    let navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        navbar.classList.add('hide');
    }
}

const targetsFunctions = (element, e) => {
    closeResponsiveMenu();
}

targets.map(el => {
    el.addEventListener('click', (e) => targetsFunctions(el.hash, e))
});


function mOver(obj) {
    obj.src = "img/IE2.jpeg";
}

function mOut(obj) {
    obj.src = "img/IE1.jpeg";
}

function mClick(obj) {
    obj.src = "img/IE3.jpeg";
}