# 📸 IMAGE REQUIREMENTS - Részletes Asset Specifikáció

## 📋 **Projekt Képanyag Követelmény Dokumentáció**

Ez a dokumentum részletesen meghatározza, hogy **pontosan milyen képek szükségesek** minden asset mappába egy professzionális szakipari weboldal elkészítéséhez.

---

## 📁 **images/heroes/** - Hero Háttérképek

### **Kötelező képek (minimum 5 db):**

#### **1. hero-main.jpg** - Főoldal hero
```
Tartalom: Szakember munkavégzés közben, dinamikus kompozíció
Felbontás: 1920x1080 minimum (16:9 aspect ratio)
Világítás: Természetes fény, golden hour preferált
Fókusz: Előtérben szakember, háttérben elmosott munkaterület
Példa: Térkő lerakása közben, koncentrált arckifejezés
```

#### **2. hero-services.jpg** - Szolgáltatások oldal
```
Tartalom: Eszközök és anyagok professzionális elrendezésben
Felbontás: 1920x1080 minimum
Kompozíció: Flat lay vagy 45 fokos szög
Tisztaság: Rendezett, tiszta eszközök
Példa: Térkő minták, szerszámok, mérőeszközök
```

#### **3. hero-about.jpg** - Rólunk oldal
```
Tartalom: Teljes csapat vagy vezető szakember portré
Felbontás: 1920x1080 minimum
Környezet: Befejezett projekt előtt vagy műhelyben
Öltözet: Egységes munkaruha, tiszta megjelenés
Példa: Csapat egy befejezett térkövezett udvar előtt
```

#### **4. hero-gallery.jpg** - Galéria oldal
```
Tartalom: Leglátványosabb befejezett projekt
Felbontás: 1920x1080 minimum
Megvilágítás: Esti vagy napnyugta megvilágítás
Perspektíva: Széles látószög, teljes projekt látható
Példa: Kivilágított kerti térkövezés madártávlatból
```

#### **5. hero-contact.jpg** - Kapcsolat oldal
```
Tartalom: Szakember ügyfél konzultáción
Felbontás: 1920x1080 minimum
Interakció: Tervrajz megbeszélése, jegyzetelés
Hangulat: Professzionális, barátságos
Példa: Tablet/tervrajz felett konzultáció
```

### **Technikai követelmények:**
```
□ Formátum: JPEG elsődleges + WebP optimalizált verzió
□ Fájlméret: Max 500KB (JPEG), max 300KB (WebP)
□ Overlay compatibility: 60-70% sötétítés tolerancia szöveg olvashatósághoz
□ Mobile crop: Központi 1:1 terület mobilra optimalizálva
□ Loading: Progressive JPEG kódolás
```

---

## 📁 **images/gallery/** - Projekt Galéria Rendszer

### **📂 gallery/before/** - Előtte Fotók

#### **Kötelező dokumentáció minden projekthez:**
```
projekt-01-before.jpg → projekt-15-before.jpg (minimum)

Tartalmi követelmények:
□ Eredeti állapot tisztán látható
□ Ugyanaz a szög mint az "after" fotón
□ Problémák jól dokumentálva (repedések, egyenetlenségek)
□ Nappal, természetes fényviszonyok
□ Wide shot + detail shot párosítás

Technikai:
- Felbontás: 1200x800 minimum
- Metaadat: Dátum, helyszín GPS
- Fájlméret: max 300KB
```

### **📂 gallery/after/** - Utána Fotók

#### **Párosított dokumentáció:**
```
projekt-01-after.jpg → projekt-15-after.jpg

Tartalmi követelmények:
□ PONTOSAN ugyanaz a szög mint "before"
□ Tiszta, rendezett végeredmény
□ Legjobb megvilágítás (golden hour ajánlott)
□ Részletfotók a minőségi munkáról
□ Wide shot + detail shot + artistic shot

Technikai:
- Felbontás: 1200x800 minimum
- HDR feldolgozás megengedett
- Fájlméret: max 300KB
- Vízjel: Diszkrét logó jobb alsó sarokban
```

### **📂 gallery/process/** - Munkafázis Fotók

