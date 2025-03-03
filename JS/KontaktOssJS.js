document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.querySelector(".input-box textarea");

    textarea.addEventListener("input", function() {
        this.style.height = "auto"; // Nullstill høyden først
        this.style.height = Math.min(this.scrollHeight, 300) + "px"; // Øker til maks 300px
    });
});


document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const query = document.querySelector("input[name='query']").value; // Get the query input
    
    // Append the query to the URL
    const baseUrl = "../HTML/Nextvoices.html";
    const newUrl = baseUrl + "?query=" + encodeURIComponent(query); // Append the query parameter
    window.location.href = newUrl; // Redirect to the URL with the query parameter
  });