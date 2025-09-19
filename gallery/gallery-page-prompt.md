# Galéria Oldal - Részletes Fejlesztési Prompt

## Projekt Kontextus
- **ProStone Megoldások** térkövezési vállalkozás
- Portfolio és munkák bemutatása
- Before/After transformációk hangsúlyozása
- Vizuális social proof építése
- Szakértelem demonstrálása konkrét projekteken keresztül

## Design Követelmények
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia
- Block-based architektúra követése
- **Visual-first megközelítés:** Képek dominanciája
- Interaktív galéria elemek (lightbox, hover effects)
- Mobile-optimalizált képmegjelenítés
- Lazy loading implementáció

## Oldal-specifikus Célok
- **Visual social proof:** Munkaminőség demonstrálása
- **Before/After impact:** Transzformációk hatásossága
- **Expertise showcase:** Különböző projekt típusok bemutatása
- **Trust building:** Valódi projektek hitelességi bizonyítása
- **Lead generation:** Vizuális inspiráció konverziókhoz

## Tartalom Struktúra

### **Hero Szekció (Header CTA Form-mal):**
```html
<section class="hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1>Térkövezési Projektek Galériája</h1>
      <p class="hero-subtitle">5000+ befejezett projekt, valódi transformációk, elégedett ügyfelek. Tekintse meg munkáink portfolióját és inspirálódjon.</p>
      <div class="gallery-stats">
        <div>📸 500+ projekt fotó</div>
        <div>🏆 Award-winning munkák</div>
        <div>⭐ 4.9 csillag átlag</div>
      </div>
    </div>
    <div class="header-form-card">
      <!-- AZONOS CTA FORM MINT A FŐOLDALON -->
    </div>
  </div>
</section>
```

### **Kategóriás Szűrő Szekció:**
```html
<section class="block">
  <div class="gallery-filters">
    <button class="filter-btn active" data-filter="all">Összes</button>
    <button class="filter-btn" data-filter="installation">Térkő Telepítés</button>
    <button class="filter-btn" data-filter="masonry">Kőművesség</button>
    <button class="filter-btn" data-filter="repair">Javítás</button>
    <button class="filter-btn" data-filter="before-after">Előtte/Utána</button>
  </div>
</section>
```

### **Fő Galéria Grid:**
```html
<section class="block">
  <div class="gallery-grid">
    <!-- Masonry-style layout -->
    <!-- Minden project card: -->
    <!-- - Thumbnail fotó -->
    <!-- - Projekt címe -->
    <!-- - Helyszín -->
    <!-- - Szolgáltatás típusa -->
    <!-- - Rövid leírás -->
    <!-- - "Részletek" gomb -->
  </div>
</section>
```

### **Kiemelt Projektek Szekció:**
```html
<section class="block block-alt">
  <h2>Kiemelt Projektek</h2>
  <div class="featured-projects">
    <!-- 3-4 legnagyobb/legértékesebb projekt -->
    <!-- Részletes leírással -->
    <!-- Multiple fotókkal -->
    <!-- Ügyfél testimonial-lal -->
  </div>
</section>
```

### **Before/After Showcase:**
```html
<section class="block">
  <h2>Előtte és Utána</h2>
  <div class="before-after-slider">
    <!-- Interaktív slider -->
    <!-- Dramatic transformations -->
    <!-- Swipe/drag functionality -->
  </div>
</section>
```

### **Kategóriák Szerinti Breakdown:**
```html
<section class="block block-alt">
  <h2>Projektek Szolgáltatásonként</h2>
  <div class="category-breakdown">
    <!-- Térkő Telepítés -->
    <!-- Támfalak -->
    <!-- Javítások -->
    <!-- Különleges projektek -->
  </div>
</section>
```

### **FAQ Szekció (3-5 kérdés):**
- "Honnan származnak ezek a fotók?"
- "Kaphatunk referenciákat a projektekhez?"
- "Mennyi idő alatt készülnek el ilyen munkák?"
- "Milyen anyagokat használnak ezeken a projekteken?"
- "Lehet-e megtekinteni a munkákat személyesen?"

