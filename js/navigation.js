// Navigation & Page Switching
// ============================

// Show page with transition
function showPage(pageId) {
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === pageId);
    });

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    // Special handling for specific pages
    if (pageId === 'cart') {
        renderCart();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const isActive = navMenu.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', isActive);
    mobileMenuBtn.innerHTML = isActive ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    document.body.style.overflow = isActive ? 'hidden' : '';
}

// Close mobile menu
function closeMobileMenu() {
    navMenu.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.style.overflow = '';
}

// Setup navigation event listeners
function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
            closeMobileMenu();
        });
    });

    // Footer links
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page) {
                showPage(page);
            } else {
                showNotification('This page is coming soon!', 'info');
            }
        });
    });

    // Explore menu buttons
    exploreMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('menu');
    });

    emptyCartMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('menu');
    });
}
