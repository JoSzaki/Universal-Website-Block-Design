# Kapcsolat Oldal - Részletes Fejlesztési Prompt

## Projekt Kontextus
- **ProStone Megoldások** térkövezési vállalkozás
- Budapesti és Pest megyei szolgáltatások
- Premium minőség, 25+ év tapasztalat
- Lead generation és konverzió optimalizálás
- Multi-channel kapcsolatfelvételi lehetőségek

## Design Követelmények
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia
- Block-based architektúra követése
- **Enhanced CTA Form:** Főoldal form továbbfejlesztése
- Mobile-first responsive design
- **KÖTELEZŐ: Dropdown Navigation System implementálása**
  - Szolgáltatások dropdown: Adatgyűjtésből kapott szolgáltatásokból automatikusan
  - Szolgáltatási területek dropdown: Budapest kerületek + Pest megyei városokból
  - `navigation/dropdown-navigation-system.md` szerint

## Oldal-specifikus Célok
- **Lead generation maximalizálás:** Minden contact formátum optimalizálva
- **Multi-channel approach:** Telefon, email, form, chat opciók
- **Trust building:** Elérhetőségek transparenciája és hitelességi jelek
- **Local presence:** Budapest és Pest megye lefedettség hangsúlyozása
- **Emergency services:** Sürgősségi elérhetőségek kiemelése

## Tartalom Struktúra

### **Hero Szekció (Enhanced CTA Form):**
```html
<section class="hero contact-hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1>Kapcsolat - ProStone Megoldások</h1>
      <p class="hero-subtitle">Gyors válasz, pontos árajánlat, szakértői tanácsadás. Lépjen kapcsolatba velünk még ma!</p>

      <div class="contact-options-grid">
        <div class="contact-option">
          <span class="contact-icon">📞</span>
          <h3>Telefon</h3>
          <p><a href="tel:+36155577283">+36 1 555 PAVE</a></p>
          <span class="contact-note">H-P: 7:00-18:00</span>
        </div>

        <div class="contact-option">
          <span class="contact-icon">✉️</span>
          <h3>Email</h3>
          <p><a href="mailto:info@prostonemegoldasok.hu">info@prostonemegoldasok.hu</a></p>
          <span class="contact-note">24h válasz</span>
        </div>

        <div class="contact-option emergency">
          <span class="contact-icon">🚨</span>
          <h3>Sürgősség</h3>
          <p><a href="tel:+36303334444">+36 30 333 4444</a></p>
          <span class="contact-note">24/7 elérhetőség</span>
        </div>
      </div>
    </div>

    <div class="enhanced-form-card">
      <!-- ENHANCED VERSION OF CTA FORM -->
      <h3>Ingyenes Árajánlat Kérés</h3>
      <form class="contact-form-enhanced">
        <div class="form-row">
          <input type="text" name="name" placeholder="Teljes név *" required>
          <input type="tel" name="phone" placeholder="Telefonszám *" required>
        </div>
        <input type="email" name="email" placeholder="Email cím *" required>

        <select name="service" required>
          <option value="">Válassza a szolgáltatást *</option>
          <option value="terko-telepites">Térkő Telepítés</option>
          <option value="komuvesseg">Kőművesség</option>
          <option value="javitas">Javítás</option>
          <option value="tamfalak">Támfalak</option>
          <option value="vizelvezetés">Vízelvezetés</option>
          <option value="surgosseg">Sürgősségi javítás</option>
        </select>

        <select name="location">
          <option value="">Helyszín (opcionális)</option>
          <option value="budapest">Budapest</option>
          <option value="pest-megye">Pest megye</option>
        </select>

        <textarea name="message" placeholder="Projekt részletei, kérdések..."></textarea>

        <div class="form-extras">
          <label>
            <input type="checkbox" name="urgency"> Sürgős projekt (48h)
          </label>
          <label>
            <input type="checkbox" name="site-visit"> Helyszíni felmérés kérése
          </label>
        </div>

        <button type="submit" class="cta-button">Ajánlatot Kérek</button>
        <p class="form-note">*Kötelező mezők. 24 órán belül válaszolunk.</p>
      </form>
    </div>
  </div>
</section>
```

