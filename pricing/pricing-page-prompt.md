# Árak Oldal - Részletes Fejlesztési Prompt

## Projekt Kontextus
- **ProStone Megoldások** térkövezési vállalkozás
- Budapesti és Pest megyei szolgáltatások
- Premium minőség, 25+ év tapasztalat
- Transparens árazási megközelítés
- Value-based pricing kommunikáció

## Design Követelmények
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia
- Block-based architektúra követése
- **Pricing transparency:** Tiszta, érthető árstruktúra
- Trust building elemek (garanciák, minőség)
- Mobile-first responsive design
- **KÖTELEZŐ: Dropdown Navigation System implementálása**
  - Szolgáltatások dropdown: Adatgyűjtésből kapott szolgáltatásokból automatikusan
  - Szolgáltatási területek dropdown: Budapest kerületek + Pest megyei városokból
  - `navigation/dropdown-navigation-system.md` szerint

## Oldal-specifikus Célok
- **Price transparency:** Egyértelmű árazási struktúra bemutatása
- **Value communication:** Minőség-ár arány hangsúlyozása
- **Qualified lead generation:** Ár-tudatos érdeklődők megszűrése
- **Trust building:** Rejtett költségek elleni biztosítékok
- **Consultation driving:** Pontos árajánlathoz személyes konzultáció

## Tartalom Struktúra

### **Hero Szekció (Header CTA Form-mal):**
```html
<section class="hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1>Térkövezési Árak és Árajánlatok</h1>
      <p class="hero-subtitle">Transzparens árazás, rejtett költségek nélkül. Tájékoztató árak és ingyenes részletes árajánlat.</p>

      <div class="pricing-highlights">
        <div class="pricing-highlight">
          <span class="highlight-icon">💰</span>
          <span>Rejtett költségek nélkül</span>
        </div>
        <div class="pricing-highlight">
          <span class="highlight-icon">📊</span>
          <span>Részletes árbontás</span>
        </div>
        <div class="pricing-highlight">
          <span class="highlight-icon">🛡️</span>
          <span>Áralku garancia</span>
        </div>
        <div class="pricing-highlight">
          <span class="highlight-icon">📋</span>
          <span>Ingyenes felmérés</span>
        </div>
      </div>
    </div>

    <div class="header-form-card">
      <!-- AZONOS CTA FORM MINT A FŐOLDALON -->
      <h3>Pontos Árajánlat Kérés</h3>
      <p class="form-intro">Részletes felmérés alapján pontos árakat kaphat 24 órán belül.</p>
      <!-- Form fields... -->
    </div>
  </div>
</section>
```

### **Árazási Kategóriák Áttekintő:**
```html
<section class="block">
  <div class="container">
    <h2>Szolgáltatásaink Árai</h2>
    <p class="section-intro">Tájékoztató árak négyzetméter alapon. A pontos árat mindig helyszíni felmérés után adjuk meg.</p>

    <div class="pricing-categories-grid">
      <div class="pricing-category">
        <div class="category-header">
          <h3>Térkő Telepítés</h3>
          <p class="category-subtitle">Komplett térkövezési szolgáltatások</p>
        </div>
        <div class="price-range">
          <span class="price-from">7.500 Ft/m²-től</span>
          <span class="price-note">Anyag és munka</span>
        </div>
        <ul class="category-includes">
          <li>Földmunka és alapozás</li>
          <li>Térkő anyag és beszerzés</li>
          <li>Szakszerű telepítés</li>
          <li>Fugázás és tömörítés</li>
          <li>Szegélykövezés</li>
        </ul>
        <a href="#terko-details" class="category-details-btn">Részletes árak</a>
      </div>

      <div class="pricing-category">
        <div class="category-header">
          <h3>Kőművesség</h3>
          <p class="category-subtitle">Falazás és kőműves munkák</p>
        </div>
        <div class="price-range">
          <span class="price-from">12.000 Ft/m²-től</span>
          <span class="price-note">Anyag és munka</span>
        </div>
        <ul class="category-includes">
          <li>Támfalak építése</li>
          <li>Kerti falazás</li>
          <li>Lépcsők építése</li>
          <li>Kandalló burkolás</li>
          <li>Díszfalak készítése</li>
        </ul>
        <a href="#komuves-details" class="category-details-btn">Részletes árak</a>
      </div>

      <div class="pricing-category">
        <div class="category-header">
          <h3>Javítás és Felújítás</h3>
          <p class="category-subtitle">Meglévő felületek helyreállítása</p>
        </div>
        <div class="price-range">
          <span class="price-from">4.500 Ft/m²-től</span>
          <span class="price-note">Munka alapú</span>
        </div>
        <ul class="category-includes">
          <li>Térkő javítás</li>
          <li>Fugafelújítás</li>
          <li>Süllyedés javítás</li>
          <li>Felület szintezés</li>
          <li>Tisztítás és impregnálás</li>
        </ul>
        <a href="#javitas-details" class="category-details-btn">Részletes árak</a>
      </div>

      <div class="pricing-category featured">
        <div class="category-header">
          <span class="featured-badge">NÉPSZERŰ</span>
          <h3>Komplett Csomagok</h3>
          <p class="category-subtitle">Teljes projekt csomagár</p>
        </div>
        <div class="price-range">
          <span class="price-from">50.000 Ft-től</span>
          <span class="price-note">Projekt alapon</span>
        </div>
        <ul class="category-includes">
          <li>Teljes körű projektmenedzsment</li>
          <li>Anyagbeszerzés kedvezménnyel</li>
          <li>Kivitelezés garanciával</li>
          <li>Utómunkák és tisztítás</li>
          <li>5 év minőségi garancia</li>
        </ul>
        <a href="#csomag-details" class="category-details-btn">Részletes árak</a>
      </div>
    </div>
  </div>
</section>
```

