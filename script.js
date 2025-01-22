(function ($) {

  // Wait for the window load or hashchange event
  $(window).on('load hashchange', function() {
    
    // Hide all content regions first
    $('.content-region').hide();

    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');

    // Get the current region from the URL hash or default to the first menu item
    var region = location.hash || $('.main-menu a:first').attr('href');

    // Show the content region based on the URL hash (or default to first region)
    $(region).show();

    // Highlight the active menu item
    $('.main-menu a[href="'+ region +'"]').addClass('active');
    
  });

})(jQuery);

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerText = 'Switch to Light Mode';
  } else {
    themeToggle.innerText = 'Switch to Dark Mode';
  }
});
