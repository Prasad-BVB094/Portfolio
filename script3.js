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
        } else {
            // If it's a link to another page, set the active class
            setActiveLink(); // Call the function to set the active link
        }
    });
});

// Collapsible functionality for questions
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");
    
    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            // Toggle the display of the answer
            answer.classList.toggle('active'); // Use a class to manage visibility

            // Toggle the active class on the question itself
            this.classList.toggle('active'); // Add this line to toggle the active class on the question

            // Hide all other answers and remove active class from other questions
            document.querySelectorAll('.answer').forEach(ans => {
                if (ans !== answer) {
                    ans.classList.remove('active'); // Hide other answers
                    // Also remove the active class from the corresponding question
                    ans.previousElementSibling.classList.remove('active'); // Remove active class from the question
                }
            });
        });
    });

    // Set the active link on page load
    setActiveLink(); // Call the function to set the active link when the page loads
});