#### **5 fázis dokumentálása:**
```
1. process-preparation-XX.jpg (előkészítés)
   - Területfelmérés, jelölések
   - Anyagok kiszállítása

2. process-foundation-XX.jpg (alapozás)
   - Földmunkák, alapozás
   - Szintezés folyamata

3. process-execution-XX.jpg (kivitelezés)
   - Aktív munkavégzés
   - Technika bemutatása

4. process-finishing-XX.jpg (befejezés)
   - Fugázás, tisztítás
   - Utolsó simítások

5. process-completion-XX.jpg (átadás)
   - Tiszta munkaterület
   - Elégedett ügyfél (ha engedélyezett)
```

---

## 📁 **images/services/** - Szolgáltatás Specifikus Képek

### **Minden szolgáltatáshoz 3-5 kép:**

#### **Példa: Térkő Telepítés**
```
service-terko-01-materials.jpg
- Különböző térkő típusok, minták
- Színválaszték bemutatása
- Minőségi anyagok közelről

service-terko-02-process.jpg
- Telepítés közbeni akció fotó
- Speciális technika bemutatása
- Precíz munkavégzés

service-terko-03-result.jpg
- Befejezett térkövezett felület
- Különböző mintázatok példái
- Részletfotó a fugázásról

service-terko-04-tools.jpg
- Professzionális eszközök
- Speciális gépek működés közben
- Mérőeszközök használata

service-terko-05-infographic.png
- Rétegrend infografika
- Munkafázisok vizuális folyamatábra
- Árazási kategóriák vizuális
```

### **Szolgáltatás fotó követelmények:**
```
□ Felbontás: 800x600 minimum
□ Háttér: Tiszta, nem zavaró
□ Világítás: Egyenletes, árnyékmentes
□ Formátum: JPEG + WebP
□ Infografikák: PNG vagy SVG
```

---

## 📁 **images/team/** - Csapat és Szakember Fotók

### **Kötelező portrék:**

#### **team-leader.jpg** - Vezető szakember
```
Kompozíció: Környezetében (munkaterület/projekt előtt)
Póz: Magabiztos, szakmai, de barátságos
Öltözet: Tiszta, márkázott munkaruha
Felbontás: 800x800 (négyzet crop)
Háttér: Elmosott (bokeh) vagy releváns környezet
```

#### **team-group.jpg** - Csoportkép
```
Helyszín: Befejezett projekt vagy műhely
Elrendezés: Természetes, nem merev
Létszám: Teljes csapat
Felbontás: 1200x800
Hangulat: Csapategység, professzionalizmus
```

#### **team-action-XX.jpg** - Munka közben
```
Tartalom: Szakemberek együttműködés közben
Dinamika: Természetes munkamozzanatok
Fókusz: Csapatmunka hangsúlyozása
Felbontás: 1200x800
Példa: Közös probléma megoldás, konzultáció
```

### **Portré követelmények:**
```
□ Szemkontaktus a kamerával (portrénál)
□ Professzionális világítás
□ Retusálás: Minimális, természetes
□ Naming: team-[pozicio]-[nev].jpg
□ Alt text: "[Név] - [pozíció] a [cégnév]-nál"
```

---

## 📁 **images/certificates/** - Minősítések és Tanúsítványok

### **Dokumentumok szkennelése:**

#### **cert-qualification-XX.jpg** - Szakmai képesítések
```
Követelmények:
□ 300 DPI szkennelés
□ Tiszta, olvasható szöveg
□ Hivatalos pecsétek láthatók
□ Fájlméret: max 500KB
□ Vízjel: "Hiteles másolat"
```

#### **cert-award-XX.jpg** - Díjak, elismerések
```
Fotózás:
□ Keretes díjak esetén: frontális, tükröződésmentes
□ Érmek, plakettek: Fehér háttér, soft box világítás
□ Felbontás: 1200x800
```

#### **cert-insurance.jpg** - Biztosítási igazolás
```
Követelmények:
□ Érzékeny adatok kitakarása
□ Érvényességi dátum látható
□ Biztosító logója tisztán
```

#### **cert-membership-XX.png** - Szakmai tagságok
```
Logók használata:
□ Hivatalos logók eredeti formátumban
□ Használati engedély dokumentálva
□ PNG átlátszó háttérrel
□ Min. 200px szélesség
```

---

## 📁 **images/icons/** - Ikon Rendszer

### **Szolgáltatás ikonok (SVG kötelező):**

