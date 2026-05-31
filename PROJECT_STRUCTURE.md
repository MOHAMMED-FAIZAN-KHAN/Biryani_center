# Project Structure Documentation

## NAWABS ONLINE RESTAURANT - Modular Organization

This document outlines the complete file organization and categorization of the project.

---

## 📁 Directory Structure

```
project 3/
├── index.html              # Original monolithic file (obsolete)
├── index-new.html          # New refactored main HTML file
├── css/                    # Stylesheet folder (modular CSS)
│   ├── variables.css       # CSS custom properties & resets
│   ├── global.css          # Base styles & animations
│   ├── header.css          # Header & navigation
│   ├── hero.css            # Hero section
│   ├── components.css      # Reusable components (buttons, cards, badges)
│   ├── menu.css            # Menu display & filters
│   ├── auth.css            # Login/authentication form
│   ├── cart.css            # Shopping cart page
│   ├── about.css           # About section
│   ├── footer.css          # Footer section
│   ├── notifications.css   # Loader, notifications, particles
│   └── responsive.css      # Media queries & breakpoints
├── js/                     # JavaScript folder (modular JS)
│   ├── data.js             # Menu items data (constant)
│   ├── main.js             # App initialization & DOM setup
│   ├── navigation.js       # Page navigation & mobile menu
│   ├── menu.js             # Menu rendering & filtering
│   ├── cart.js             # Cart management (add/remove/update)
│   ├── auth.js             # Authentication functionality
│   └── ui.js               # UI utilities (notifications, particles)
└── data/                   # Optional data folder
    └── menu-data.json      # (Future: JSON-based menu data)
```

---

## 📋 File Organization by Functionality

### CSS Files (organized by UI component/section)

| File | Purpose | Key Classes |
|------|---------|------------|
| **variables.css** | CSS custom properties, color scheme, resets | `:root`, `*`, `body` |
| **global.css** | Base animations, page transitions, containers | `.page`, `.container`, `@keyframes` |
| **header.css** | Navigation bar, mobile menu button | `header`, `nav`, `.mobile-menu-btn` |
| **hero.css** | Hero section, main title, call-to-action | `#home`, `.hero-content`, `.hero-content h1` |
| **components.css** | Reusable UI components | `.btn`, `.card-3d`, `.badge` |
| **menu.css** | Menu grid, items, filters, search bar | `.menu-container`, `.menu-item`, `.filter-btn` |
| **auth.css** | Login form, social login, form inputs | `#login`, `.login-container`, `.form-group` |
| **cart.css** | Shopping cart layout, summary, checkout | `.cart-container`, `.cart-item`, `.checkout-btn` |
| **about.css** | About section, features grid | `#about`, `.about-content`, `.feature-item` |
| **footer.css** | Footer sections, newsletter, social links | `footer`, `.footer-col`, `.newsletter-form` |
| **notifications.css** | Loader spinner, notifications, particle effects | `.loader`, `.notification`, `.particle` |
| **responsive.css** | Media queries for mobile/tablet/desktop | `@media` queries |

### JavaScript Files (organized by functionality)

| File | Purpose | Key Functions |
|------|---------|--------------|
| **data.js** | Menu items data array | `menuItems[]` constant |
| **main.js** | App initialization & DOM elements | `init()`, DOM references |
| **navigation.js** | Page navigation & routing | `showPage()`, `toggleMobileMenu()` |
| **menu.js** | Menu rendering & filtering | `renderMenu()`, filter logic |
| **cart.js** | Cart operations | `addToCart()`, `renderCart()`, `updateCartTotals()` |
| **auth.js** | Login & authentication | `setupAuthListeners()` |
| **ui.js** | UI utilities & animations | `showNotification()`, `createParticles()` |

---

## 🎯 Functionality Categorization

### 1. **Header & Navigation** (`header.css` + `navigation.js`)
- Fixed navbar with logo
- Navigation menu with active states
- Mobile hamburger menu
- Scroll effect

