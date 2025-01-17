// Function to show the selected section with a fade-in effect
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');

    // Hide all sections with a fade-out effect
    sections.forEach(section => {
        section.classList.remove('fade-in');
        section.classList.add('fade-out');
        setTimeout(() => {
            section.style.display = 'none';
        }, 300); // Matches the CSS transition duration
    });

    // Show the selected section with a fade-in effect
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.style.display = 'block';
            selectedSection.classList.remove('fade-out');
            selectedSection.classList.add('fade-in');
        }, 300); // Wait for fade-out to complete
    }
}

// JavaScript for gallery sliding effect
let currentSlide = 0;

function showSlide() {
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;
    const gallerySlides = document.querySelector('.gallery-slides');

    // Move the slides container to show the current slide
    gallerySlides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first image after the last one
}

// Start the sliding every 3 seconds
setInterval(showSlide, 3000);

// Initially show the first slide
showSlide();


// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Show the home section by default
    showSection('home');

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            const sectionId = link.getAttribute('data-section'); // Get section from data-section
            showSection(sectionId);
        });
    });
});
