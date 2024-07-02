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
