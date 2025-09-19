# Dropdown Navigációs Rendszer - ProStone Megoldások

## Navigáció Struktúra

### **Főmenü:**
```
[ProStone Megoldások] - Főoldal - Szolgáltatások [▼] - Szolgáltatási területek [▼] - Rólunk - Galéria - Kapcsolat
```

---

## 🔧 **Szolgáltatások Dropdown**

### **Fő Szolgáltatási Kategóriák:**
```
Szolgáltatások [▼]
├── Térkő Telepítés és Burkolás
├── Kőművesség és Falazás
├── Javítás és Felújítás
├── Támfalak Építése
├── Vízelvezetés Kialakítása
├── Sürgősségi Javítások
└── [Összes szolgáltatás megtekintése] → /services/
```

### **Landing Page Linkek:**
- Térkő Telepítés → `/services/#terko-telepites`
- Kőművesség → `/services/#komuvesseg`
- Javítás → `/services/#javitas`
- Támfalak → `/services/#tamfalak`
- Vízelvezetés → `/services/#vizelvezetés`
- Sürgősségi → `/services/#surgosseg`

---

## 📍 **Szolgáltatási Területek Dropdown**

### **Területi Csoportosítás:**
```
Szolgáltatási területek [▼]
├── Budapest [▶]
│   ├── I-V. kerület (Budai történelmi mag)
│   ├── VI-IX. kerület (Belváros és környéke)
│   ├── X-XV. kerület (Pest külső kerületek)
│   └── XVI-XXIII. kerület (Külső agglomeráció)
├── Pest megye [▶]
│   ├── Szentendre és környéke
│   ├── Budakeszi és környéke
│   ├── Gödöllő és környéke
│   ├── Dunakeszi és környéke
│   └── Érd és környéke
└── [Teljes lefedettség megtekintése] → /service-areas/
```

### **Landing Page Linkek:**
- Budapest → `/service-areas/#budapest`
- Pest megye → `/service-areas/#pest-megye`
- Kerület-specifikus → `/service-areas/#kerulet-[szám]`

---

## 🎨 **Dropdown CSS Design**

### **Visual Design Követelmények:**
```css
.dropdown-menu {
    background: white;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 20px 0;
    min-width: 280px;
    z-index: 1000;
}

.dropdown-item {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
}

.dropdown-item:hover {
    background: var(--light-gray);
    color: var(--primary-blue);
    padding-left: 30px;
}

.dropdown-divider {
    height: 1px;
    background: #e5e7eb;
    margin: 10px 20px;
}

.dropdown-header {
    font-weight: 600;
    color: var(--primary-blue);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 8px 24px;
}
```

---

## ⚡ **JavaScript Functionality**

### **Dropdown Behavior:**
```javascript
// Hover to show dropdown
// Click outside to hide
// Keyboard navigation support
// Mobile touch handling
// Smooth animations

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');

    // Desktop hover
    dropdown.addEventListener('mouseenter', () => {
        menu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
    });

    // Mobile click
    trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            menu.classList.toggle('show');
        }
    });
});

// Click outside to close
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
```

---

## 📱 **Mobile Responsive Behavior**

### **Mobile Navigation:**
```
Mobile (< 768px):
├── Hamburger Menu
├── Collapsible Sections
├── Touch-friendly Spacing
└── Stacked Layout

Tablet (768-1024px):
├── Condensed Dropdowns
├── Adjusted Spacing
└── Touch Optimization

Desktop (> 1024px):
├── Full Dropdown Menus
├── Hover Interactions
└── Multi-level Support
```

---

## 🔗 **URL Struktura és Routing**

### **Szolgáltatások URL-ek:**
```
/services/ - Főoldal
/services/terko-telepites/ - Specifikus szolgáltatás
/services/komuvesseg/ - Kőműves munkák
/services/javitas/ - Javítási szolgáltatások
```

### **Területi URL-ek:**
```
/service-areas/ - Főoldal
/service-areas/budapest/ - Budapest összefoglaló
/service-areas/budapest/ii-kerulet/ - Kerület-specifikus
/service-areas/pest-megye/szentendre/ - Város-specifikus
```

---

## 📊 **SEO Optimalizáció**

### **Dropdown SEO Benefits:**
- **Internal linking** erősítése
- **User experience** javítása
- **Page authority** elosztása
- **Crawlability** növelése
- **Local SEO** support

### **Schema Markup Integration:**
```json
{
  "@type": "SiteNavigationElement",
  "name": "Szolgáltatások",
  "url": "https://prostonemegoldasok.hu/services/",
  "hasPart": [
    {
      "@type": "SiteNavigationElement",
      "name": "Térkő Telepítés",
      "url": "https://prostonemegoldasok.hu/services/terko-telepites/"
    }
  ]
}
```

---

## 🎯 **Implementációs Követelmények**

### **Minden Oldalon Kötelező:**
1. **Consistent dropdown structure**
2. **Unified hover/click behavior**
3. **Mobile-optimized touch handling**
4. **Keyboard accessibility support**
5. **SEO-friendly URL routing**

### **Performance Optimization:**
- CSS transitions for smooth animations
- JavaScript debouncing for hover events
- Lazy loading for dropdown content
- Minimal DOM manipulation

---

**🚀 Ez a dropdown rendszer minden agent prompt-jában implementálandó!**