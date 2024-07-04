document.addEventListener('DOMContentLoaded', () => {
    const roles = [
        'Director Creativo',
        'Editor de Videos',
        'Content Manager',
        'Creative Editor',
        'Digital Marketing'
    ];
    
    const dynamicText = document.querySelector('.dynamic-text');
    let index = 0;
    let charIndex = 0;
    let currentRole = roles[index];
    let isDeleting = false;
    
    function type() {
        if (isDeleting) {
            if (charIndex > 0) {
                dynamicText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 100);
            } else {
                isDeleting = false;
                index = (index + 1) % roles.length;
                currentRole = roles[index];
                setTimeout(type, 500);
            }
        } else {
            if (charIndex < currentRole.length) {
                dynamicText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(type, 100);
            } else {
                isDeleting = true;
                setTimeout(type, 1500);
            }
        }
    }
    
    type();
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// const $form = document.querySelector('#form')

// $form.addEventListener('submit', handleSubmit)

// async function handleSubmit(event) {
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.metod,
//         body: form,
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     if(response.ok) {
//         this.reset()
//         alert('Gracias por contactarme. Te voy a estar comunicando a la brevedad!')
//     }
// }