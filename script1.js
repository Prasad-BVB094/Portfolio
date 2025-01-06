// Smooth scrolling when clicking navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
        }
    });
});

// Highlight active link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for navbar height
        const sectionHeight = section.offsetHeight; // Get the height of the section
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id'); // Get the ID of the section in view
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active'); // Add active class to the current section link
        }
    });
});