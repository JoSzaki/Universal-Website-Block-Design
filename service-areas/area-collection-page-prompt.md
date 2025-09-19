# Területi Gyűjtő Oldalak - Részletes Fejlesztési Prompt
## NY Pavers NYC Area Page Alapú Dizájn

---

## 📋 **Projekt Kontextus**
- **ProStone Megoldások** térkövezési vállalkozás
- Területi gyűjtő oldalak (Budapest kerületek + Pest megyei városok)
- NY Pavers NYC area page design adaptálása
- Grid-based, image-driven megközelítés
- Helyi SEO optimalizáció minden területhez

---

## 🎨 **Design Követelmények**

### **Alapvető Design Rendszer:**
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia
- Block-based architektúra követése
- **NY Pavers grid layout adaptálása**
- Image-first, tile-based megjelenítés
- Mobile-first responsive design

### **Visual Hierarchy:**
```
1. Navigation (dropdown menükkel)
2. Page Header (címmel és breadcrumb)
3. Hero Grid Section (területi tile-ok)
4. Service Cross-linking
5. FAQ Section
6. CTA Section
```

---

## 📄 **Oldal Típusok és URL Struktúra**

### **Budapest Főoldal:**
- **URL:** `/service-areas/budapest/`
- **Cím:** "Térkövezési Szolgáltatások Budapest Minden Kerületében"
- **Tartalom:** Budapest kerületek grid tile-okkal

### **Pest Megye Főoldal:**
- **URL:** `/service-areas/pest-megye/`
- **Cím:** "Térkövezési Szolgáltatások Pest Megye Területén"
- **Tartalom:** Pest megyei városok grid tile-okkal

### **Kerület/Város Specifikus Oldalak:**
- **Budapest:** `/service-areas/budapest/ii-kerulet/`
- **Pest megye:** `/service-areas/pest-megye/szentendre/`

### **Szolgáltatás + Lokáció Kombinált Oldalak (NY Pavers Staten Island Alapú):**
- **Térkövezés kerület-specifikus:** `/terkovezesi-szolgaltatasok-ii-kerulet/`
- **Térkövezés város-specifikus:** `/terkovezesi-szolgaltatasok-szentendre/`
- **Kőművesség lokáció-specifikus:** `/komuves-munkak-budapest-ii-kerulet/`
- **Támfalak lokáció-specifikus:** `/tamfalak-epitese-szentendre/`

**Példa URL struktúra:**
```
/terkovezesi-szolgaltatasok-ii-kerulet/
/komuves-munkak-budakeszi/
/tamfalak-epitese-godollo/
/terkovezes-javitas-pest-megye/
```

---

## 🏗️ **Tartalom Struktúra - NY Pavers Alapú**

### **1. Navigation Header (Dropdown-okkal):**
```html
<header class="nav-header">
  <nav class="nav-container">
    <!-- Dropdown navigation system -->
    <!-- Current page highlighted in dropdown -->
  </nav>
</header>
```

### **2. Page Header + Breadcrumb:**
```html
<section class="page-header">
  <div class="container">
    <nav class="breadcrumb">
      <a href="/">Főoldal</a> >
      <a href="/service-areas/">Szolgáltatási területek</a> >
      <span>Budapest</span>
    </nav>
    <h1>Térkövezési Szolgáltatások Budapest Minden Kerületében</h1>
    <p class="page-subtitle">25+ év helyi tapasztalat, gyors kiszállás minden kerületbe</p>
  </div>
</section>
```

### **3. Hero Grid Section (NY Pavers Style):**
```html
<section class="areas-grid-section">
  <div class="container">
    <div class="areas-grid">

      <!-- Budapest Kerület Tile Példa -->
      <div class="area-tile">
        <div class="area-image">
          <img src="placeholder-ii-kerulet.jpg" alt="Térkövezés II. kerület">
          <div class="area-overlay">
            <h3>II. kerület - Rózsadomb</h3>
            <p>Villa térburkolatok, prémium anyagok</p>
          </div>
        </div>
        <div class="area-content">
          <h4><a href="/service-areas/budapest/ii-kerulet/">II. kerület Térkövezés</a></h4>
          <ul class="area-services">
            <li>Gránit térkövek</li>
            <li>Villa bejáratok</li>
            <li>Támfalak építése</li>
            <li>Lépcsők burkolása</li>
          </ul>
          <a href="/service-areas/budapest/ii-kerulet/" class="area-cta">Részletek</a>
        </div>
      </div>

      <!-- További kerület tile-ok... -->

    </div>
  </div>
</section>
```