### **Részletes Árbontás Szekciók:**
```html
<section class="block block-alt" id="terko-details">
  <div class="container">
    <h2>Térkő Telepítés - Részletes Árak</h2>

    <div class="detailed-pricing-table">
      <div class="pricing-table-header">
        <h3>Térkő Típusonként</h3>
        <p>Árak tartalmazzák: anyag, munkadíj, alapozás</p>
      </div>

      <div class="pricing-rows">
        <div class="pricing-row">
          <div class="service-name">
            <h4>Beton térkő 6cm</h4>
            <p>Standard minőség, színválaszték</p>
          </div>
          <div class="pricing-details">
            <span class="price-main">7.500 - 9.500 Ft/m²</span>
            <span class="price-breakdown">Anyag: 3.500 Ft/m² + Munka: 4.000-6.000 Ft/m²</span>
          </div>
        </div>

        <div class="pricing-row">
          <div class="service-name">
            <h4>Gránit térkő 8cm</h4>
            <p>Prémium tartósság, természetes</p>
          </div>
          <div class="pricing-details">
            <span class="price-main">15.000 - 22.000 Ft/m²</span>
            <span class="price-breakdown">Anyag: 8.500 Ft/m² + Munka: 6.500-13.500 Ft/m²</span>
          </div>
        </div>

        <div class="pricing-row">
          <div class="service-name">
            <h4>Antik térkő</h4>
            <p>Klasszikus megjelenés, időtálló</p>
          </div>
          <div class="pricing-details">
            <span class="price-main">12.000 - 18.000 Ft/m²</span>
            <span class="price-breakdown">Anyag: 6.000 Ft/m² + Munka: 6.000-12.000 Ft/m²</span>
          </div>
        </div>

        <div class="pricing-row">
          <div class="service-name">
            <h4>Járda burkolás</h4>
            <p>Nagyméretű lapok, gyors lefektetés</p>
          </div>
          <div class="pricing-details">
            <span class="price-main">8.500 - 12.000 Ft/m²</span>
            <span class="price-breakdown">Anyag: 4.500 Ft/m² + Munka: 4.000-7.500 Ft/m²</span>
          </div>
        </div>
      </div>

      <div class="pricing-notes">
        <h4>Az árak tartalmazásai:</h4>
        <ul>
          <li>✅ Geodéziai felmérés</li>
          <li>✅ Földmunka (30cm mélységig)</li>
          <li>✅ Alapréteg készítése</li>
          <li>✅ Szegélykövezés</li>
          <li>✅ Térkő anyag és szállítás</li>
          <li>✅ Szakszerű telepítés</li>
          <li>✅ Fugázás és tömörítés</li>
          <li>✅ Tisztítás és átvétel</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Hasonló szekciók kőművességhez és javításhoz -->
```

