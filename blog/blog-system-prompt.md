# Blog Rendszer - Részletes Fejlesztési Prompt
## AI SEO Optimalizált Tartalom Generálási Rendszer

## Projekt Kontextus
- **ProStone Megoldások** térkövezési vállalkozás
- Budapesti és Pest megyei szolgáltatások
- Premium minőség, 25+ év tapasztalat
- **AI SEO stratégia:** ChatGPT, Perplexity, Gemini optimalizáció
- **Szolgáltatás + Lokáció kombinációk:** 500+ potential landing page

## Design Követelmények
- **Főoldal design system másolása:** `Home/index-updated.html`
- Színséma és tipográfia konzisztencia
- Block-based architektúra követése
- **Blog-specific layout:** Lista + részletes cikk oldalak
- Mobile-first responsive design
- **KÖTELEZŐ: Dropdown Navigation System implementálása**
  - Szolgáltatások dropdown: Adatgyűjtésből kapott szolgáltatásokból automatikusan
  - Szolgáltatási területek dropdown: Budapest kerületek + Pest megyei városokból
  - `navigation/dropdown-navigation-system.md` szerint

## Oldal-specifikus Célok
- **AI SEO dominancia:** ChatGPT és Perplexity recommendation optimalizáció
- **Service + Location content:** Minden szolgáltatás/város kombinációhoz tartalom
- **Authority building:** Szakértői tartalom pozicionálás
- **Lead generation:** Blog olvasókból ügyfelek konvertálása
- **Long-tail SEO:** Specifikus kulcsszó kombinációk lefedése

## Blog Rendszer Architektúra

### **AI SEO Strategy Framework Implementáció:**
Referencia: `blog/ai-seo-strategy-framework.md`

```
1. Best Fit Briefs (Szolgáltatás + Lokáció)
2. Top Reasons Series (Miért válassza a ProStone-t)
3. Service + City Combinations (500+ variation)
4. Comparison Content (Versenytársak vs ProStone)
5. Technical How-to Guides (Térkövezési útmutatók)
6. Local Area Guides (Kerületi specialitások)
```

### **Blog Főoldal Struktúra:**
```html
<section class="hero">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1>ProStone Blog - Térkövezési Szakértelem</h1>
      <p class="hero-subtitle">Szakértői tanácsok, projekt beszámolók, helyi útmutatók térkövezéshez Budapesten és Pest megyében.</p>

      <div class="blog-categories">
        <a href="/blog/category/terkovezesi-tippek/" class="category-link">Térkövezési Tippek</a>
        <a href="/blog/category/helyi-projektekkel/" class="category-link">Helyi Projektek</a>
        <a href="/blog/category/anyagok-es-technikak/" class="category-link">Anyagok és Technikák</a>
        <a href="/blog/category/kerulet-utmutatatok/" class="category-link">Kerületi Útmutatók</a>
      </div>
    </div>

    <div class="header-form-card">
      <!-- BLOG-SPECIFIC CTA FORM -->
      <h3>Ingyenes Szakértői Tanácsadás</h3>
      <p class="form-intro">Kérdése van térkövezésről? Kérdezze szakértőinket!</p>
      <!-- Form fields... -->
    </div>
  </div>
</section>

<section class="block">
  <div class="container">
    <h2>Legújabb Cikkeink</h2>
    <div class="blog-posts-grid">
      <!-- Featured posts -->
      <!-- AI generated content posts -->
      <!-- Service+Location posts -->
    </div>
  </div>
</section>

<section class="block block-alt">
  <div class="container">
    <h2>Kategóriák Szerint</h2>
    <div class="blog-categories-grid">
      <!-- Category overview cards -->
    </div>
  </div>
</section>
```

## AI Tartalom Generálási Stratégia