### **4. Service Cross-Linking Section:**
```html
<section class="block">
  <div class="container">
    <h2>Szolgáltatásaink Budapest Területén</h2>
    <div class="service-cross-links">
      <div class="service-link-card">
        <h3>Térkő Telepítés</h3>
        <p>Minden budapesti kerületben</p>
        <a href="/services/terko-telepites/">Részletek</a>
      </div>
      <!-- További szolgáltatások... -->
    </div>
  </div>
</section>
```

### **5. FAQ Section (Területi):**
```html
<section class="block block-alt">
  <div class="container">
    <h2>Gyakori Kérdések - Budapest</h2>
    <div class="faq-container">
      <!-- 3-5 Budapest-specifikus kérdés -->
    </div>
  </div>
</section>
```

### **6. Contact CTA Section:**
```html
<section class="block">
  <div class="container">
    <div class="area-contact-cta">
      <h2>Ingyenes Felmérés Budapesten</h2>
      <p>Kérjen árajánlatot a kerületéből</p>
      <a href="/contact/" class="cta-primary">Kapcsolat</a>
      <p class="phone-cta">Vagy hívjon: <a href="tel:+36155577283">+36 1 555 PAVE</a></p>
    </div>
  </div>
</section>
```

---

## 🎨 **NY Pavers Adaptált CSS Struktúra**

### **Areas Grid CSS:**
```css
.areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.area-tile {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.area-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.area-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.area-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.area-tile:hover .area-image img {
    transform: scale(1.05);
}

.area-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    color: white;
    padding: 20px;
}

.area-content {
    padding: 20px;
}

.area-services {
    list-style: none;
    margin: 15px 0;
}

.area-services li {
    padding: 5px 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.area-services li::before {
    content: '✓';
    color: var(--success-green);
    font-weight: bold;
}

.area-cta {
    background: var(--accent-orange);
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
}

.area-cta:hover {
    background: #ea580c;
    transform: translateY(-1px);
}
```

---

## 📊 **Szükséges Adatok Minden Területi Oldalhoz**

### **Budapest Kerületek Adatok:**
```
□ Minden kerület neve és jellegzetességei
□ Kerületenként 1-2 reprezentatív projekt fotó
□ Kerületi specialitások (villa, lakótelep, történelmi, stb.)
□ Főbb szolgáltatások kerületenként (4-6 db)
□ Reagálási idők és logisztikai előnyök
□ Helyi referencia projektek
```

### **Pest Megyei Városok Adatok:**
```
□ Főbb kiszolgált városok listája
□ Városi jellegzetességek és kihívások
□ Városonként 1-2 reprezentatív projekt fotó
□ Városi specialitások
□ Távolságok és kiszállási feltételek
□ Helyi referencia projektek
```

### **Területi Fotók:**
```
□ High-quality projekt fotók területenként
□ Before/after képek helyszínekkel
□ Különböző projekt típusok reprezentálva
□ Helyi környezet és kontextus látható
□ Optimalizált web méretben
□ Alt text leírásokkal
```

---

## 🔗 **Internal Linking Stratégia**

### **Dropdown Navigation Linkek:**
```
Szolgáltatási területek [▼]
├── Budapest [minden kerület grid oldalra]
├── Pest megye [minden város grid oldalra]
└── Specific kerület/város oldalak
```

### **Cross-Page Links:**
```
Grid oldalakról → Specifikus terület oldalakra
Specifikus oldalakról → Szolgáltatás oldalakra
Szolgáltatás oldalakról → Területi oldalakra
```

---

## 🎯 **SEO Optimalizáció**

### **Meta Tags Minden Területi Oldalhoz:**
```html
<!-- Budapest Főoldal -->
<title>Térkövezési Szolgáltatások Budapest | Minden Kerület | ProStone</title>
<meta name="description" content="Térkövezés Budapest minden kerületében. 25+ év tapasztalat, gyors kiszállás. I-XXIII kerület lefedve. Ingyenes felmérés.">

<!-- Kerület-specifikus -->
<title>Térkövezés II. kerület - Rózsadomb | ProStone Megoldások</title>
<meta name="description" content="Térkövezési szolgáltatások Budapest II. kerületében. Villa térburkolatok, gránit térkövek. Gyors kiszállás Rózsadombon.">
```