### **Irodák és Elérhetőségek:**
```html
<section class="block">
  <div class="container">
    <h2>Irodáink és Elérhetőségeink</h2>

    <div class="offices-grid">
      <div class="office-card">
        <h3>Központi Iroda - Budapest</h3>
        <div class="office-details">
          <p><strong>Cím:</strong> 1055 Budapest, Kossuth Lajos tér 1.</p>
          <p><strong>Telefon:</strong> <a href="tel:+36155577283">+36 1 555 PAVE</a></p>
          <p><strong>Email:</strong> <a href="mailto:budapest@prostonemegoldasok.hu">budapest@prostonemegoldasok.hu</a></p>
          <p><strong>Nyitvatartás:</strong></p>
          <ul>
            <li>Hétfő-Péntek: 7:00-18:00</li>
            <li>Szombat: 8:00-16:00</li>
            <li>Vasárnap: Zárva</li>
          </ul>
        </div>
        <div class="office-services">
          <h4>Szolgáltatások:</h4>
          <ul>
            <li>Személyes konzultáció</li>
            <li>Anyagminta megtekintés</li>
            <li>Projekt tervezés</li>
            <li>Árajánlat készítés</li>
          </ul>
        </div>
      </div>

      <div class="office-card">
        <h3>Raktár és Bemutató - Pest megye</h3>
        <div class="office-details">
          <p><strong>Cím:</strong> 2000 Szentendre, Ipari út 15.</p>
          <p><strong>Telefon:</strong> <a href="tel:+36267778899">+36 26 777 8899</a></p>
          <p><strong>Email:</strong> <a href="mailto:raktar@prostonemegoldasok.hu">raktar@prostonemegoldasok.hu</a></p>
          <p><strong>Nyitvatartás:</strong></p>
          <ul>
            <li>Hétfő-Péntek: 7:00-17:00</li>
            <li>Szombat: 8:00-15:00</li>
            <li>Vasárnap: Előzetes egyeztetéssel</li>
          </ul>
        </div>
        <div class="office-services">
          <h4>Szolgáltatások:</h4>
          <ul>
            <li>Anyag átvétel</li>
            <li>Bemutató parcellák</li>
            <li>Technikai konzultáció</li>
            <li>Gépjármű be-/kirakodás</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **Térképes Megjelenítés:**
```html
<section class="block block-alt">
  <div class="container">
    <h2>Térképes Elérhetőség</h2>

    <div class="maps-container">
      <!-- Google Maps embed vagy interaktív térkép -->
      <div class="map-embed">
        <iframe src="https://www.google.com/maps/embed/..."
                width="100%" height="400" style="border:0;"
                allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div class="map-info">
        <h3>Megközelítés</h3>
        <div class="transport-options">
          <div class="transport">
            <h4>🚗 Autóval</h4>
            <ul>
              <li>M0 körgyűrű - 15 perc</li>
              <li>Ingyenes parkolás</li>
              <li>Nagy jármű behajtási lehetőség</li>
            </ul>
          </div>

          <div class="transport">
            <h4>🚌 Tömegközlekedéssel</h4>
            <ul>
              <li>M3 metró + 106 busz</li>
              <li>Kossuth tér állomás - 200m</li>
              <li>HÉV végállomás - 500m</li>
            </ul>
          </div>
        </div>

        <div class="service-areas-map">
          <h4>Kiszolgálási Területek</h4>
          <p>25 km-es körzetben gyors kiszállás:</p>
          <ul>
            <li>Budapest: Minden kerület</li>
            <li>Pest megye: 30+ város</li>
            <li>Különleges kiszállás: Egyedi megállapodás</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **Kapcsolatfelvételi Módok:**
