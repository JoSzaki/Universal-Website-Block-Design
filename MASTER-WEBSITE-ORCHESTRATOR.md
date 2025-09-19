# 🎯 MASTER WEBSITE ORCHESTRATOR - ProStone Megoldások
## Komplett Weboldal Fejlesztési Vezérlő Prompt

---

## 📋 **Projekt Áttekintés**

**Cél:** Komplett ProStone Megoldások térkövezési vállalkozás website fejlesztése 7 fő oldallal + AI SEO blog rendszerrel

**Architektúra:** Block-based, mobile-first, AI-optimalizált, conversion-focused

**Technológia:** HTML5 + CSS3 + Vanilla JavaScript (inline CSS a portabilitás érdekében)

---

## 🗂️ **Oldal Struktúra és Navigáció**

### **Fő Navigáció (Header):**
```
[ProStone Megoldások] - Főoldal - Szolgáltatások [▼] - Szolgáltatási területek [▼] - Rólunk - Galéria - Kapcsolat
```

### **Dropdown Menü Struktúra:**
```
Szolgáltatások [▼]
├── Térkő Telepítés és Burkolás
├── Kőművesség és Falazás
├── Javítás és Felújítás
├── Támfalak Építése
├── Vízelvezetés Kialakítása
└── [Összes szolgáltatás megtekintése]

Szolgáltatási területek [▼]
├── Budapest
│   ├── I-V. kerület (Buda történelmi)
│   ├── VI-IX. kerület (Belváros)
│   ├── X-XV. kerület (Pest külső)
│   └── XVI-XXIII. kerület (Agglomeráció)
├── Pest megye
│   ├── Szentendre és környéke
│   ├── Budakeszi és környéke
│   ├── Gödöllő és környéke
│   └── Dunakeszi és környéke
└── [Teljes lefedettség megtekintése]
```

### **Footer Navigáció:**
```
Hasznos Linkek: Blog - Árak - Gyakori Kérdések - Galéria
```

### **Mappa Struktúra:**
```
universal-block-design/
├── Home/
│   └── index-updated.html (✅ KÉSZ)
├── services/
│   └── index.html (✅ KÉSZ)
│   └── services-page-prompt.md (✅ KÉSZ)
├── service-areas/ (🔄 LÉTREHOZANDÓ)
├── about/ (🔄 LÉTREHOZANDÓ)
├── gallery/ (🔄 LÉTREHOZANDÓ)
├── contact/ (🔄 LÉTREHOZANDÓ)
├── pricing/ (🔄 LÉTREHOZANDÓ)
├── blog/ (🔄 LÉTREHOZANDÓ)
│   └── ai-seo-strategy-framework.md (✅ KÉSZ)
└── blocks/ (reference library)
```

---

## 🎨 **Univerzális Design System**

### **Színséma (Minden oldalon konzisztens):**
```css
:root {
    --primary-blue: #1e40af;
    --secondary-blue: #3b82f6;
    --accent-orange: #f97316;
    --success-green: #059669;
    --neutral-gray: #6b7280;
    --light-gray: #f8fafc;
    --dark-gray: #374151;
}
```

### **Typography Hierarchy:**
```css
H1: clamp(36px, 5vw, 48px) - font-weight: 700
H2: clamp(28px, 4vw, 32px) - font-weight: 600 - color: primary-blue
H3: clamp(20px, 3vw, 24px) - font-weight: 600
P:  18px - line-height: 1.7 - color: #4b5563
```

### **Blokk-alapú Architektúra:**
```html
<!-- Minden oldal ugyanilyen blokkokból épül fel -->
<section class="hero">...</section>
<section class="block">...</section>
<section class="block block-alt">...</section>
```

---

## 📄 **Oldalankénti Részletes Promptok**

### **1. 🏠 Főoldal (KÉSZ)**
- **Status:** ✅ Elkészült
- **Fájl:** `Home/index-updated.html`
- **Jellemzők:** Hero + CTA form, szolgáltatások, folyamat, social proof, kapcsolat

### **2. 🔧 Szolgáltatások (KÉSZ)**
- **Status:** ✅ Elkészült
- **Fájl:** `services/index.html`
- **Prompt:** `services/services-page-prompt.md`

---

## 🤖 **Agent-Based Párhuzamos Fejlesztési Terv**

### **Agent 1: Service Areas Page**
**Task:** Szolgáltatási területek oldal létrehozása
**Priority:** HIGH
**Dependencies:** Főoldal design system
**Deliverable:** `service-areas/index.html` + prompt dokumentáció

### **Agent 2: About Page**
**Task:** Rólunk oldal létrehozása
**Priority:** HIGH
**Dependencies:** Brand identity, company story
**Deliverable:** `about/index.html` + prompt dokumentáció

### **Agent 3: Gallery Page**
**Task:** Projekt galéria oldal létrehozása
**Priority:** MEDIUM
**Dependencies:** Before/after fotók, projekt kategóriák
**Deliverable:** `gallery/index.html` + prompt dokumentáció

### **Agent 4: Contact Page**
**Task:** Kapcsolat oldal létrehozása (enhanced)
**Priority:** HIGH
**Dependencies:** Főoldal CTA form
**Deliverable:** `contact/index.html` + prompt dokumentáció

### **Agent 5: Pricing Page**
**Task:** Árak oldal létrehozása
**Priority:** MEDIUM
**Dependencies:** Szolgáltatási árazási stratégia
**Deliverable:** `pricing/index.html` + prompt dokumentáció