### **JSON-LD Schema:**
- LocalBusiness schema területi adatokkal
- Place schema minden kerület/városhoz
- Service schema területi specializációkkal
- FAQPage schema területi kérdésekkel

---

## 📱 **Mobile Optimization**

### **Responsive Grid:**
```css
/* Mobile */
@media (max-width: 768px) {
    .areas-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .area-tile {
        margin-bottom: 20px;
    }

    .area-image {
        height: 180px;
    }
}
```

---

## ✅ **Deliverable Minden Területi Oldalhoz**

1. **Grid-based layout** NY Pavers stílusban
2. **High-quality területi fotók** placeholder-ekkel
3. **Területi szolgáltatás listák** minden tile-ban
4. **SEO-optimalizált** meta tagekkel és schemával
5. **Mobile-responsive** design
6. **Internal linking** más oldalakra
7. **FAQ szekció** területi kérdésekkel
8. **Contact CTA** területi hangsúllyal

---

## 🎯 **Szolgáltatás + Lokáció Kombinált Oldalak (NY Pavers Staten Island Mintára)**

### **Oldal Struktúra Példa: "Térkövezési Szolgáltatások II. Kerület"**

```html
<section class="hero service-location-hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <nav class="breadcrumb">
        <a href="/">Főoldal</a> >
        <a href="/services/">Szolgáltatások</a> >
        <a href="/service-areas/budapest/">Budapest</a> >
        <span>II. kerület térkövezés</span>
      </nav>
      <h1>Térkövezési Szolgáltatások II. Kerület - Rózsadomb</h1>
      <p class="hero-subtitle">25+ év helyi tapasztalat a II. kerületben. Villa térburkolatok, prémium anyagok, gyors kiszállás Rózsadombon.</p>

      <div class="local-highlights">
        <div class="highlight">📍 Helyi szakértelem</div>
        <div class="highlight">🚛 Gyors kiszállás</div>
        <div class="highlight">🏆 Prémium minőség</div>
        <div class="highlight">⭐ 5/5 értékelés</div>
      </div>
    </div>
    <div class="header-form-card">
      <!-- CTA FORM LOKÁCIÓ-SPECIFIKUS MEZŐKKEL -->
      <h3>Ingyenes Felmérés II. Kerületben</h3>
      <form class="location-specific-form">
        <input type="hidden" name="location" value="II. kerület">
        <input type="hidden" name="service" value="térkövezés">
        <!-- Form fields... -->
      </form>
    </div>
  </div>
</section>

<section class="block">
  <div class="container">
    <h2>Miért Válassza a ProStone-t a II. Kerületben?</h2>
    <div class="local-advantages-grid">
      <div class="advantage">
        <h3>🏛️ Történelmi Környezet Ismerete</h3>
        <p>25+ év tapasztalat a II. kerület építészeti adottságainak figyelembevételével.</p>
      </div>
      <div class="advantage">
        <h3>🚗 Gyors Elérhetőség</h3>
        <p>Központi telephelyünkről 15 perc alatt elérjük Rózsadombot.</p>
      </div>
      <div class="advantage">
        <h3>💎 Prémium Anyagok</h3>
        <p>Villa és luxusingatlan igényeknek megfelelő anyagválaszték.</p>
      </div>
      <div class="advantage">
        <h3>📋 Engedélyezési Segítség</h3>
        <p>Műemléki és védett környezeti előírások szakértői kezelése.</p>
      </div>
    </div>
  </div>
</section>

<section class="block block-alt">
  <div class="container">
    <h2>Térkövezési Szolgáltatásaink a II. Kerületben</h2>
    <div class="services-grid">
      <div class="service-card">
        <h3>Villa Bejáratok és Feljárók</h3>
        <p>Elegáns gránit és természetes kő térkövek villa bejáratokhoz.</p>
        <ul>
          <li>Gránit térkövezés</li>
          <li>Travertin burkolatok</li>
          <li>Antik térkő felújítás</li>
        </ul>
        <span class="service-price">15.000-25.000 Ft/m²</span>
      </div>

      <div class="service-card">
        <h3>Kertek és Teraszok</h3>
        <p>Prémium minőségű kerti térkövezés természetes környezetben.</p>
        <ul>
          <li>Kerti járdák</li>
          <li>Terasz burkolatok</li>
          <li>Medence környék</li>
        </ul>
        <span class="service-price">12.000-20.000 Ft/m²</span>
      </div>

      <div class="service-card featured">
        <h3>Támfalak és Lépcsők</h3>
        <p>Domborzati adottságokhoz igazított kőműves megoldások.</p>
        <ul>
          <li>Természetes kő támfalak</li>
          <li>Lépcső építés</li>
          <li>Szintkülönbség kezelés</li>
        </ul>
        <span class="service-price">18.000-30.000 Ft/m²</span>
      </div>
    </div>
  </div>
</section>

<section class="block">
  <div class="container">
    <h2>II. Kerületi Referenciáink</h2>
    <div class="local-projects-grid">
      <!-- Konkrét II. kerületi projektek -->
      <div class="project-card">
        <img src="villa-rozsadomb-before-after.jpg" alt="Villa térkövezés Rózsadomb">
        <h3>Rózsadombi Villa Térkövezés</h3>
        <p>300 m² gránit térburkolat, támfalakkal és lépcsőkkel.</p>
        <span class="project-location">📍 Rózsadomb, II. kerület</span>
      </div>
      <!-- További projektek... -->
    </div>
  </div>
</section>

<section class="block block-alt">
  <div class="container">
    <h2>Gyakori Kérdések - II. Kerület</h2>
    <div class="faq-container">
      <div class="faq-item">
        <h3>Milyen engedélyek kellenek a II. kerületben térkövezéshez?</h3>
        <p>A II. kerület jelentős része műemléki védelem alatt áll. Segítünk az építési engedélyek beszerzésében.</p>
      </div>
      <div class="faq-item">
        <h3>Mennyi idő alatt tudnak kiszállni a II. kerületbe?</h3>
        <p>Sürgős esetekben 2 órán belül, normál esetben 24 órán belül érkezünk helyszíni felmérésre.</p>
      </div>
      <div class="faq-item">
        <h3>Milyen anyagokat ajánlanak villa környezetben?</h3>
        <p>Gránit és természetes kő térköveket, amelyek illeszkednek a II. kerület történelmi karakteréhez.</p>
      </div>
    </div>
  </div>
</section>

<section class="block">
  <div class="container">
    <div class="location-cta-final">
      <h2>Készen Áll a II. Kerületi Projektre?</h2>
      <p>Ingyenes helyszíni felmérés Rózsadombon és környékén. Gyors kiszállás, pontos árajánlat.</p>
      <a href="tel:+36155577283" class="cta-primary">Hívjon Most: +36 1 555 PAVE</a>
      <p class="location-guarantee">⭐ II. kerületi szakértelem 25+ éve ⭐</p>
    </div>
  </div>
</section>
```

