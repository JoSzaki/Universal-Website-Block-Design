# Szolgáltatások Oldal Létrehozási Prompt - ProStone Megoldások

## Projektcél
Hozz létre egy professzionális szolgáltatások oldalt a ProStone Megoldások térkövezési vállalkozás számára, amely a NY Pavers (https://www.nypavers.com/services/) weboldal vizuális elrendezését és struktúráját követi, de teljes mértékben magyarul és a magyar piaci igényekhez igazítva.

## Alapvető Követelmények

### 1. Technikai Specifikációk
- **Nyelv**: HTML5 + CSS3 + vanilla JavaScript
- **Responsive Design**: Mobile-first megközelítés
- **Kompatibilitás**: Modern böngészők (Chrome, Firefox, Safari, Edge)
- **Optimalizáció**: Gyors betöltés, SEO-barát struktúra
- **Stílus**: Inline CSS (mint a főoldalon) a portabilitás érdekében

### 2. Vizuális Design Követelmények
A NY Pavers alapján, de adaptálva:
- **Színséma**: Konzisztens a főoldal blue/orange témájával
  - Primary blue: #1e40af
  - Secondary blue: #3b82f6
  - Accent orange: #f97316
  - Neutral grays: #6b7280, #f8fafc
- **Tipográfia**: Segoe UI font family, hierarchikus címstruktúra
- **Layout**: Tiszta, modern, grid-alapú elrendezés

### 3. Tartalmi Struktura

#### A) Oldal Header
- Navigációs menü (konzisztens a főoldallal)
- Breadcrumb: Főoldal > Szolgáltatások
- Hero section: "Professzionális Térkövezési Szolgáltatások"
- **Header CTA Form**: Pontosan ugyanaz a call-to-action form, mint a főoldalon
  - Jobb oldali fehér kártya dizájn
  - "INGYENES FELMÉRÉS" cím
  - Kapcsolatfelvételi mezők: név, email, telefon, irányítószám, projekt részletek
  - Consent checkbox
  - "Ingyenes árajánlat kérése" gomb
  - Ugyanaz a stílus és funkcionalitás

#### B) Szolgáltatási Kategóriák (3 fő kategória)

**1. Térkő Telepítés és Burkolás**
- Beton térkövek
- Gránit térkövek
- Természetes kő burkolatok
- Járda és terasz burkolás
- Bejárati út térkövezés

**2. Kőművesség és Falazás**
- Támfalak építése
- Kerti falazás
- Díszfalak és kerítések
- Lépcsők építése
- Vízelvezetés kiépítése

**3. Javítás és Felújítás**
- Térkő javítás és csere
- Fugázás és tömítés
- Felület szintezés
- Tisztítás és ápolás
- Sürgősségi javítások

#### C) Szolgáltatási Területek
- Budapest és agglomeráció
- Pest megye
- Specifikus kerületek/városok felsorolása
- Térképes megjelenítés (opcionális)

#### D) Social Proof Szekció
- Ügyfél referenciák
- Befejezett projektek száma
- Értékelések és visszajelzések

### 4. Funkcionális Elemek

#### A) Interaktív Komponensek
- Service card hover effektek
- Expand/collapse részletek
- Képgaléria (lightbox funkcióval)
- Kapcsolatfelvételi form minden szolgáltatásnál

#### B) CTA (Call-to-Action) Elemek
- "Ingyenes Árajánlat" gombok
- Telefonszám kiemelése
- Email kapcsolatfelvétel
- "Projekt Megbeszélése" opciók

### 5. Tartalmi Irányelvek

#### A) Szolgáltatás Leírások
- **Formátum**: Rövid bevezető + kulcs előnyök + technikai részletek
- **Hossz**: 2-3 bekezdés szolgáltatásonként
- **Stílus**: Szakmai, de közérthető
- **SEO**: Kulcsszavak természetes beépítése

#### B) Vizuális Elemek
- Hero képek szolgáltatásonként
- Előtte/utána képek
- Munkafolyamat illusztrációk
- Ikon készlet (konzisztens stílusban)

### 6. Blokk-alapú Architektúra
Kövesse a főoldal block-based rendszerét:

```html
<!-- Service Hero Block -->
<section class="service-hero">
  <!-- Split layout: Bal oldal = szolgáltatási áttekintő szöveg, Jobb oldal = Header CTA Form (pont ugyanaz mint a főoldalon) -->
  <div class="hero-wrapper">
    <div class="hero-content">
      <!-- Szolgáltatási hero tartalom -->
    </div>
    <div class="header-form-card">
      <!-- PONTOSAN UGYANAZ A FORM MINT A FŐOLDALON -->
    </div>
  </div>
</section>

<!-- Service Categories Block -->
<section class="service-categories">
  <!-- 3 fő kategória card layout-ban -->
</section>

<!-- Detailed Services Block -->
<section class="detailed-services">
  <!-- Bővebb szolgáltatás leírások -->
</section>

<!-- Service Areas Block -->
<section class="service-areas">
  <!-- Kiszolgált területek -->
</section>

<!-- Portfolio Gallery Block -->
<section class="portfolio-gallery">
  <!-- Projekt képek -->
</section>

<!-- Process Block -->
<section class="work-process">
  <!-- Munkafolyamat lépései -->
</section>

<!-- Contact CTA Block -->
<section class="contact-cta">
  <!-- Záró call-to-action -->
</section>
```

### 7. SEO és Marketing Optimalizáció

#### A) Meta Információk
- **Title**: "Professzionális Térkövezési Szolgáltatások Budapest | ProStone Megoldások"
- **Description**: "Térkő telepítés, javítás és felújítás Budapesten. 25+ év tapasztalat, ingyenes árajánlat. Támfalak, járdák, bejárók térkövezése."
- **Keywords**: térkövezés, térkő telepítés, Budapest, járda burkolás, támfal építés

#### B) Helyi SEO
- Budapest és Pest megye hangsúlyozása
- Konkrét helységnevek említése
- Szolgáltatási terület térképes megjelenítése

### 8. Felhasználói Élmény (UX)

#### A) Navigáció
- Egyértelmű kategóriák
- Gyors elérhetőség minden szolgáltatáshoz
- Vissza a tetejére gomb
- Sticky navigáció

#### B) Információ Hierarchia
1. Szolgáltatási kategóriák (áttekintés)
2. Részletes szolgáltatások
3. Munkaterület
4. Kapcsolatfelvétel

#### C) Konverziós Elemek
- Több kapcsolatfelvételi pont
- Ingyenes árajánlat hangsúlyozása
- Sürgősségi elérhetőség
- Social proof elemek

### 9. Mobil Optimalizáció
- Touch-friendly gombok (min 44px)
- Egyszerűsített navigáció
- Gyors betöltés (< 3 másodperc)
- Olvasható szövegméret (16px+)

### 10. Integráció a Meglévő Rendszerrel
- Konzisztens header/footer a főoldallal
- Ugyanaz a színséma és tipográfia
- Kereszthivatkozások a főoldalra
- **FONTOS**: A header CTA form 100%-ban azonos a főoldallal
  - Ugyanaz a HTML struktúra
  - Ugyanaz a CSS osztályok és stílusok
  - Ugyanaz a JavaScript funkcionalitás
  - Ugyanaz a form validation és submit handling

---

## Létrehozási Lépések

1. **Struktúra tervezés**: HTML váz létrehozása
2. **Stílusok adaptálása**: CSS átvétele és módosítása a főoldalról
3. **Tartalom feltöltése**: Magyar szolgáltatási leírások
4. **Interaktivitás**: JavaScript funkciók implementálása
5. **Responsive tesztelés**: Mobil és desktop ellenőrzés
6. **SEO optimalizáció**: Meta tagek és struktúra finomhangolása
7. **Integráció**: Beépítés a meglévő site struktúrába

## Eredmény Elvárások
A kész oldal egy professzionális, felhasználóbarát szolgáltatások oldal legyen, amely:
- Vizuálisan tükrözi a NY Pavers oldal minőségét és struktúráját
- Teljes mértékben magyar nyelvű és kultúrához adaptált
- Maximális konverziót generál (lead-ek, telefonhívások)
- SEO optimalizált a helyi keresésekhez
- Konzisztens a ProStone Megoldások brand identitásával