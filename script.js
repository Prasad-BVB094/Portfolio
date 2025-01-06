// Smooth scrolling when clicking navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        const href = link.getAttribute('href');

        // Check if the link is pointing to a section on the same page
        if (href.startsWith('#')) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = href.substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId); // Find the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
            }
        }
        // If it's a link to another page, do not prevent default
    });
});

// Highlight active link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for navbar height
        if (window.scrollY >= sectionTop) {
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
