// Smooth Scrolling for Navigation Links
document.querySelectorAll('.main-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic Section Visibility
const sections = document.querySelectorAll('.content-region');
const menuLinks = document.querySelectorAll('.main-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);

    // Hide all sections and remove active class from menu links
    sections.forEach(section => section.classList.add('hide'));
    menuLinks.forEach(link => link.classList.remove('active'));

    // Show target section and highlight the active menu link
    document.getElementById(targetId)?.classList.remove('hide');
    this.classList.add('active');
  });
});

// Lightbox Effect for Gallery
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${img.src}" alt="${img.alt}" />
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal on click
    modal.querySelector('.close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.remove();
    });
  });
});

// Scroll Animation on Page Load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