#### **Alapkövetelmények:**
```
icon-service-terko.svg
icon-service-komuvesseg.svg
icon-service-tamfal.svg
icon-service-vizelvezetés.svg
icon-service-javitas.svg

Specifikációk:
□ Méret: 64x64px viewBox
□ Stílus: Line icons vagy filled, konzisztens
□ Szín: Monochrome, CSS-sel színezhető
□ Stroke: 2px egyenletes
□ Optimalizált: SVGO-val tisztított
```

### **Folyamat ikonok (5 fázis):**
```
icon-process-1-preparation.svg (előkészítés)
icon-process-2-foundation.svg (alapozás)
icon-process-3-execution.svg (kivitelezés)
icon-process-4-finishing.svg (befejezés)
icon-process-5-maintenance.svg (karbantartás)

Design koncepció:
□ Vizuálisan összefüggő sorozat
□ Számozás integrálva a designba
□ Progress indikátor kompatibilis
```

### **UI/UX ikonok:**
```
icon-phone.svg
icon-email.svg
icon-location.svg
icon-clock.svg
icon-calendar.svg
icon-check.svg
icon-arrow-right.svg
icon-menu.svg
icon-close.svg

Social media:
icon-facebook.svg
icon-instagram.svg
icon-youtube.svg
icon-linkedin.svg
```

---

## 🎨 **Általános Képminőségi Követelmények**

### **Optimalizálási checklist:**
```
□ Formátumok: JPEG + WebP (képek), SVG (ikonok, logók), PNG (átlátszó)
□ Compression: 85% quality JPEG, lossless WebP
□ Lazy loading: data-src attribútum használata
□ Responsive: srcset 3 méretben (mobile, tablet, desktop)
□ CDN ready: Tiszta fájlnevek, no space, lowercase
□ SEO: Beszédes fájlnevek (terko-telepites-budapest.jpg)
```

### **Alt Text Sablon Példák:**
```
Hero: "ProStone Megoldások szakemberei térkő telepítés közben Budapesten"
Gallery: "Előtte-utána: udvari térkövezés projekt Budakeszin"
Service: "Granite térkő minták és színválaszték bemutatása"
Team: "Kovács János térkövező mester 25 év tapasztalattal"
Process: "Térkő alapozási rétegrend kialakítása homokágyban"
Certificate: "Magyar Építész Kamara tagság igazolás 2024"
```

### **Fájlnév Konvenciók:**
```
Pattern: [category]-[specifikus]-[sorszam].jpg
Példák:
- hero-homepage-01.jpg
- gallery-projekt-terasz-before.jpg
- service-terko-materials-02.jpg
- team-kovacs-janos.jpg
- icon-service-terko.svg
- cert-qualification-mek.jpg

Szabályok:
□ Csak lowercase
□ Kötőjel elválasztó
□ No space, no special chars
□ Magyar ékezetek nélkül
```

---

## 📊 **Mennyiségi Követelmények Összefoglaló**

### **Minimum képmennyiség új projekt indításához:**

```
Hero képek:           5 db
Gallery projektek:   15 projekt x 3 kép = 45 db
Services:            5 szolgáltatás x 4 kép = 20 db
Team fotók:          5-10 db
Certificates:        3-5 db
Ikonok:             25-30 db
-----------------------------------
ÖSSZESEN:           ~100-120 db kép/ikon
```

### **Prioritási sorrend:**
```
1. KRITIKUS: Hero képek (minden oldal betöltődik vele)
2. KRITIKUS: Service ikonok (navigáció része)
3. FONTOS: Gallery before/after (social proof)
4. FONTOS: Team leader portré (bizalom építés)
5. KÖZEPES: Process fotók (szakértelem demonstráció)
6. ALACSONY: Certificates (footer vagy about oldal)
```

---

## 🚀 **Képfeltöltési Checklist**

### **Minden kép feltöltése előtt:**
```
□ Fájlméret optimalizálva (PageSpeed Insights 90+)
□ Fájlnév SEO-barát és konvenció szerint
□ Alt text elkészítve
□ WebP verzió generálva
□ Responsive verziók (320w, 768w, 1920w)
□ Lazy loading tag hozzáadva
□ Metaadatok tisztítva (EXIF eltávolítva)
□ Színprofil: sRGB web standard
□ Copyright watermark (ha szükséges)
□ Model release (ha emberek szerepelnek)
```

---

**📝 Megjegyzés:** Ez a specifikáció univerzálisan alkalmazható bármilyen szakipari weboldalhoz. A példák térkövezésre vonatkoznak, de a struktúra és követelmények azonosak maradnak más szakmák esetén is.