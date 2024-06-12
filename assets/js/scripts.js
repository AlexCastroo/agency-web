document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Puedes ajustar el valor de scroll
            navbar.classList.add("bg-gradient-to-b", "from-gray-950", "from-30%", "to-transparent");
        } else {
            navbar.classList.remove("bg-gradient-to-b", "from-gray-950", "from-30%", "to-transparent");
        }
    });
});