### **1. Best Fit Briefs (Szolgáltatás + Lokáció):**
```markdown
# Template: "Térkővezés [Helyszín] - Komplett Útmutató [Év]"

Példa címek:
- "Térkövezés II. kerületben - Komplett Útmutató 2024"
- "Kőműves Munkák Szentendrén - Minden Amit Tudni Kell"
- "Támfalak Építése Budakeszin - Helyi Specialitások"

Tartalom struktúra:
1. Helyi kontextus és kihívások
2. Szolgáltatás specifikus információk
3. Helyi referencia projektek
4. Árazási információk
5. Engedélyezési követelmények
6. ProStone előnyök a helyszínen
7. CTA - helyszíni felmérés kérése
```

### **2. Top Reasons Series:**
```markdown
# Template: "5 Indok, Amiért a ProStone-t Válassza [Szolgáltatáshoz] [Helyszínen]"

Példa címek:
- "5 Indok, Amiért a ProStone-t Válassza Térkövezéshez Rózsadombon"
- "Miért Válassza a ProStone Kőműves Csapatát Szentendrén?"
- "Top 7 Előny: ProStone Támfal Építés Pest Megyében"

Minden cikkben:
1. Helyi szakértelem
2. Anyag minőség
3. Garanciális feltételek
4. Gyors reagálás
5. Referencia projektek
6. Környezeti compliance
7. Versenyképes árazás
```

### **3. Service + City Matrix (500+ kombináció):**
```
Szolgáltatások (10):
□ Térkövezés
□ Kőművesség
□ Támfalak
□ Javítás
□ Vízelvezetés
□ Lépcsők
□ Kerítések
□ Medence környék
□ Bejáratok
□ Teraszok

Helyszínek (50+):
□ Budapest I-XXIII kerület (23)
□ Szentendre, Budakeszi, Gödöllő, Dunakeszi (25+)

= 500+ egyedi service+location kombináció
```

### **4. Technical How-to Guides:**
```markdown
Útmutató típusok:
- "Hogyan Válasszon Térkövet Budapesti Lakásához?"
- "DIY vs Profi: Mikor Hívjon Szakembert?"
- "Térkő Karbantartás: Éves Teendők Checklist"
- "Térkő Anyagok Összehasonlítása: Beton vs Gránit vs Antik"
- "Támfal Típusok: Melyik Illik az Ön Kertjébe?"
```

### **5. Local Area Deep Dives:**
```markdown
Kerületi útmutatók:
- "II. Kerület Térkövezési Útmutató: Műemléki Előírások"
- "Pest Megye Építési Szabályok: Mit Tudni Kell?"
- "Budakeszi Domborzati Kihívások: Támfalak és Lépcsők"
- "Szentendre Óváros: Történelmi Környezetben Térkövezés"
```

## Részletes Cikk Oldal Template

