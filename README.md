# NAWABS ONLINE RESTAURANT - File Organization Guide

## Quick Reference

### 🎨 CSS Files (css/ folder)
- **variables.css** - Colors, custom properties, resets
- **global.css** - Base animations, transitions, containers
- **header.css** - Navigation bar styling
- **hero.css** - Homepage hero section
- **components.css** - Buttons, cards, badges
- **menu.css** - Menu grid, items, filters
- **auth.css** - Login/registration form
- **cart.css** - Shopping cart page
- **about.css** - About section & features
- **footer.css** - Footer styling
- **notifications.css** - Loading, alerts, particles
- **responsive.css** - Mobile/tablet breakpoints

### 💻 JavaScript Files (js/ folder)
- **data.js** - Menu items constant array
- **main.js** - App initialization
- **navigation.js** - Page routing & mobile menu
- **menu.js** - Menu display & search/filter logic
- **cart.js** - Add/remove items, calculations
- **auth.js** - Login form handling
- **ui.js** - Notifications, particles, animations

---

## How Each File Works

### Data Layer
**js/data.js** contains the menu items:
```javascript
const menuItems = [
    { id, name, price, category, img, desc, rating, popular, chefSpecial }
]
```
Used by: menu.js, cart.js

### UI Utilities
**js/ui.js** provides common functions:
- `showNotification()` - Display toast messages
- `createParticles()` - Floating animation effect

### Navigation & Layout
**js/navigation.js** manages page transitions:
- `showPage()` - Switch between home/menu/about/login/cart
- `toggleMobileMenu()` - Mobile hamburger menu
- `setupEventListeners()` - Attach all event handlers

### Menu & Shopping
**js/menu.js** handles:
- `renderMenu()` - Display menu items
- Filter by category (biryani, kebab, curry, dessert)
- Search functionality

**js/cart.js** manages:
- `addToCart()` - Add items
- `removeFromCart()` - Delete items
- `updateCartItemQuantity()` - +/- buttons
- `updateCartTotals()` - Calculate subtotal, tax, total

### Authentication
**js/auth.js** handles:
- Login form submission
- Registration link

### Main App
**js/main.js**:
- Initializes app
- Hides loading screen
- Sets up particles
- Calls all setup functions

---

## File Dependencies

```
main.js
  ├── data.js (menu data)
  ├── ui.js (notifications, particles)
  ├── navigation.js (page switching)
  ├── menu.js (depends on data.js & navigation.js)
  ├── cart.js (depends on data.js)
  └── auth.js (depends on navigation.js)
```

---

## Styling Organization by Component

Each CSS file corresponds to an HTML section:

| HTML Section | CSS File | Features |
|---|---|---|
| `<header>` | header.css | Navigation, logo, mobile menu |
| `#home` | hero.css | Title, subtitle, buttons |
| `#menu` | menu.css + components.css | Grid, items, filters, buttons |
| `#about` | about.css | Image, text, features |
| `#login` | auth.css | Form, social icons |
| `#cart` | cart.css | Items, summary, checkout |
| `<footer>` | footer.css | Links, newsletter, social |
| Loader/Toast | notifications.css | Animations, effects |
| All pages | responsive.css | Mobile/tablet adapting |

---

## Color System (css/variables.css)

All colors defined as CSS custom properties:
```css
--primary: #FF6B35    (Orange - buttons, primary action)
--secondary: #EFE9AE  (Gold text highlight)
--accent: #1F7A8C     (Teal - secondary action)
--dark: #022B3A       (Dark background)
--light: #F8F9FA      (Light text)
--gold: #FFD700       (Accent/titles)
--danger: #E71D36     (Red - alerts)
--success: #2EC4B6    (Green - success messages)
```

---

## Adding New Features

### Add a New Menu Item:
1. Edit `js/data.js` - Add to `menuItems` array
2. Automatic rendering via `renderMenu()`

### Add a New CSS Feature:
1. Create new CSS file in `css/` folder
2. Link in `index.html` `<head>`
3. Write styles using existing color variables

### Add a New Page:
1. Create new `<section id="newpage" class="page">` in HTML
2. Create CSS file: `css/newpage.css`
3. Create JS file: `js/newpage.js` (if needed)
4. Add link to navigation in `index.html`
5. Handle in `navigation.js` with `showPage('newpage')`

---

## Performance Optimization Tips

- Minify CSS files (for production)
- Minify JS files (for production)
- Images are externally hosted (add caching)
- Use WebP format for images (fallback to PNG)
- Lazy load images below fold
- Defer non-critical JavaScript

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- CSS Grid & Flexbox required
- ES6 JavaScript syntax used

---

## Future Enhancements

- [ ] Convert menu data to JSON file (`data/menu-data.json`)
- [ ] Add backend API integration
- [ ] Implement user authentication
- [ ] Add payment gateway
- [ ] Database integration
- [ ] Order tracking system
- [ ] Admin panel
- [ ] SASS/SCSS for CSS preprocessing
- [ ] Build tool (Webpack/Vite)
- [ ] Testing framework (Jest, Cypress)
