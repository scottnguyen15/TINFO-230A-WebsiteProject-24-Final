document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('estimate-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement form validation here
        // Example: Check if all required fields are filled
    });

document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Validate form fields here
        // Example: Check if the email field is not empty and has a valid format
    });

    // Image Slider
    // You can use libraries like Swiper.js or implement a custom solution

    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjusted for navigation bar height
                behavior: 'smooth'
            });
        });
    });

    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('#faq h3');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show-answer');
        });
    });

    // Mobile Menu
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('show-menu');
    });

    // Scroll-to-Top Button
    const scrollTopBtn = document.querySelector('#scroll-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show-btn');
        } else {
            scrollTopBtn.classList.remove('show-btn');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
