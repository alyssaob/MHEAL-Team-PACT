document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            } else {
                console.error("Target section not found:", targetId);
            }
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelector('main').classList.toggle('dark-mode');
        document.querySelectorAll("section").forEach(el => el.classList.toggle("dark-mode"));
        document.querySelectorAll("nav ul li a").forEach(el => el.classList.toggle("dark-mode"));
        document.querySelectorAll(".resources-banner").forEach(el => el.classList.toggle("dark-mode"));
        document.querySelectorAll("table thead, table tbody tr").forEach(el => el.classList.toggle("dark-mode"));
        document.querySelectorAll(".modal-content").forEach(el => el.classList.toggle("dark-mode"));
    });

    // Feedback modal
    const feedbackLink = document.getElementById("feedback-link");
    const feedbackModal = document.getElementById("feedback-modal");
    const closeButton = document.querySelector(".close-button");

    feedbackLink.addEventListener("click", function(event) {
        event.preventDefault();
        feedbackModal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        feedbackModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = "none";
        }
    });
});