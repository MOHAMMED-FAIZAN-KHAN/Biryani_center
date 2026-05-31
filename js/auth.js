// Authentication & Login
// ======================

// Setup authentication event listeners
function setupAuthListeners() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authTabs = document.querySelectorAll('[data-auth-tab]');
    const authForms = document.querySelectorAll('[data-auth-form]');
    const authSwitches = document.querySelectorAll('[data-auth-switch]');

    if (!loginForm || !signupForm) {
        return;
    }

    const setActiveAuth = (target) => {
        authTabs.forEach((tab) => {
            const isActive = tab.dataset.authTab === target;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        authForms.forEach((form) => {
            const isActive = form.dataset.authForm === target;
            form.classList.toggle('is-active', isActive);
            if (isActive) {
                form.removeAttribute('hidden');
            } else {
                form.setAttribute('hidden', '');
            }
        });
    };

    authTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            setActiveAuth(tab.dataset.authTab);
        });
    });

    authSwitches.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveAuth(link.dataset.authSwitch);
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Logged in successfully!', 'success');
        setTimeout(() => {
            showPage('home');
        }, 1500);
    });

    // Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = signupForm.querySelector('#signupPassword');
        const confirmPassword = signupForm.querySelector('#confirmPassword');

        if (password && confirmPassword && password.value !== confirmPassword.value) {
            showNotification('Passwords do not match. Please try again.', 'error');
            confirmPassword.focus();
            return;
        }

        showNotification('Account created! Welcome to Nawabs.', 'success');
        setTimeout(() => {
            showPage('home');
        }, 1500);
    });

    // Default to login view
    setActiveAuth('login');
}

// Add to main setup
const authSetupEventListeners = setupEventListeners;
setupEventListeners = function() {
    authSetupEventListeners();
    setupAuthListeners();
};
