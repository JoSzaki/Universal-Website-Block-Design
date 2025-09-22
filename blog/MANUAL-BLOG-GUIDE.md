# 📝 MANUÁLIS BLOG CREATION GUIDE

## 🎯 **Jelenlegi Megközelítés**

Amíg az automatizált AI rendszer nincs implementálva, ezt a útmutatót használhatod **manuális blog tartalom készítéshez**.

---

## 🗂️ **1. Service Analyzer Használata**

### **Első lépés: Szolgáltatás elemzés**
```bash
# A projekted szolgáltatásainak elemzése
node scripts/service-analyzer.js
```

**Ez generálja:**
- `blog/service-analysis.json` - Teljes elemzés
- `blog/content-matrix.json` - Tartalmi lehetőségek mátrixa

### **Mit kapsz:**
- ✅ Automatikusan felismert szolgáltatások
- ✅ Helyszínek kinyerése
- ✅ Iparág azonosítás
- ✅ Szolgáltatás + helyszín kombinációk (prioritás szerint)
- ✅ Content ajánlások

---

## 📋 **2. Blog Content Tervezés**

### **A. Service+Location Mátrix Használata**

A service analyzer által generált `content-matrix.json` alapján:

**Példa kimenet:**
```json
[
  {
    "service": "Térkövezés",
    "location": "Budapest I. kerület",
    "slug": "terkovezés-budapest-i-kerulet",
    "priority": 100
  },
  {
    "service": "Kőműves munkák", 
    "location": "Budakeszi",
    "slug": "komuvesmunkak-budakeszi",
    "priority": 85
  }
  // ... további kombinációk
]
```

### **B. 24 Blog Típus Template Használata**

#### **🌍 Local Angles (4 típus):**

**1. Best-Fit Brief Template:**
```markdown
Cím: "Ki a legjobb [szolgáltatás] [helyszínen]?"

Struktúra:
- Hook: Probléma felvetése
- Válasz: Miért Te vagy a legjobb
- Bizonyítékok: Tapasztalat, referenciák
- Testimonial: Valós ügyfél vélemény
- CTA: Kapcsolatfelvétel
```

**2. Top Reasons Template:**
```markdown
Cím: "5 indok, hogy miért válassza [Cég név]t [szolgáltatás]hoz"

Struktúra:
1. Tapasztalat és expertise
2. Helyi ismeret
3. Minőségi anyagok
4. Garancia és aftercare
5. Versenyképes árak
```

**3. Service/City Template:**
```markdown
Cím: "Legjobb [szolgáltatás] [helyszínen]? [Cég név] szakértelem"

Struktúra:
- Helyi bevezetés
- Szolgáltatás részletei
- Helyi specialitások
- Referencia projektek
- Árak és conditions
- Helyi CTA
```

**4. Service Comparison Template:**
```markdown
Cím: "Ki a legjobb [szolgáltatás]? Teljes összehasonlítás"

Struktúra:
- Comparison táblázat
- Saját előnyök kiemelése
- Versenytárs gyengeségek (finoman)
- Objektív eredmény (te nyersz)
```

#### **🎯 Topical Authority Angles (20 típus):**

**5. Mistakes Template:**
```markdown
Cím: "10 költséges hiba [szolgáltatás]nál"

Struktúra:
- Bevezető (miért fontos)
- 10 hiba felsorolása
- Minden hibához: mi a probléma + helyes megoldás
- Hogyan kerülhető el (a te szolgáltatásoddal)
```

**6. Step-by-Step Template:**
```markdown
Cím: "Hogyan [csináld ezt] - lépésről lépésre útmutató"

Struktúra:
- Mi szükséges hozzá
- 1-10 számozott lépés
- Minden lépéshez tipp
- Mikor hívj szakembert
```

**[További 18 template a PRODUCTION.md-ben]**

---

## 🎨 **3. Blog Post Készítés**

### **HTML Template Struktúra:**

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[60 karakter max SEO title]</title>
    <meta name="description" content="[160 karakter meta description]">
    
    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "[Cikk címe]",
        "author": {
            "@type": "Organization", 
            "name": "[Cég név]"
        },
        "publisher": {
            "@type": "Organization",
            "name": "[Cég név]"
        },
        "datePublished": "[Dátum]",
        "mainEntityOfPage": "https://domain.hu/blog/[slug]"
    }
    </script>
