document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.querySelector(".input-box textarea");

    textarea.addEventListener("input", function() {
        this.style.height = "auto"; // Nullstill høyden først
        this.style.height = Math.min(this.scrollHeight, 300) + "px"; // Øker til maks 300px
    });
});