### **Árakat Befolyásoló Tényezők:**
```html
<section class="block">
  <div class="container">
    <h2>Ami Befolyásolja Az Árakat</h2>

    <div class="pricing-factors-grid">
      <div class="factor-card">
        <div class="factor-icon">📏</div>
        <h3>Terület Nagysága</h3>
        <div class="factor-breakdown">
          <div class="factor-range">
            <span>20-50 m²:</span>
            <span>+15% (kisebb projektek)</span>
          </div>
          <div class="factor-range">
            <span>50-100 m²:</span>
            <span>Standard árképzés</span>
          </div>
          <div class="factor-range">
            <span>100+ m²:</span>
            <span>-10% (nagyobb kedvezmény)</span>
          </div>
        </div>
      </div>

      <div class="factor-card">
        <div class="factor-icon">🎨</div>
        <h3>Mintázat Bonyolultsága</h3>
        <div class="factor-breakdown">
          <div class="factor-range">
            <span>Egyszerű minta:</span>
            <span>Standard ár</span>
          </div>
          <div class="factor-range">
            <span>Összetett minta:</span>
            <span>+20-30%</span>
          </div>
          <div class="factor-range">
            <span>Egyedi design:</span>
            <span>+30-50%</span>
          </div>
        </div>
      </div>

      <div class="factor-card">
        <div class="factor-icon">🚛</div>
        <h3>Helyszín és Hozzáférés</h3>
        <div class="factor-breakdown">
          <div class="factor-range">
            <span>Budapest belváros:</span>
            <span>+10% (logisztikai költség)</span>
          </div>
          <div class="factor-range">
            <span>Nehéz megközelítés:</span>
            <span>+15-25%</span>
          </div>
          <div class="factor-range">
            <span>Speciális szállítás:</span>
            <span>Egyedi árazás</span>
          </div>
        </div>
      </div>

      <div class="factor-card">
        <div class="factor-icon">⏰</div>
        <h3>Időzítés és Sürgősség</h3>
        <div class="factor-breakdown">
          <div class="factor-range">
            <span>Tervezett projekt:</span>
            <span>Standard ár</span>
          </div>
          <div class="factor-range">
            <span>Sürgős (7 napon belül):</span>
            <span>+20%</span>
          </div>
          <div class="factor-range">
            <span>Téli időszak:</span>
            <span>+10-15% (nehezebb körülmények)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **Ingyenes Szolgáltatások:**
```html
<section class="block block-alt">
  <div class="container">
    <h2>Ingyenes Szolgáltatásaink</h2>
    <p class="section-intro">Minden projektnél biztosított szolgáltatások külön költség nélkül.</p>

    <div class="free-services-grid">
      <div class="free-service">
        <div class="service-icon">🔍</div>
        <h3>Helyszíni Felmérés</h3>
        <p>Részletes helyszínbejárás, méretek felvétele, talaj állapotának felmérése.</p>
        <span class="service-value">Értéke: 15.000 Ft</span>
      </div>

      <div class="free-service">
        <div class="service-icon">📋</div>
        <h3>Árajánlat Készítés</h3>
        <p>Részletes, itemizált árajánlat minden költség feltüntetésével.</p>
        <span class="service-value">Értéke: 10.000 Ft</span>
      </div>

      <div class="free-service">
        <div class="service-icon">🎨</div>
        <h3>Design Tanácsadás</h3>
        <p>Anyagválasztás, színkombinációk, mintázatok szakértői ajánlása.</p>
        <span class="service-value">Értéke: 20.000 Ft</span>
      </div>

      <div class="free-service">
        <div class="service-icon">🚚</div>
        <h3>Anyagszállítás</h3>
        <p>Anyagok szállítása 25 km-es körzetben, rakodással együtt.</p>
        <span class="service-value">Értéke: 5.000-15.000 Ft</span>
      </div>

      <div class="free-service">
        <div class="service-icon">🛡️</div>
        <h3>Garanciális Kiszállás</h3>
        <p>Garanciális problémák esetén ingyenes kiszállás és értékelés.</p>
        <span class="service-value">Értéke: 8.000 Ft</span>
      </div>

      <div class="free-service">
        <div class="service-icon">📞</div>
        <h3>Műszaki Tanácsadás</h3>
        <p>Telefonos és email-es műszaki támogatás projekt során és után.</p>
        <span class="service-value">Értéke: Korlátlan</span>
      </div>
    </div>

    <div class="free-services-note">
      <p><strong>Összesen:</strong> 58.000-68.000 Ft értékű szolgáltatás minden projektnél!</p>
    </div>
  </div>
