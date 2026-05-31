// Main App Initialization & DOM Elements
// =====================================

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const footerLinks = document.querySelectorAll('.footer-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const pages = document.querySelectorAll('.page');
const searchBar = document.getElementById('searchBar');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuContainer = document.getElementById('menuItems');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const loginForm = document.getElementById('loginForm');
const showRegister = document.getElementById('show-register');
const exploreMenuBtn = document.getElementById('explore-menu-btn');
const emptyCartMenuBtn = document.getElementById('empty-cart-menu-btn');
const notification = document.getElementById('notification');
const loader = document.querySelector('.loader');
const particlesContainer = document.getElementById('particles');

// Initialize the app
function init() {
    // Hide loader after 1.5 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);

    // Create particles
    createParticles();
    
    // Render initial content
    renderMenu();
    updateCartCount();
    setupEventListeners();
    showPage('home');
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
