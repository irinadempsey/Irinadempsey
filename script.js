(function ($) {
  // Wait for the window load or hashchange event
  $(window).on('load hashchange', function () {
    // Hide all content regions first
    $('.content-region').hide();

    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');

    // Get the current region from the URL hash or default to the first menu item
    var region = location.hash || $('.main-menu a:first').attr('href');

    // Check if the region exists before showing it
    if (region.startsWith("#") && $(region).length) {
      $(region).show();
    } else {
      $('.content-region:first').show();
    }

    // Highlight the active menu item
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Update button text
      themeToggle.innerText = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
    });
  }
});