### **Agent 6: Blog System**
**Task:** AI SEO blog rendszer implementálása
**Priority:** HIGH
**Dependencies:** AI SEO strategy framework
**Deliverable:** `blog/index.html` + AI content generation

---

## 📋 **Agent Prompt Templates**

### **Standard Agent Prompt Struktúra:**
```markdown
# [OLDAL NÉV] - Részletes Fejlesztési Prompt

## Projekt Kontextus
- ProStone Megoldások térkövezési vállalkozás
- Budapesti és Pest megyei szolgáltatások
- Premium minőség, 25+ év tapasztalat

## Design Követelmények
- [Főoldal design system másolása]
- [Színséma és tipográfia konzisztencia]
- [Block-based architektúra]
- [Mobile-first responsive]
- **KÖTELEZŐ: Dropdown Navigation System implementálása**
  - Szolgáltatások dropdown: Adatgyűjtésből kapott szolgáltatásokból automatikusan
  - Szolgáltatási területek dropdown: Budapest kerületek + Pest megyei városokból
  - `navigation/dropdown-navigation-system.md` szerint

## Oldal-specifikus Célok
- [Az oldal egyedi célja és funkciója]
- [Target audience és user journey]
- [Conversion goals]

## Tartalom Struktúra
- [Blokkonkénti lebontás]
- [Minden szekció részletes leírása]
- [CTA elemek pozicionálása]
- **KÖTELEZŐ: FAQ szekció minden oldalon (3-5 kérdés)**
- **KÖTELEZŐ: JSON-LD schema implementálás minden oldalon**

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- SEO optimalizált meta tagek
- **JSON-LD Schema Markup kötelező minden oldalon:**
  - LocalBusiness schema (minden oldal)
  - FAQPage schema (FAQ szekció)
  - Service schema (ahol alkalmazható)
  - Organization schema
- Accessibility követelmények
- Performance optimalizáció

## Integráció Követelmények
- **Dropdown Navigation:** `navigation/dropdown-navigation-system.md` implementálása kötelező
- **Dropdown Generation:** `data-collection/dropdown-generation-guide.md` szerint adatból automatikus menü
- [Cross-page referenciák]
- [Form integration]
- **Schema Reference:** `schema-templates/json-ld-schemas.md` használata kötelező
```

---

## 🚀 **Fejlesztési Workflow**

### **Fázis 1: Core Pages (Parallel)**
```
□ Agent 1: Service Areas → service-areas/
□ Agent 2: About Us → about/
□ Agent 4: Contact → contact/
Status: 3 agent párhuzamosan 1 héten belül
```

### **Fázis 2: Content & Commerce (Parallel)**
```
□ Agent 3: Gallery → gallery/
□ Agent 5: Pricing → pricing/
□ Agent 6: Blog System → blog/
Status: 3 agent párhuzamosan 2. héten
```

### **Fázis 3: Integration & Testing**
```
□ Cross-page navigation testing
□ Mobile responsiveness testing
□ AI SEO content implementation
□ Performance optimization
```

---

## 🎯 **Agent-Specific Data Requirements**

### **Service Areas Agent Adatok:**
```
□ Budapest kerületek listája (I-XXIII)
□ Pest megyei városok listája
□ Kiszolgálási távolságok és időkeretek
□ Területenkénti specialitások
□ Logisztikai előnyök (telephelyek)
```

### **About Agent Adatok:**
```
□ Cégalapítás története és dátuma
□ Alapítók/vezetők bemutatása
□ 25 év során elért mérföldkövek
□ Csapat bemutatása és specialitások
□ Minősítések és tanúsítványok
□ Vállalati értékek és küldetés
```

### **Gallery Agent Adatok:**
```
□ Before/After projekt fotók
□ Szolgáltatási kategóriánkénti projektek
□ Helyszínenkénti referenciák
□ Különleges/egyedi projektek
□ Munkafázis fotók (process shots)
```

### **Contact Agent Adatok:**
```
□ Irodák címei és nyitvatartás
□ Elérhetőségi adatok (telefon, email)
□ Sürgősségi elérhetőség
□ Kapcsolatfelvételi form testreszabás
□ Térképes megjelenítés adatok
```

### **Pricing Agent Adatok:**
```
□ Szolgáltatásonkénti árazási struktúra
□ "Kezdő árak" vagy ballpark ranges
□ Árazást befolyásoló tényezők
□ Ingyenes szolgáltatások (felmérés, konzultáció)
□ Fizetési feltételek és garanciák
```

---

## 📊 **Success Metrics & Testing**

### **Technical Performance:**
```
□ Page load speed < 3 seconds
□ Mobile responsiveness (all devices)
□ SEO scores 90+ (Lighthouse)
□ Accessibility compliance (WCAG)
```

### **AI SEO Performance:**
```
□ ChatGPT recommendation testing
□ Perplexity search result tracking
□ Google AI Overview appearances
□ Local search ranking improvements
```

### **Business Conversion:**
```
□ Contact form submissions
□ Phone call tracking
□ Service inquiry quality
□ Lead-to-customer conversion rates
```

---

## 🎯 **Agent Execution Commands**

### **To Launch All Agents in Parallel:**
```
Task 1: Service Areas Page Development
Task 2: About Us Page Development
Task 3: Gallery Page Development
Task 4: Enhanced Contact Page Development
Task 5: Pricing Page Development
Task 6: AI SEO Blog System Implementation
```

### **Agent Communication Protocol:**
```
□ Shared design system reference
□ Cross-agent navigation consistency
□ Unified content tone and messaging
□ Integrated conversion optimization
```

---

**🚀 Ready to Execute: Launch all 6 agents simultaneously for maximum development velocity!**