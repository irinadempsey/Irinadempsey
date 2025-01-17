// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Show the selected section
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
