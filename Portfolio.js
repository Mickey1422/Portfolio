const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

document.addEventListener('click', function(e) {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');

    const texts = [
        'Frontend Developer',
        'Web Developer',
        'UI/UX Designer',
        'Freelancer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        let currentText = texts[textIndex];

        if (!deleting) {
            textElement.textContent =
                currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            textElement.textContent =
                currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, deleting ? 80 : 120);
    }

    typeEffect();
});