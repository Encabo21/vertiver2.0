// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle') || document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const dropdowns = document.querySelectorAll('.dropdown');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mainNav.classList.toggle('open'); // User requested .open class support
        mobileToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Toggle overlay effect

        // Animate hamburger to X (optional, needs CSS support but toggling class helps)
    });
}

// Mobile Dropdown Toggle
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                // Check if it's a link, not a dropdown toggle
                if (!this.classList.contains('dropdown-toggle')) {
                    mainNav.classList.remove('active');
                    mainNav.classList.remove('open');
                    mobileToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        mainNav.classList.remove('open');
        mobileToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});