```html
<section class="block">
  <div class="container">
    <h2>Hogyan Léphet Kapcsolatba Velünk?</h2>

    <div class="contact-methods-grid">
      <div class="contact-method">
        <div class="method-icon">📞</div>
        <h3>Telefonos Kapcsolat</h3>
        <p>Azonnali válasz, személyes konzultáció</p>
        <ul>
          <li><strong>Központi szám:</strong> <a href="tel:+36155577283">+36 1 555 PAVE</a></li>
          <li><strong>Sürgősség:</strong> <a href="tel:+36303334444">+36 30 333 4444</a></li>
          <li><strong>Műszaki kérdések:</strong> <a href="tel:+36305556666">+36 30 555 6666</a></li>
        </ul>
        <p class="method-note">Hívjon bizalommal munkaidőben vagy sürgősség esetén!</p>
      </div>

      <div class="contact-method">
        <div class="method-icon">✉️</div>
        <h3>Email Kapcsolat</h3>
        <p>Részletes információcsere, dokumentumok</p>
        <ul>
          <li><strong>Általános:</strong> <a href="mailto:info@prostonemegoldasok.hu">info@prostonemegoldasok.hu</a></li>
          <li><strong>Árajánlat:</strong> <a href="mailto:ajanlat@prostonemegoldasok.hu">ajanlat@prostonemegoldasok.hu</a></li>
          <li><strong>Műszaki:</strong> <a href="mailto:muszaki@prostonemegoldasok.hu">muszaki@prostonemegoldasok.hu</a></li>
        </ul>
        <p class="method-note">24 órán belül válaszolunk minden megkeresésre!</p>
      </div>

      <div class="contact-method">
        <div class="method-icon">📍</div>
        <h3>Személyes Látogatás</h3>
        <p>Iroda, bemutató, anyagválasztás</p>
        <ul>
          <li><strong>Előzetes egyeztetés:</strong> Javasolt</li>
          <li><strong>Anyagminták:</strong> Helyben megtekinthetők</li>
          <li><strong>Projekt tervezés:</strong> Személyesen</li>
        </ul>
        <p class="method-note">Látogasson el irodáinkba személyes konzultációért!</p>
      </div>

      <div class="contact-method">
        <div class="method-icon">🏠</div>
        <h3>Helyszíni Felmérés</h3>
        <p>Ingyenes szakértői felmérés otthonában</p>
        <ul>
          <li><strong>Ingyenes:</strong> Budapesten és 25 km-es körzetben</li>
          <li><strong>Időpont:</strong> 24-48 órán belül</li>
          <li><strong>Árajánlat:</strong> Helyszínen vagy email-ben</li>
        </ul>
        <p class="method-note">Kérjen helyszíni felmérést pontos árajánlatért!</p>
      </div>
    </div>
  </div>
</section>
```

### **Gyakori Kérdések (3-5 kérdés):**
```html
<section class="block block-alt">
  <div class="container">
    <h2>Gyakori Kérdések - Kapcsolat</h2>
    <div class="faq-container">
      <div class="faq-item">
        <h3>Milyen gyorsan tudnak válaszolni a megkeresésemre?</h3>
        <p>Telefonos megkeresésekre azonnal, email-ekre 24 órán belül válaszolunk. Sürgős esetekben a 24/7 telefonszámunkon is elérhet minket.</p>
      </div>

      <div class="faq-item">
        <h3>Ingyenes a helyszíni felmérés?</h3>
        <p>Igen, Budapesten és 25 km-es körzetben ingyenes a helyszíni felmérés és árajánlat készítés. Ennél nagyobb távolságokra egyedi megállapodás szerint.</p>
      </div>

      <div class="faq-item">
        <h3>Milyen módon kérhetek árajánlatot?</h3>
        <p>Árajánlatot telefonon, email-ben, webes űrlapon vagy személyesen kérhet. A legpontosabb árajánlatért javasoljuk a helyszíni felmérést.</p>
      </div>

      <div class="faq-item">
        <h3>Elérhető sürgősségi szolgáltatás?</h3>
        <p>Igen, sürgős javítások és vészhelyzetek esetén 24/7 elérhetőek vagyunk a +36 30 333 4444 telefonszámon.</p>
      </div>

      <div class="faq-item">
        <h3>Mely területeken szolgálnak ki?</h3>
        <p>Budapest minden kerületében és Pest megye 30+ városában. Részletes szolgáltatási területekért tekintse meg szolgáltatási területek oldalunkat.</p>
      </div>
    </div>
  </div>
</section>
```