### 2. **Home Section** (`hero.css`)
- Large hero title with gradient
- Subtitle text
- Call-to-action buttons
- Animated floating elements

### 3. **Menu System** (`menu.css` + `menu.js`)
- Responsive grid layout
- Menu item cards with images
- Search functionality
- Category filtering
- Price & rating display
- Add to cart buttons

### 4. **Shopping Cart** (`cart.css` + `cart.js`)
- Cart items display
- Quantity controls (+/- buttons)
- Remove item functionality
- Order summary with calculations
- Subtotal, tax, delivery fee
- Checkout button

### 5. **Authentication** (`auth.css` + `auth.js`)
- Login form with validation
- Social media login buttons
- Remember me checkbox
- Registration link
- Form styling with glassmorphism

### 6. **About Section** (`about.css`)
- Restaurant story
- Team image
- Feature highlights (4-item grid)
- Traditional methods emphasis

### 7. **Footer** (`footer.css`)
- Multi-column layout
- Quick links section
- Contact information
- Newsletter subscription
- Social media links

### 8. **UI Components** (`components.css`)
- Buttons (primary, outline styles)
- 3D cards with hover effects
- Badges (popular, chef special)
- Glass-morphism effects
- 3D text effects

### 9. **Notifications & Effects** (`notifications.css` + `ui.js`)
- Loading spinner with animation
- Toast notifications (success/error/info)
- Floating particles effect
- Custom animations

### 10. **Responsive Design** (`responsive.css`)
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)
- Mobile icons & sizing (576px)
- Flexible grids

---

## 🔗 Script Load Order

```html
<!-- Must load in this order: -->
1. data.js          ← Menu data (used by all others)
2. ui.js            ← Utilities (used by multiple modules)
3. navigation.js    ← Navigation (independent)
4. menu.js          ← Menu rendering (depends on data.js)
5. cart.js          ← Cart logic (depends on data.js)
6. auth.js          ← Authentication (independent)
7. main.js          ← Initialization (calls all above functions)
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Device | CSS File |
|-----------|--------|----------|
| 1200px | Large Desktop | responsive.css |
| 992px | Desktop to Tablet | responsive.css |
| 768px | Tablet | responsive.css |
| 576px | Mobile | responsive.css |

---

## 🎨 Color Variables

Reference: `css/variables.css`

- `--primary`: #FF6B35 (Orange)
- `--secondary`: #EFE9AE (Gold/Beige)
- `--accent`: #1F7A8C (Teal)
- `--dark`: #022B3A (Dark Blue)
- `--light`: #F8F9FA (Off White)
- `--gold`: #FFD700 (Gold)
- `--danger`: #E71D36 (Red)
- `--success`: #2EC4B6 (Green)

---

## 🚀 Usage

### To Open the Project:
1. Rename `index-new.html` to `index.html` (or update references)
2. Open in browser
3. All CSS and JS files should load automatically

### To Modify:
- **Styling**: Edit corresponding CSS file in `css/` folder
- **Menu Data**: Edit `js/data.js`
- **Functionality**: Edit corresponding JS file in `js/` folder
- **HTML Structure**: Edit `index.html`

### To Add New Features:
1. Create new CSS file in `css/` folder (if styling needed)
2. Create new JS module in `js/` folder (if logic needed)
3. Link CSS in `<head>` of index.html
4. Link JS before closing `</body>` tag in index.html

---

## 📊 Benefits of This Organization

✅ **Modular Structure**: Easy to maintain, update, and scale
✅ **Separation of Concerns**: Each file has a specific purpose
✅ **Easy Debugging**: Issues can be isolated to specific modules
✅ **Reusable Components**: CSS classes and JS functions can be reused
✅ **Scalability**: New pages/features can be added easily
✅ **Team Collaboration**: Multiple developers can work on different modules
✅ **Performance**: CSS/JS can be optimized and minified separately
✅ **Version Control**: Clear git history with logical commits

---

## 🔄 Update History

- **Original**: Single `index.html` file (monolithic)
- **Refactored**: Modular structure with separate CSS and JS files
