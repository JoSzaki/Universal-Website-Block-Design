# Rólunk Oldal - Részletes Fejlesztési Prompt

## Projekt Kontextus
- **ProStone Megoldások** térkövezési vállalkozás
- 25+ év tapasztalat (1999 óta)
- Családi vállalkozás, generációs tudás
- Premium minőség és megbízhatóság
- Helyi gyökerek Budapest és Pest megyében

## Design Követelmények
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia
- Block-based architektúra követése
- Személyes, emberi megközelítés a designban
- Timeline/történeti elemek integrálása
- Team fotók placeholder-ekkel

## Oldal-specifikus Célok
- **Trust building:** Megbízhatóság és tapasztalat demonstrálása
- **Human connection:** Személyes kapcsolat építése
- **Expertise positioning:** Szakértelem és tudás kiemelése
- **Local credibility:** Helyi gyökerek hangsúlyozása
- **Quality assurance:** Minőségi standardok bemutatása

## Tartalom Struktúra

### **Hero Szekció (Header CTA Form-mal):**
```html
<section class="hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1>25+ Év Tapasztalat a Térkövezésben</h1>
      <p class="hero-subtitle">Családi vállalkozás, generációs tudás, helyi gyökerek. Ismerje meg a ProStone Megoldások történetét és a csapatot.</p>
      <div class="company-highlights">
        <div>🏆 1999 óta működünk</div>
        <div>👨‍👩‍👧‍👦 Családi vállalkozás</div>
        <div>📈 5000+ befejezett projekt</div>
      </div>
    </div>
    <div class="header-form-card">
      <!-- AZONOS CTA FORM MINT A FŐOLDALON -->
    </div>
  </div>
</section>
```

### **Cégtörténet Szekció:**
```html
<section class="block">
  <h2>A ProStone Megoldások Története</h2>
  <div class="timeline">
    <!-- Évenkénti mérföldkövek -->
    <!-- 1999: Alapítás -->
    <!-- 2005: Első nagy projektek -->
    <!-- 2010: Csapat bővítése -->
    <!-- 2015: Modern technológiák -->
    <!-- 2020: Digital transformation -->
    <!-- 2024: AI SEO vezetés -->
  </div>
</section>
```

### **Csapat Bemutató:**
```html
<section class="block block-alt">
  <h2>Csapatunk</h2>
  <div class="team-grid">
    <!-- Alapítók/vezetők -->
    <!-- Mesteremberek -->
    <!-- Specialisták -->
    <!-- Minden member: fotó, név, specialitás, tapasztalat -->
  </div>
</section>
```

### **Értékek és Küldetés:**
```html
<section class="block">
  <h2>Értékeink és Küldetésünk</h2>
  <div class="values-grid">
    <!-- Minőség -->
    <!-- Megbízhatóság -->
    <!-- Innováció -->
    <!-- Ügyfélközpontúság -->
    <!-- Fenntarthatóság -->
  </div>
</section>
```

### **Minősítések és Tanúsítványok:**
```html
<section class="block block-alt">
  <h2>Minősítéseink</h2>
  <div class="certifications-grid">
    <!-- BBB A+ -->
    <!-- Építőipari engedélyek -->
    <!-- ISO tanúsítványok -->
    <!-- Szakmai szövetségek -->
  </div>
</section>
```

### **Mérföldkövek Számokban:**
```html
<section class="stats">
  <div class="stats-grid">
    <!-- 25+ év tapasztalat -->
    <!-- 5000+ projekt -->
    <!-- 15 fős csapat -->
    <!-- 98% elégedettség -->
  </div>
</section>
```

### **FAQ Szekció (3-5 kérdés):**
- "Mikor alakultak és hogyan?"
- "Miért lehet megbízni a ProStone-ban?"
- "Milyen referenciákkal rendelkeznek?"
- "Hogyan biztosítják a minőséget?"
- "Mit jelent nekik a fenntarthatóság?"

### **CTA Szekció:**
```html
<section class="block">
  <h2>Ismerje Meg Személyesen is Csapatunkat</h2>
  <!-- Személyes konzultáció felkínálása -->
  <!-- Referencia látogatás ajánlása -->
</section>
```

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- SEO optimalizált meta tagek:
  - Title: "ProStone Megoldások - 25+ Év Térkövezési Tapasztalat | Rólunk"
  - Description: "Ismerje meg a ProStone Megoldások történetét, csapatát és értékeit. Családi vállalkozás 1999 óta, 5000+ befejezett projekt Budapesten."
- **JSON-LD Schema Markup kötelező:**
  - LocalBusiness schema
  - Organization schema (részletes)
  - FAQPage schema
  - Person schema (csapat tagok)
- Timeline/történeti elemek CSS animációval
- Team fotók optimalizálása

## Integráció Követelmények
- Főoldalról "Rólunk" link
- Szolgáltatások oldalról cross-referenciák
- Schema Reference: `schema-templates/json-ld-schemas.md` használata kötelező
- Trust signal integration minden oldalon

## Szükséges Adatok az Implementáláshoz

### **Cégtörténet:**
```
□ Alapítás pontos dátuma és körülményei
□ Alapítók nevei és háttere
□ Évenkénti mérföldkövek (1999-2024)
□ Jelentős projektek és sikertörténetek
□ Vállalat fejlődésének fő állomásai
□ Technológiai fejlesztések időrendje
```

### **Csapat Adatok:**
```
□ Vezetők nevei, pozíciói, tapasztalata
□ Mesteremberek szakmai háttere
□ Csapat fotók vagy placeholder leírások
□ Minden tag specialitása és felelősségi köre
□ Csapat mérete és struktúrája
□ Képzettségek és certifikációk
```

### **Vállalati Értékek:**
```
□ Küldetési nyilatkozat
□ Alapvető értékek (5-6 db)
□ Ügyfélszolgálati filozófia
□ Minőségi standardok leírása
□ Fenntarthatósági kezdeményezések
□ Közösségi szerepvállalás
```

### **Minősítések és Tanúsítványok:**
```
□ BBB minősítés részletei
□ Építőipari engedélyek számai
□ Szakmai szövetségi tagságok
□ ISO vagy egyéb tanúsítványok
□ Biztosítási adatok
□ Garanciális információk
```

### **Statisztikai Adatok:**
```
□ Pontos működési évek száma
□ Befejezett projektek száma
□ Csapat létszáma
□ Ügyfél elégedettségi mutatók
□ Területi lefedettség számokban
□ Ismétlődő ügyfelek aránya
```

### **Személyes Történetek:**
```
□ Alapítói motivációk és vízió
□ Legnagyobb kihívások és megoldások
□ Emlékezetes projektek története
□ Ügyfél kapcsolatok építése
□ Családi vállalkozás aspektusok
```

## Célzott Kulcsszavak SEO-hoz
- "megbízható térkövező Budapest"
- "tapasztalt térkövezési vállalkozás"
- "családi térkövező cég"
- "ProStone Megoldások története"
- "térkövezési szakértők Budapest"

## Konverziós Célok
- Trust építés és credibility növelés
- Személyes kapcsolat kialakítása
- Referencia kérések generálása
- Long-term ügyfél kapcsolatok alapozása
- Ajánlási rendszer aktiválása

## Success Metrics
- Oldal időtartam növelése (dwell time)
- Trust signal clicks (certifications, testimonials)
- "Személyes konzultáció" kérések száma
- Cross-page navigation javulása
- Brand awareness mérőszámok

---

**Deliverable:** `about/index.html` - Személyes, megbízható, történet-központú rólunk oldal, amely építi a ProStone brand hitelességét és emberi kapcsolatát.