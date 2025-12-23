// Injects the navbar.html content into the element with id="navbar-container"
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            // Optionally, set the active class based on the current page
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                if (window.location.pathname.endsWith(link.getAttribute('href'))) {
                    link.classList.add('active');
                }
            });
        });
});