</section>
```

### **Fizetési Feltételek:**
```html
<section class="block">
  <div class="container">
    <h2>Fizetési Feltételek és Garanciák</h2>

    <div class="payment-terms-grid">
      <div class="payment-option">
        <h3>💳 Fizetési Módok</h3>
        <ul>
          <li>Készpénz (5% kedvezmény)</li>
          <li>Banki átutalás</li>
          <li>Bankkártyás fizetés</li>
          <li>Részletfizetés (egyedi megállapodás)</li>
        </ul>
      </div>

      <div class="payment-option">
        <h3>📅 Fizetési Ütemezés</h3>
        <ul>
          <li>Előleg: 30% szerződéskötéskor</li>
          <li>Köztes: 40% anyagbeszerzéskor</li>
          <li>Végszámla: 30% befejezéskor</li>
          <li>Kis projektek: 50-50% vagy egyben</li>
        </ul>
      </div>

      <div class="payment-option">
        <h3>🛡️ Garanciák</h3>
        <ul>
          <li>Munkára: 5 év garancia</li>
          <li>Anyagra: gyártói garancia szerint</li>
          <li>Süllyedésre: 3 év</li>
          <li>Színváltozásra: 2 év</li>
        </ul>
      </div>

      <div class="payment-option">
        <h3>📋 Szerződés</h3>
        <ul>
          <li>Írásos szerződés minden projektnél</li>
          <li>Részletes munkaleírás</li>
          <li>Rögzített árak és határidők</li>
          <li>Panaszkezelési eljárás</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### **Gyakori Kérdések (3-5 kérdés):**
```html
<section class="block block-alt">
  <div class="container">
    <h2>Gyakori Kérdések - Árazás</h2>
    <div class="faq-container">
      <div class="faq-item">
        <h3>Miért változhatnak a tájékoztató árak?</h3>
        <p>A végleges árat a helyszín specifikus tényezői (talajviszonyok, hozzáférhetőség, különleges igények) befolyásolhatják. Minden árajánlatot helyszíni felmérés után adunk.</p>
      </div>

      <div class="faq-item">
        <h3>Vannak rejtett költségek?</h3>
        <p>Nem. Minden költséget előre kommunikálunk: anyag, munka, szállítás, esetleges pótmunkák. Az árajánlatban minden tétel szerepel.</p>
      </div>

      <div class="faq-item">
        <h3>Miért drágábbak a gránit térkövek?</h3>
        <p>A gránit természetes kő, tartósabb és esztétikusabb, de nehezebb megmunkálni. A magasabb anyagköltség és nehezebb munkavégzés indokolja az árkülönbséget.</p>
      </div>

      <div class="faq-item">
        <h3>Kapható kedvezmény nagyobb projekteknél?</h3>
        <p>Igen, 100 m² felett 10% kedvezményt adunk. Készpénzes fizetésnél további 5% kedvezmény érvényesíthető.</p>
      </div>

      <div class="faq-item">
        <h3>Mi történik, ha a projekt drágább lesz az árajánlatnál?</h3>
        <p>Az árajánlat kötött, csak előre nem látható pótmunkák (pl. váratlan talajproblémák) esetén kerülhet sor árkorrekciókra, amit előzetesen egyeztetünk.</p>
      </div>
    </div>
  </div>
</section>
```

