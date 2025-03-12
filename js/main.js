// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    
    // Toggle mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            mobileMenuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    // Close mobile menu
    const closeMenu = function() {
        mobileMenu.classList.remove('open');
        mobileMenuOverlay.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    };
    
    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', closeMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking on mobile menu links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 