</head>
<body>
    <article class="blog-post">
        <header>
            <h1>[Főcím]</h1>
            <div class="meta">
                <span class="date">[Dátum]</span>
                <span class="category">[Kategória]</span>
            </div>
        </header>

        <div class="content">
            <!-- Tartalom H2, H3 tagolással -->
        </div>

        <footer class="cta-section">
            <h3>Készen áll a projektre?</h3>
            <div class="cta-buttons">
                <a href="tel:+36301234567">📞 Hívjon Most</a>
                <a href="/kapcsolat">✉️ Kapcsolat</a>
            </div>
        </footer>
    </article>
</body>
</html>
```

### **SEO Checklist minden cikknél:**
- [ ] Title tag (max 60 karakter)
- [ ] Meta description (140-160 karakter)  
- [ ] H1 tag egyedi
- [ ] H2-H3 logikus struktúra
- [ ] 5-8 belső link
- [ ] JSON-LD BlogPosting schema
- [ ] Target keywords természetesen beépítve
- [ ] CTA elhelyezés
- [ ] Mobile-friendly

---

## 📅 **4. Content Calendar Tervezés**

### **Havi Tervezés Template:**

**Hét 1: Local Focus**
- Hétfő: Best-fit brief
- Szerda: Service/City post
- Péntek: Top Reasons

**Hét 2: Authority Building** 
- Hétfő: Step-by-step guide
- Szerda: Case study
- Péntek: Mistakes post

**Hét 3: Comparison & Analysis**
- Hétfő: Service comparison
- Szerda: Industry trends
- Péntek: FAQ post

**Hét 4: Seasonal/Special**
- Hétfő: Seasonal content
- Szerda: Behind the scenes
- Péntek: Customer stories

---

## 🔗 **5. URL Structure & File Management**

### **Fájl elnevezés:**
```
blog/[slug].html

Példák:
blog/legjobb-terkovezés-budapest-i-kerulet.html
blog/komuvesseg-hibak-elkerulese.html
blog/tamfal-epites-utmutato.html
```

### **Slug generálás szabályok:**
- Kisbetűs
- Kötőjelek szóközök helyett
- Magyar ékezetek átírása (á→a, é→e, stb.)
- Max 60 karakter
- SEO friendly

---

## 📊 **6. Performance Tracking**

### **Mit kövesd nyomon:**
- [ ] Organic traffic növekedés
- [ ] Blog post engagement (time on page)
- [ ] Internal link clicks
- [ ] Contact form submissions blog-ról
- [ ] Service page visits blog-ról
- [ ] Local search rankings

### **Monthly Review:**
- Top performing posts azonosítása
- Low performing posts optimalizálása
- New content opportunities  
- Service+location gap analysis

---

## 🚀 **7. Scaling Strategies**

### **Phase 1: Foundation (1-3 hó)**
- 2-3 cikk/hét
- Service+location matrix top 20 lefedése
- Basic SEO optimization

### **Phase 2: Authority (3-6 hó)**  
- 3-4 cikk/hét
- Topical authority építés
- Advanced internal linking

### **Phase 3: Automation (6+ hó)**
- AI rendszer aktiválás
- Manual + automated mix
- Performance optimization

---

## 💡 **Tips & Best Practices**

### **Írás előtt:**
1. ✅ Service analyzer futtatás
2. ✅ Content matrix priority check
3. ✅ Competitor research (5 perc Google)
4. ✅ Template kiválasztás

### **Írás közben:**
1. ✅ Brand voice consistency  
2. ✅ Helyi expertise hangsúlyozás
3. ✅ Konkrét példák használata
4. ✅ Natural internal linking

### **Írás után:**
1. ✅ SEO checklist végigjárás
2. ✅ HTML validation
3. ✅ Mobile preview
4. ✅ Performance test

---

**🎯 Cél:** Manuális módszerrel is **professzionális, SEO-optimalizált blog content** készítése, ami később automatizálható.

**📈 Eredmény:** Organic traffic növekedés, lead generation, authority building a szakmában.