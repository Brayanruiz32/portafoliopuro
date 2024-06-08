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
            toggleButton.src="/moon.png";
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            header.classList.remove('light-mode');
            header.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            
            toggleButton.src= "/sun.png";
        }
    });
    
    // Función para obtener los proyectos de GitHub
    const getGitHubProjects = async () => {
        const username = 'Brayanruiz32'; // Cambia esto a tu nombre de usuario de GitHub
        const url = `https://api.github.com/users/${username}/repos?sort=created&per_page=6`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayProjects(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Función para mostrar los proyectos en la página
    const displayProjects = (projects) => {
        const projectsContainer = document.getElementById('projects');
        projects.forEach(project => {
            const date = new Date(project.updated_at);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-11, por eso se suma 1
            const day = String(date.getDate()).padStart(2, '0');
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <a href="${project.html_url}" target="_blank"><h3>${project.name}</h3>
                <p>${project.description || 'No description available'}</p></a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    };

    // Llama a la función para obtener y mostrar los proyectos
    getGitHubProjects();


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add("show")
            }else{
                entry.target.classList.remove("show")
            }
        })
    })

    const hidden = document.querySelectorAll(".hidden");

    hidden.forEach((el) => observer.observe(el))




    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add("mostrar")
            }else{
                entry.target.classList.remove("mostrar")
            }
        })
    })

    const escondido = document.querySelectorAll(".escondido");

    escondido.forEach((el) => observador.observe(el))









});