### **CTA Szekció:**
```html
<section class="block">
  <div class="container">
    <div class="contact-cta-final">
      <h2>Készen Áll a Kapcsolatfelvételre?</h2>
      <p>Ne habozzon! Csapatunk várja a hívását szakértői tanácsadásért és pontos árajánlatért.</p>

      <div class="cta-buttons-row">
        <a href="tel:+36155577283" class="cta-primary">
          <span class="cta-icon">📞</span>
          Hívjon Most
        </a>
        <a href="mailto:info@prostonemegoldasok.hu" class="cta-secondary">
          <span class="cta-icon">✉️</span>
          Email Küldés
        </a>
        <a href="#contact-form" class="cta-tertiary">
          <span class="cta-icon">📝</span>
          Űrlap Kitöltése
        </a>
      </div>

      <p class="response-guarantee">
        <strong>⭐ Válasz Garancia:</strong> 24 órán belül válaszolunk minden megkeresésre!
      </p>
    </div>
  </div>
</section>
```

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- **Enhanced form functionality:** Validáció, conditional fields, multi-step opció
- **Contact form integrations:** Email, CRM, analytics tracking
- SEO optimalizált meta tagek:
  - Title: "Kapcsolat - ProStone Megoldások | Térkövezés Budapest | Azonnali Árajánlat"
  - Description: "ProStone kapcsolat: +36 1 555 PAVE | Ingyenes helyszíni felmérés Budapesten | 24h email válasz | Sürgősségi szolgáltatás 24/7"
- **JSON-LD Schema Markup kötelező:**
  - LocalBusiness schema (részletes contact adatokkal)
  - FAQPage schema (FAQ szekció)
  - ContactPage schema
  - Place schema (irodák lokációkkal)
- Accessibility követelmények (WCAG compliance)
- Form validation és error handling

## Integráció Követelmények
- **Dropdown Navigation:** `navigation/dropdown-navigation-system.md` implementálása kötelező
- **Dropdown Generation:** `data-collection/dropdown-generation-guide.md` szerint adatból automatikus menü
- CTA form integration minden oldalról
- **Schema Reference:** `schema-templates/json-ld-schemas.md` használata kötelező
- Google Analytics és tag manager integráció
- Phone tracking és call analytics
- CRM integráció (opcionális)

## Konverziós Optimalizáció

### **Multi-Channel Approach:**
- Telefon (azonnali)
- Email (részletes)
- Form (strukturált)
- Chat (opcionális)
- Személyes (bizalom)

### **Trust Signals:**
- Válasz garanciák
- Elérhetőségi transparencia
- 24/7 sürgősségi opció
- Ingyenes felmérés kiemelés
- Irodák fizikai címei

### **Urgency Creators:**
- "24 órán belül válasz"
- "Ingyenes felmérés"
- "Sürgősségi elérhetőség"
- "Azonnali telefonos válasz"

## Szükséges Adatok az Implementáláshoz

### **Irodák és Elérhetőségek:**
```
□ Központi iroda címe és nyitvatartása
□ Összes telefonszám és funkciójuk
□ Email címek kategorizálva
□ Raktár/bemutató helyszín adatai
□ Sürgősségi elérhetőségek
□ Parkolási és megközelítési információk
```

### **Szolgáltatási Területek:**
```
□ Pontos kiszolgálási területek listája
□ Ingyenes kiszállás határai
□ Sürgősségi szolgáltatás területei
□ Speciális feltételek távolabbi területekre
□ Logisztikai költségek és feltételek
```

### **Válaszidők és Garanciák:**
```
□ Átlagos email válaszidő
□ Telefonos elérhetőségi idők
□ Helyszíni felmérés beütemezési idők
□ Sürgősségi reagálási idők
□ Árajánlat elkészítési időkeret
```

### **Form Integration:**
```
□ CRM vagy email rendszer specifikációi
□ Form validation követelmények
□ Analytics tracking kódok
□ Auto-response email template-ek
□ Lead routing és értesítési beállítások
```

## Konverziós Célok
- Contact form submissions
- Phone call initiations
- Email inquiries
- Site visit bookings
- Emergency service requests

## Success Metrics
- Form completion rate
- Phone click-through rate
- Email click-through rate
- Response time compliance
- Lead quality scoring

---

**Deliverable:** `contact/index.html` - Komprehenzív kapcsolat oldal, amely maximalizálja a lead generation-t és minden csatornán optimalizálja a konverziót.