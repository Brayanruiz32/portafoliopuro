// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    // Comprueba si hay una preferencia de tema guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        header.classList.add(savedTheme);
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            header.classList.remove('dark-mode');
            header.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            header.classList.remove('light-mode');
            header.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
