// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated Typing Effect for Intro Section
const typingText = "Crafting the Web with HTML, CSS & JavaScript";
let i = 0;

function typeWriter() {
    if (i < typingText.length) {
        document.querySelector('.intro h2').textContent += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function () {
    typeWriter();
};

// Sticky Navigation Background Change on Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#111';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Fade-in Effect on Scroll
const faders = document.querySelectorAll('.feature');
const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
