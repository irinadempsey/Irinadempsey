// Function to show the selected section with a fade-in effect
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');

    // Hide all sections with a fade-out effect
    sections.forEach(section => {
        section.classList.remove('fade-in');
        section.classList.add('fade-out');
        section.style.visibility = 'hidden'; // Hide the section but keep it in the layout
    });

    // Show the selected section with a fade-in effect
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.style.visibility = 'visible'; // Make the section visible
            selectedSection.classList.remove('fade-out');
            selectedSection.classList.add('fade-in');
        }, 500); // Wait for fade-out to complete (matching CSS transition time)
    }
}

// Add event listeners to navigation links when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show the home section by default
    showSection('home');

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            const sectionId = link.getAttribute('href').substring(1); // Get section from href (without #)
            showSection(sectionId);
        });
    });
});