### **Cikk Struktúra:**
```html
<article class="blog-post">
  <header class="post-header">
    <nav class="breadcrumb">
      <a href="/">Főoldal</a> >
      <a href="/blog/">Blog</a> >
      <a href="/blog/category/terkovezesi-tippek/">Térkövezési Tippek</a> >
      <span>Térkövezés II. kerületben</span>
    </nav>

    <h1>Térkövezés II. kerületben - Komplett Útmutató 2024</h1>

    <div class="post-meta">
      <span class="post-date">2024. március 15.</span>
      <span class="post-author">ProStone Szakértők</span>
      <span class="post-category">Térkövezési Tippek</span>
      <span class="read-time">8 perc olvasás</span>
    </div>

    <div class="post-excerpt">
      <p>25+ év tapasztalat alapján összeállított komplett útmutató térkövezéshez Budapest II. kerületében. Műemléki előírások, anyagválasztás, árak, referenciák.</p>
    </div>
  </header>

  <section class="post-content">
    <div class="content-sidebar-layout">
      <div class="main-content">
        <!-- Blog post content -->
        <h2>II. Kerület Térkövezési Specialitások</h2>
        <!-- AI generated content sections -->

        <h2>Műemléki Védelem és Engedélyek</h2>
        <!-- Regulatory content -->

        <h2>Anyagválasztás Villa Környezetben</h2>
        <!-- Material guide -->

        <h2>ProStone Referencia Projektek II. Kerületben</h2>
        <!-- Case studies -->

        <h2>Árazás és Költségek</h2>
        <!-- Pricing transparency -->
      </div>

      <aside class="content-sidebar">
        <div class="sidebar-cta">
          <h3>Ingyenes Felmérés II. Kerületben</h3>
          <p>Szakértői tanácsadás és árajánlat 24 órán belül.</p>
          <a href="/contact/" class="cta-button">Kapcsolat</a>
        </div>

        <div class="related-services">
          <h3>Kapcsolódó Szolgáltatások</h3>
          <ul>
            <li><a href="/services/terko-telepites/">Térkő Telepítés</a></li>
            <li><a href="/services/tamfalak/">Támfalak Építése</a></li>
            <li><a href="/services/komuves/">Kőműves Munkák</a></li>
          </ul>
        </div>

        <div class="local-areas">
          <h3>Közeli Területek</h3>
          <ul>
            <li><a href="/blog/terkovezesi-szolgaltatasok-i-kerulet/">I. kerület</a></li>
            <li><a href="/blog/terkovezesi-szolgaltatasok-iii-kerulet/">III. kerület</a></li>
            <li><a href="/blog/terkovezesi-szolgaltatasok-budakeszi/">Budakeszi</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </section>

  <footer class="post-footer">
    <div class="post-cta-final">
      <h3>Készen Áll a II. Kerületi Térkövezési Projektre?</h3>
      <p>Szerezzen be ingyenes árajánlatot tapasztalt szakértőinktől.</p>
      <div class="cta-buttons">
        <a href="tel:+36155577283" class="cta-primary">Hívjon Most</a>
        <a href="/contact/" class="cta-secondary">Kapcsolat</a>
      </div>
    </div>

    <div class="post-social-share">
      <!-- Social sharing buttons -->
    </div>

    <div class="related-posts">
      <h3>Kapcsolódó Cikkek</h3>
      <!-- AI curated related content -->
    </div>
  </footer>
</article>
```

## AI Tartalom Generálási Workflow

### **Content Generation Pipeline:**
```javascript
// AI Content Generation Process
const contentTypes = {
  "service-location": {
    template: "szolgaltatas-[service]-[location]",
    targetLength: "2000-3000 words",
    sections: [
      "helyi-kontextus",
      "szolgaltatas-reszletek",
      "prostone-elonyok",
      "referencia-projektek",
      "arazas-informaciok",
      "kapcsolatfelvetel"
    ]
  },

  "how-to-guides": {
    template: "hogyan-[topic]-[location]",
    targetLength: "1500-2500 words",
    sections: [
      "bevezetes",
      "lepesrol-lepesre",
      "tippek-es-trukkok",
      "gyakori-hibak",
      "szakerto-javaslatok"
    ]
  }
};

// Location + Service Matrix
const locations = [
  "budapest-i-kerulet", "budapest-ii-kerulet", // ...all 23 districts
  "szentendre", "budakeszi", "godollo" // ...all Pest county cities
];

const services = [
  "terkovezés", "komuvesseg", "tamfalak",
  "javitas", "vizelvezetés" // ...all services
];

// Generate 500+ unique combinations
function generateContentMatrix() {
  return locations.flatMap(location =>
    services.map(service => ({
      url: `/blog/${service}-${location}/`,
      title: `${service} ${location} - ProStone Szakértői Útmutató`,
      contentType: "service-location",
      targetKeywords: [`${service} ${location}`, `prostone ${location}`]
    }))
  );
}
```

