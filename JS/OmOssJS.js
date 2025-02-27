document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";          
            }
        });
    });
});




document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const query = document.querySelector("input[name='query']").value; // Get the query input
    window.location.href = "../HTML/Nextvoices.html"; // Redirect to the fixed URL
  });