### **SEO Optimalizáció Szolgáltatás+Lokáció Oldalakhoz:**

```html
<!-- Térkövezés II. kerület oldal -->
<title>Térkövezés II. kerület - Rózsadomb | ProStone | Villa Térburkolatok</title>
<meta name="description" content="Térkövezési szolgáltatások II. kerület, Rózsadomb. Villa térburkolatok, gránit térkövek. 25+ év helyi tapasztalat. Ingyenes felmérés.">

<!-- Kőművesség Szentendre oldal -->
<title>Kőműves Munkák Szentendre | Támfalak | ProStone Megoldások</title>
<meta name="description" content="Kőműves szolgáltatások Szentendre: támfalak, kerti falazás, lépcsők. Helyi szakértelem, gyors kiszállás. Árajánlat 24h.">
```

### **JSON-LD Schema Szolgáltatás+Lokáció Oldalakhoz:**

```json
{
  "@type": "LocalBusiness",
  "name": "ProStone Megoldások - II. Kerület",
  "description": "Térkövezési szolgáltatások Budapest II. kerületében",
  "areaServed": {
    "@type": "Place",
    "name": "Budapest II. kerület",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Budapest",
      "addressRegion": "II. kerület"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Térkövezési Szolgáltatások",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Villa Térkövezés",
          "description": "Prémium gránit térkövezés villa környezetben"
        },
        "priceRange": "15000-25000 HUF per square meter",
        "areaServed": "Budapest II. kerület"
      }
    ]
  }
}
```

---

**🚀 Minden dropdown területi link egy ilyen gyűjtő oldalra vezet + minden szolgáltatás+lokáció kombinációnak saját oldala van, NY Pavers design adaptációval!**