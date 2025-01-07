// Function to set the active link based on the current URL
const setActiveLink = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentUrl = window.location.href; // Get the current URL

    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === currentUrl) {
            link.classList.add('active'); // Add active class
        } else {
            link.classList.remove('active'); // Remove active class
        }
    });
};

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
        // Call the function to set the active link regardless of the link type
        setActiveLink();
    });
});

// Set the active link on page load
document.addEventListener("DOMContentLoaded", function() {
    setActiveLink(); // Call the function to set the active link when the page loads
});

// Optional: Set active link on hash change
window.addEventListener('hashchange', setActiveLink);
// Get the iframe and button elements
const pdfIframe = document.getElementById('pdf-iframe');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Function to toggle full-screen mode
fullscreenBtn.addEventListener('click', () => {
    if (pdfIframe.requestFullscreen) {
        pdfIframe.requestFullscreen();
    } else if (pdfIframe.mozRequestFullScreen) { // Firefox
        pdfIframe.mozRequestFullScreen();
    } else if (pdfIframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        pdfIframe.webkitRequestFullscreen();
    } else if (pdfIframe.msRequestFullscreen) { // IE/Edge
        pdfIframe.msRequestFullscreen();
    }
});

// Event listener to exit full-screen mode when pressing the Escape key
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        // Optional: You can add any additional logic here when exiting full-screen
    }
});