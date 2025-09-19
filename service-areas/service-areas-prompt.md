# Szolgáltatási Területek Oldal - Részletes Fejlesztési Prompt

## Projekt Kontextus
- **ProStone Megoldások** térkövezési vállalkozás
- Budapesti és Pest megyei szolgáltatások
- Premium minőség, 25+ év tapasztalat
- Helyi SEO optimalizáció központi szerepe

## Design Követelmények
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia (primary-blue, accent-orange)
- Block-based architektúra követése
- Mobile-first responsive design
- Inline CSS használata a portabilitás érdekében

## Oldal-specifikus Célok
- **Helyi SEO dominancia:** Budapest + Pest megye teljes lefedettsége
- **Service + Location kombináció** minden területre
- Gyors helyi keresés konverziók növelése
- Logisztikai előnyök és reagálási idők hangsúlyozása
- Trust building helyi referenciákkal

## Tartalom Struktúra

### **Hero Szekció (Header CTA Form-mal):**
```html
<section class="hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1>Térkövezési Szolgáltatások Budapest és Pest Megye Területén</h1>
      <p class="hero-subtitle">25+ év helyi tapasztalat, gyors kiszállás, területi specialitások</p>
      <div class="coverage-highlights">
        <div>📍 Budapest minden kerülete</div>
        <div>⚡ 2 órán belül kiszállás</div>
        <div>🏆 Helyi referenciák</div>
      </div>
    </div>
    <div class="header-form-card">
      <!-- AZONOS CTA FORM MINT A FŐOLDALON -->
    </div>
  </div>
</section>
```

### **Budapest Kerületek Szekció:**
```html
<section class="block">
  <h2>Budapest Kerületek</h2>
  <div class="districts-grid">
    <!-- I-XXIII kerületek card layout -->
    <!-- Minden kerület: specialitás + reagálási idő -->
  </div>
</section>
```

### **Pest Megyei Városok Szekció:**
```html
<section class="block block-alt">
  <h2>Pest Megyei Városok</h2>
  <div class="cities-grid">
    <!-- Szentendre, Budakeszi, Gödöllő, stb. -->
    <!-- Minden város: távolság + logisztikai előny -->
  </div>
</section>
```

### **Kiszolgálási Előnyök:**
```html
<section class="block">
  <h2>Miért Válassza Helyi Szolgáltatásunkat?</h2>
  <div class="advantages-grid">
    <!-- Gyors reagálás, helyi ismeret, területi garanciák -->
  </div>
</section>
```

### **FAQ Szekció (3-5 kérdés):**
- "Melyik területekre mennek ki?"
- "Milyen gyorsan tudnak kiszállni?"
- "Van-e extra költsége a távolabbi helyszíneknek?"
- "Ismerik a helyi építési előírásokat?"
- "Milyen referenciáik vannak a környéken?"

### **CTA Szekció:**
```html
<section class="block">
  <h2>Ellenőrizze Szolgáltatási Területünket</h2>
  <!-- Térképes vagy listás megjelenítés -->
  <!-- Kapcsolatfelvételi lehetőség -->
</section>
```

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- SEO optimalizált meta tagek:
  - Title: "Térkövezési Szolgáltatások Budapest és Pest Megye | ProStone"
  - Description: "Térkövezés Budapest minden kerületében és Pest megyében. Gyors kiszállás, helyi tapasztalat, 25+ év. Ingyenes felmérés."
- **JSON-LD Schema Markup kötelező:**
  - LocalBusiness schema
  - Place schema (szolgáltatási területek)
  - FAQPage schema
- Accessibility követelmények (alt tagek, ARIA labels)
- Performance optimalizáció (image optimization, minified inline CSS)

## Integráció Követelmények
- Navigációs linkek frissítése
- Főoldalról és szolgáltatások oldalról linkek
- Schema Reference: `schema-templates/json-ld-schemas.md` használata kötelező
- Cross-page CTA integration

## Szükséges Adatok az Implementáláshoz

### **Budapest Kerületek (I-XXIII):**
```
□ Minden kerület neve és specialitása
□ Reagálási idők kerületenként
□ Kerületi referencia projektek
□ Építési előírások területenként
□ Közlekedési viszonyok és logisztika
```

### **Pest Megyei Városok:**
```
□ Fő kiszolgált városok listája
□ Távolságok és útviszonyok
□ Városi specialitások és kihívások
□ Helyi partnerek vagy tapasztalatok
□ Városi referenciák
```

### **Logisztikai Adatok:**
```
□ Telephelyek címei
□ Kiszállási zónák és költségek
□ Reagálási idők területenként
□ Sürgősségi szolgáltatás területei
□ Anyagszállítási logisztika
```

### **Helyi Referenciák:**
```
□ Területenkénti befejezett projektek
□ Helyi ügyfél testimonialok
□ Before/after fotók helyszínekkel
□ Különleges helyi projektek
□ Helyi média megjelenések
```

## Célzott Kulcsszavak SEO-hoz
- "térkövezés Budapest [kerület]"
- "térkövező [város] Pest megye"
- "helyi térkövezési szolgáltatás"
- "térkő javítás [terület]"
- "gyors térkövezés [helyszín]"

## Konverziós Célok
- Helyi telefonhívások növelése
- Területi felmérési kérések
- Helyi email inquiries
- Social proof építés területenként

## Success Metrics
- Helyi keresések pozíció javulása
- Kerület/város specifikus forgalom növekedés
- Helyi lead minőség javulása
- Területi konverziós ráta növelés

---

**Deliverable:** `service-areas/index.html` - Teljesen funkcionális, SEO-optimalizált szolgáltatási területek oldal a ProStone brand identitás szerint.