### **CTA Szekció:**
```html
<section class="block">
  <h2>Készen Áll a Saját Projektjére?</h2>
  <!-- Portfolio alapján ajánlatkérés -->
  <!-- "Hasonló projekt" opciók -->
  <!-- Személyes konzultáció -->
</section>
```

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- **Interaktív elemek:**
  - Lightbox galéria (vanilla JS)
  - Kategória szűrés
  - Before/after slider
  - Lazy loading
  - Touch/swipe support mobile-on
- SEO optimalizált meta tagek:
  - Title: "Térkövezési Projektek Galériája | ProStone Megoldások Portfolio"
  - Description: "Térkövezési projektek galériája: 500+ fotó, before/after képek, befejezett munkák Budapesten. Inspirálódjon portfolio-nkból!"
- **JSON-LD Schema Markup kötelező:**
  - LocalBusiness schema
  - ImageGallery schema (részletes)
  - FAQPage schema
- Image optimization és webp support
- Progressive loading

## Integráció Követelmények
- Minden oldalról "Galéria" linkek
- Szolgáltatások oldalról kategória-specifikus linkek
- Schema Reference: `schema-templates/json-ld-schemas.md` használata kötelező
- Social media sharing buttons
- Print-friendly verzió

## Szükséges Adatok az Implementáláshoz

### **Projekt Fotók:**
```
□ Minimum 20-30 high-quality fotó
□ Before/after párok (5-10 set)
□ Különböző projekt típusok reprezentálva
□ Különböző helyszínek (Budapest, Pest megye)
□ Munkafázis fotók (process shots)
□ Részletes close-up fotók
```

### **Projekt Leírások:**
```
□ Minden projekthez rövid leírás (2-3 mondat)
□ Helyszín információk
□ Felhasznált anyagok
□ Projekt időtartama
□ Különleges kihívások vagy megoldások
□ Projekt értéke/mérete
```

### **Kategorizálás:**
```
□ Térkő Telepítés projektek (10-15 db)
□ Kőművesség/Támfalak (8-10 db)
□ Javítási projektek (5-8 db)
□ Különleges/egyedi munkák (5 db)
□ Helyszín szerinti csoportosítás
□ Anyag szerinti csoportosítás
```

### **Kiemelt Projektek:**
```
□ 3-4 legnagyobb/leglátványosabb projekt
□ Részletes projekt történetek
□ Ügyfél testimonialok projektekhez
□ Multiple angle fotók
□ Technikai részletek és kihívások
```

### **Ügyfél Információk:**
```
□ Ügyfél engedélyek fotókhoz
□ Testimonialok projektekhez
□ Referencia kontakt információk
□ Helyszín megtekintési lehetőségek
```

### **Technikai Fotó Adatok:**
```
□ Optimalizált méretben (web-ready)
□ Alt text leírások minden fotóhoz
□ Copyright és watermark információk
□ Forrás fájlok elérhetősége
□ Mobile-optimalizált verziók
```

## Interaktív Funkciók

### **Galéria JavaScript Features:**
```javascript
// Kategória szűrés
// Lightbox megjelenítés
// Before/after slider
// Lazy loading
// Touch gestures
// Keyboard navigation
// Social sharing
```

## Célzott Kulcsszavak SEO-hoz
- "térkövezési projektek Budapest"
- "térkő galéria portfolio"
- "előtte utána térkövezés"
- "térkövezési referenciák"
- "ProStone projektek"

## Konverziós Célok
- Portfolio alapú érdeklődések
- "Hasonló projekt" kérések
- Referencia látogatások
- Social media sharing
- Newsletter feliratkozások

## Success Metrics
- Galéria időtartam (engagement)
- Lightbox megnyitások száma
- Kategória szűrés használat
- Contact form completions from gallery
- Social shares számа

---

**Deliverable:** `gallery/index.html` - Vizuálisan lenyűgöző, interaktív galéria oldal, amely showcase-eli a ProStone munkaminőségét és expertise-ét.