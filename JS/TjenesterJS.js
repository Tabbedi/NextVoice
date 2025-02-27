document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const query = document.querySelector("input[name='query']").value; // Get the query input
    
    // Append the query to the URL
    const baseUrl = "../HTML/Nextvoices.html";
    const newUrl = baseUrl + "?query=" + encodeURIComponent(query); // Append the query parameter
    window.location.href = newUrl; // Redirect to the URL with the query parameter
  });



// JavaScript to toggle each dropdown
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const dropdownContent = this.nextElementSibling; // The associated content div

    // Toggle the open class to activate the animation
    dropdownContent.parentElement.classList.toggle('open');
    
    // Close all other dropdowns except the one clicked
    const allDropdowns = document.querySelectorAll('.service-dropdown');
    allDropdowns.forEach(dropdown => {
      if (dropdown !== this.parentElement && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
      }
    });
  });
});