### **CTA Szekció:**
```html
<section class="block">
  <div class="container">
    <div class="pricing-cta-final">
      <h2>Pontos Árajánlatért Lépjen Kapcsolatba!</h2>
      <p>Az itt található árak tájékoztató jellegűek. Pontos árat helyszíni felmérés után tudunk adni.</p>

      <div class="cta-buttons-row">
        <a href="/contact/" class="cta-primary">
          <span class="cta-icon">📋</span>
          Ingyenes Felmérés
        </a>
        <a href="tel:+36155577283" class="cta-secondary">
          <span class="cta-icon">📞</span>
          Telefonos Konzultáció
        </a>
        <a href="mailto:ajanlat@prostonemegoldasok.hu" class="cta-tertiary">
          <span class="cta-icon">✉️</span>
          Email Árajánlat
        </a>
      </div>

      <div class="pricing-guarantees">
        <div class="guarantee">
          <span class="guarantee-icon">✅</span>
          <span>Ingyenes helyszíni felmérés</span>
        </div>
        <div class="guarantee">
          <span class="guarantee-icon">✅</span>
          <span>24 órán belül árajánlat</span>
        </div>
        <div class="guarantee">
          <span class="guarantee-icon">✅</span>
          <span>Kötött árak, rejtett költségek nélkül</span>
        </div>
        <div class="guarantee">
          <span class="guarantee-icon">✅</span>
          <span>5 év garancia minden munkára</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- **Interactive pricing calculator** (opcionális)
- Dynamic pricing table filtering/sorting
- SEO optimalizált meta tagek:
  - Title: "Térkövezési Árak Budapest | ProStone Árajánlat | Transzparens Árazás"
  - Description: "Térkövezési árak Budapest: 7.500 Ft/m²-től. Rejtett költségek nélkül, ingyenes felmérés. 5 év garancia. Kérjen árajánlatot!"
- **JSON-LD Schema Markup kötelező:**
  - LocalBusiness schema
  - PriceSpecification schema (részletes árazási adatokkal)
  - FAQPage schema
  - Service schema (árazási információkkal)
- Accessibility követelmények
- Performance optimalizáció

## Integráció Követelmények
- **Dropdown Navigation:** `navigation/dropdown-navigation-system.md` implementálása kötelező
- **Dropdown Generation:** `data-collection/dropdown-generation-guide.md` szerint adatból automatikus menü
- Cross-page linkek szolgáltatásokhoz és kapcsolathoz
- **Schema Reference:** `schema-templates/json-ld-schemas.md` használata kötelező
- CTA integration contact page-re
- Analytics tracking specific pricing interactions

## Konverziós Optimalizáció

### **Price Transparency Strategy:**
- Ballpark ranges adása helyett túl alacsony árak
- Minden ár tartalmaz minden költséget
- Ingyenes szolgáltatások értékének kiemelése
- Garancia részletek prominens helyen

### **Trust Building Elements:**
- "Rejtett költségek nélkül" üzenetek
- Részletes árbontás minden kategórián
- Garanciális kondíciók részletesen
- Ügyfél védelem és panaszkezelés

### **Qualification Elements:**
- Ár-kategóriák szerinti szegmentálás
- Projektnagyság alapú árazás
- Quality vs. cost trade-offs magyarázata
- Premium vs. standard opciók

## Szükséges Adatok az Implementáláshoz

### **Árazási Struktúra:**
```
□ Minden szolgáltatás ár-tartománya
□ Anyagköltségek és munkadíjak külön-külön
□ Területnagyság alapú kedvezmények
□ Szezonális árváltozások
□ Súlyosítási tényezők (komplexitás, helyszín, sürgősség)
```

### **Konkurencia Analízis:**
```
□ Piaci árak összehasonlítása
□ Value proposition differenciálása
□ Árképzési stratégia indoklása
□ Prémium szolgáltatások árazása
```

### **Költségkomponensek:**
```
□ Anyagköltségek részletesen
□ Munkadíj komponensek
□ Szállítási és logisztikai költségek
□ Overhead és profit margin
□ Garanciális tartalékok
```

### **Fizetési és Szerződési Feltételek:**
```
□ Fizetési ütemezési opciók
□ Kedvezmény rendszerek
□ Garanciális kondíciók
□ Szerződéses feltételek
□ Panaszkezelési eljárások
```

## Konverziós Célok
- Qualified lead generation
- Price-conscious customer education
- Consultation bookings increase
- Trust and transparency building
- Competitive differentiation

## Success Metrics
- Pricing page time on site
- Contact form submissions from pricing
- Phone calls initiated from pricing page
- Quote request conversions
- Price-related FAQ engagement

---

**Deliverable:** `pricing/index.html` - Transzparens, bizalomépítő árazási oldal, amely megfelelően qualifikálja a leadeket és maximalizálja az árajánlat kéréseket.