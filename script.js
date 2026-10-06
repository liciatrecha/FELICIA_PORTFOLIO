const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
