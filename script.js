// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Get all sections and hide them
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the home section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
