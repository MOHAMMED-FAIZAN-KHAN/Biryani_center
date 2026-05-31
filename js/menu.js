// Menu Rendering & Filtering
// ==========================

// Render menu items
function renderMenu(searchTerm = '', category = 'all') {
    menuContainer.innerHTML = '';
    
    const filteredItems = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.desc.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || item.category === category;
        return matchesSearch && matchesCategory;
    });

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
                <h3>No items found</h3>
                <p>Try a different search or filter</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            ${item.popular ? '<span class="badge">Popular</span>' : ''}
            ${item.chefSpecial ? '<span class="badge chef-special">Chef Special</span>' : ''}
            <img src="${item.img}" alt="${item.name}" class="menu-item-img" onerror="this.src='https://i.ibb.co/0jQ5YQx/biryani.png'">
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <span>${item.name}</span>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <div class="menu-item-desc">${item.desc}</div>
                <div class="menu-item-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(item.rating)}
                    ${'<i class="far fa-star"></i>'.repeat(5 - item.rating)}
                    <span>(${item.rating}.0)</span>
                </div>
                <button class="add-to-cart" data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Setup menu filter & search event listeners
function setupMenuFilters() {
    // Search functionality
    searchBar.addEventListener('input', () => {
        renderMenu(searchBar.value, document.querySelector('.filter-btn.active').dataset.category);
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(searchBar.value, btn.dataset.category);
        });
    });
}

// Add setupMenuFilters to main setupEventListeners
const originalSetupEventListeners = setupEventListeners;
setupEventListeners = function() {
    originalSetupEventListeners();
    setupMenuFilters();
};
