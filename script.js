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

// Initialize the current slide index
let currentSlide = 0;

// Function to show the slide based on currentSlide index
function showSlide() {
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;
    const gallerySlides = document.querySelector('.gallery-slides');

    // Move the slides container to show the current slide
    gallerySlides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Make sure the currentSlide stays within the valid range
    currentSlide = (currentSlide + totalSlides) % totalSlides; // Loop back to the first image after the last one
}

// Function to move slides manually (next/previous)
function moveSlide(direction) {
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    // If the index goes out of range, loop back to the first/last image
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to the last image
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to the first image
    }

    showSlide(); // Update the displayed image
}

// Initially show the first slide
showSlide();

// Add event listeners for manual navigation
document.getElementById('prev').addEventListener('click', function() {
    moveSlide(-1); // Show previous image
});

document.getElementById('next').addEventListener('click', function() {
    moveSlide(1); // Show next image
});

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