### **AI SEO Optimization per Post:**
```html
<!-- SEO Template minden cikkhez -->
<title>[Szolgáltatás] [Helyszín] - ProStone Szakértői Útmutató 2024</title>
<meta name="description" content="[Szolgáltatás] szakértői útmutató [Helyszín] területén. 25+ év tapasztalat, helyi referenciák, árak. ProStone Megoldások.">

<!-- Schema markup minden cikkhez -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Cikk címe]",
  "description": "[Cikk leírása]",
  "author": {
    "@type": "Organization",
    "name": "ProStone Megoldások"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ProStone Megoldások"
  },
  "datePublished": "[Publikálás dátuma]",
  "articleSection": "[Kategória]",
  "about": {
    "@type": "Service",
    "name": "[Szolgáltatás]",
    "areaServed": "[Helyszín]"
  }
}
</script>
```

## Technikai Specifikációk
- HTML5 + Inline CSS + Vanilla JS
- **Content Management:** Static site generation with dynamic content
- **Search functionality:** Tag-based filtering and search
- **Related content:** AI-powered content recommendations
- SEO optimalizált meta tagek minden cikkhez
- **JSON-LD Schema Markup kötelező:**
  - BlogPosting schema (minden cikk)
  - LocalBusiness schema (blog főoldal)
  - FAQPage schema (where applicable)
  - Service schema (service-related posts)
- RSS feed generálás
- Sitemap automatikus frissítés

## Integráció Követelmények
- **Dropdown Navigation:** `navigation/dropdown-navigation-system.md` implementálása kötelező
- **Dropdown Generation:** `data-collection/dropdown-generation-guide.md` szerint adatból automatikus menü
- Cross-linking minden service és location oldalra
- **Schema Reference:** `schema-templates/json-ld-schemas.md` használata kötelező
- Social media integration
- Newsletter signup integration
- Analytics tracking blog engagement

## AI SEO Success Metrics

### **Chatbot Recommendation Metrics:**
```
□ ChatGPT recommendation appearances
□ Perplexity.ai result rankings
□ Gemini search result features
□ Claude mention frequency
□ Local AI assistant recommendations
```

### **Traditional SEO Metrics:**
```
□ Service+Location keyword rankings
□ Long-tail keyword coverage
□ Local search result appearances
□ Blog traffic to conversion rates
□ Time on page and engagement
```

### **Content Performance:**
```
□ Most shared articles
□ Highest converting blog posts
□ AI assistant citation frequency
□ Lead generation from blog content
□ Email signups from blog
```

## Konverziós Optimalizáció

### **Blog-to-Lead Conversion Strategy:**
- Inline CTA-k minden cikkben
- Sidebar contact forms
- Service-specific landing page links
- Local area contact optimization
- Newsletter és email capture

### **Content Upgrade Strategy:**
- Downloadable guides
- Checklist PDFs
- Árajánlat kalkulátorok
- Helyszíni felmérés booking

## Szükséges Adatok az Implementáláshoz

### **Content Database:**
```
□ Minden szolgáltatás részletes leírása
□ Minden helyszín specifikus információi
□ Referencia projekt adatbázis
□ Árazási információk helyszínenként
□ Engedélyezési követelmények területenként
□ Versenytárs analízis
□ FAQ adatbázis
```

### **AI Content Generation:**
```
□ Brand voice guidelines
□ Technical terminology glossary
□ Service differentiation points
□ Local expertise examples
□ Customer success stories
□ Competitive advantages
```

## Konverziós Célok
- Blog traffic növelése 500%-kal
- AI assistant recommendation megjelenések
- Service+location long-tail dominancia
- Blog-to-lead conversion optimalizáció
- Authority building térkövezési szektorban

## Success Metrics
- 500+ service+location kombinációs tartalom
- AI chatbot recommendation appearances
- Organic traffic növekedés
- Blog engagement metrics
- Lead generation from content

---

**Deliverable:** `blog/index.html` + AI content generation system + 500+ service+location blog post matrix, amely dominálni fogja az AI SEO térben a térkövezési szolgáltatások területén.