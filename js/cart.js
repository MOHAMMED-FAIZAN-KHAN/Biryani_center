// Shopping Cart Management
// =======================

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.img,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${item.name} added to cart!`, 'success');
}

// Render cart items
function renderCart() {
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <a href="#menu" class="btn btn-primary" id="empty-cart-menu-btn">Explore Our Menu</a>
            </div>
        `;
        
        // Add event listener to menu link in empty cart message
        document.getElementById('empty-cart-menu-btn').addEventListener('click', (e) => {
            e.preventDefault();
            showPage('menu');
        });
    } else {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://i.ibb.co/0jQ5YQx/biryani.png'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}" aria-label="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItemsList.appendChild(cartItem);
        });

        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.getAttribute('data-id'));
                updateCartItemQuantity(itemId, -1);
            });
        });

        document.querySelectorAll('.increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.getAttribute('data-id'));
                updateCartItemQuantity(itemId, 1);
            });
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(itemId);
            });
        });
    }

    updateCartTotals();
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return;

    const newQuantity = cart[itemIndex].quantity + change;
    
    if (newQuantity <= 0) {
        cart.splice(itemIndex, 1);
        showNotification('Item removed from cart', 'info');
    } else {
        cart[itemIndex].quantity = newQuantity;
    }

    saveCart();
    updateCartCount();
    renderCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return;

    const itemName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    saveCart();
    updateCartCount();
    renderCart();
    showNotification(`${itemName} removed from cart`, 'info');
}

// Update cart totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 49 : 0;
    const tax = subtotal * 0.05;
    const total = subtotal + deliveryFee + tax;

    subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    taxEl.textContent = `₹${tax.toFixed(2)}`;
    totalEl.textContent = `₹${total.toFixed(2)}`;
    document.getElementById('delivery-fee').textContent = `₹${deliveryFee.toFixed(2)}`;
}

// Update cart count in header
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Setup cart checkout button listener
function setupCartListeners() {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            showNotification('Order placed successfully!', 'success');
            setTimeout(() => {
                cart = [];
                saveCart();
                updateCartCount();
                renderCart();
                showPage('home');
            }, 2000);
        } else {
            showNotification('Your cart is empty!', 'error');
        }
    });
}

// Add to main setup
const cartSetupEventListeners = setupEventListeners;
setupEventListeners = function() {
    cartSetupEventListeners();
    setupCartListeners();
};
