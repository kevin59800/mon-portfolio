// 1. EFFET DE RÉVÉLATION AU DÉFILEMENT (Scroll Reveal)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// 2. EFFET TYPEWRITER (Machine à écrire)
const textElement = document.getElementById('typewriter');
if (textElement) {
    const text = textElement.innerHTML;
    textElement.innerHTML = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    window.addEventListener('load', typeWriter);
}

// 3. GESTION DES MODALES (CV et Vidéo)
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('player');
    if (modal) modal.style.display = 'none';
    if (video) video.pause();
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        const video = document.getElementById('player');
        if (video) video.pause();
    }
}
