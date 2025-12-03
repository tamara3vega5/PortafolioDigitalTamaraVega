
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');

            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '1';
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const roleSpan = document.getElementById("role");

    const roles = [
        "Frontend Developer",
        "Aprendiz Apasionada",
        "Solucionadora de Problemas"
    ];

    if (!roleSpan) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];

        if (!isDeleting && charIndex < currentRole.length) {
            roleSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 120);
        } else if (isDeleting && charIndex > 0) {
            roleSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 80);
        } else {
            isDeleting = !isDeleting;
            setTimeout(() => {
                if (!isDeleting) {
                    roleIndex = (roleIndex + 1) % roles.length;
                }
                setTimeout(type, 300);
            }, isDeleting ? 2000 : 1000);
        }
    }

    type();

});
