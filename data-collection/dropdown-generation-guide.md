# Dropdown Menü Automatikus Generálási Útmutató
## Adatgyűjtésből Navigáció Létrehozása

---

## 📊 **Adatgyűjtési Input → Dropdown Output**

### **1. Szolgáltatások Dropdown Generálása**

#### **Input Adat (Kérdőívből):**
```
□ Fő szolgáltatási kategóriák (3-6 db):
  - Példa: "Térkő Telepítés", "Kőművesség", "Javítás"

□ Al-szolgáltatások kategóriánként:
  - Térkő Telepítés: "Beton térkövek", "Gránit térkövek", "Járda burkolás"
  - Kőművesség: "Támfalak", "Kerti falazás", "Lépcsők"
  - Javítás: "Térkő javítás", "Fugázás", "Felület szintezés"

□ Speciális szolgáltatások:
  - Példa: "Sürgősségi javítások", "Vízelvezetés", "24/7 szolgáltatás"
```

#### **Generált Dropdown Struktúra:**
```html
<ul class="dropdown-menu">
  <!-- Fő kategóriák -->
  <li><a href="/services/#terko-telepites">Térkő Telepítés és Burkolás</a></li>
  <li><a href="/services/#komuvesseg">Kőművesség és Falazás</a></li>
  <li><a href="/services/#javitas">Javítás és Felújítás</a></li>

  <!-- Speciális szolgáltatások -->
  <li class="dropdown-divider"></li>
  <li><a href="/services/#surgossegi">Sürgősségi Javítások</a></li>
  <li><a href="/services/#vizelvezetés">Vízelvezetés Kialakítása</a></li>

  <!-- Footer link -->
  <li class="dropdown-divider"></li>
  <li><a href="/services/" class="dropdown-all">Összes szolgáltatás megtekintése</a></li>
</ul>
```

---

### **2. Szolgáltatási Területek Dropdown Generálása**

#### **Input Adat (Kérdőívből):**
```
□ Budapest kerületek (választható):
  - I-V. kerület (Budai történelmi mag)
  - VI-IX. kerület (Belváros és környéke)
  - X-XV. kerület (Pest külső kerületek)
  - XVI-XXIII. kerület (Külső agglomeráció)
  - VAGY: Teljes lista I-XXIII

□ Pest megyei városok:
  - Szentendre és környéke
  - Budakeszi és környéke
  - Gödöllő és környéke
  - Dunakeszi és környéke
  - Érd és környéke
  - [További városok...]

□ Kiszolgálási prioritások:
  - Elsődleges területek (gyors kiszállás)
  - Másodlagos területek (normál kiszállás)
  - Speciális területek (egyedi feltételek)
```

#### **Generált Dropdown Struktúra:**
```html
<ul class="dropdown-menu dropdown-areas">
  <!-- Budapest szekció -->
  <li class="dropdown-header">Budapest</li>
  <li><a href="/service-areas/#budapest-buda">I-V. kerület (Budai történelmi)</a></li>
  <li><a href="/service-areas/#budapest-belvaros">VI-IX. kerület (Belváros)</a></li>
  <li><a href="/service-areas/#budapest-pest">X-XV. kerület (Pest külső)</a></li>
  <li><a href="/service-areas/#budapest-agglo">XVI-XXIII. kerület (Agglomeráció)</a></li>

  <li class="dropdown-divider"></li>

  <!-- Pest megye szekció -->
  <li class="dropdown-header">Pest megye</li>
  <li><a href="/service-areas/#szentendre">Szentendre és környéke</a></li>
  <li><a href="/service-areas/#budakeszi">Budakeszi és környéke</a></li>
  <li><a href="/service-areas/#godollo">Gödöllő és környéke</a></li>
  <li><a href="/service-areas/#dunakeszi">Dunakeszi és környéke</a></li>

  <li class="dropdown-divider"></li>
  <li><a href="/service-areas/" class="dropdown-all">Teljes lefedettség megtekintése</a></li>
</ul>
```

---

## 🔄 **Automatikus Generálási Logika**

### **Szolgáltatások Dropdown Algoritmus:**
```javascript
function generateServicesDropdown(servicesData) {
  const dropdown = [];

  // 1. Fő kategóriák hozzáadása
  servicesData.mainCategories.forEach(category => {
    dropdown.push({
      type: 'link',
      text: category.name,
      href: `/services/#${slugify(category.name)}`,
      priority: category.priority || 'normal'
    });
  });

  // 2. Speciális szolgáltatások hozzáadása
  if (servicesData.specialServices.length > 0) {
    dropdown.push({ type: 'divider' });
    servicesData.specialServices.forEach(service => {
      dropdown.push({
        type: 'link',
        text: service.name,
        href: `/services/#${slugify(service.name)}`,
        priority: 'special'
      });
    });
  }

  // 3. "Összes szolgáltatás" link
  dropdown.push({ type: 'divider' });
  dropdown.push({
    type: 'link',
    text: 'Összes szolgáltatás megtekintése',
    href: '/services/',
    class: 'dropdown-all'
  });

  return dropdown;
}
```

### **Területek Dropdown Algoritmus:**
```javascript
function generateAreasDropdown(areasData) {
  const dropdown = [];

  // 1. Budapest szekció
  if (areasData.budapest && areasData.budapest.length > 0) {
    dropdown.push({ type: 'header', text: 'Budapest' });

    // Kerületek csoportosítása
    const groupedDistricts = groupBudapestDistricts(areasData.budapest);
    groupedDistricts.forEach(group => {
      dropdown.push({
        type: 'link',
        text: group.name,
        href: `/service-areas/#${slugify(group.slug)}`,
        districts: group.districts
      });
    });

    dropdown.push({ type: 'divider' });
  }

  // 2. Pest megye szekció
  if (areasData.pestCounty && areasData.pestCounty.length > 0) {
    dropdown.push({ type: 'header', text: 'Pest megye' });

    areasData.pestCounty.forEach(city => {
      dropdown.push({
        type: 'link',
        text: city.name + ' és környéke',
        href: `/service-areas/#${slugify(city.name)}`,
        priority: city.priority || 'normal'
      });
    });

    dropdown.push({ type: 'divider' });
  }

  // 3. "Teljes lefedettség" link
  dropdown.push({
    type: 'link',
    text: 'Teljes lefedettség megtekintése',
    href: '/service-areas/',
    class: 'dropdown-all'
  });

  return dropdown;
}
```

---

## 📝 **Adatgyűjtő Kérdőív Pontok**

### **Szolgáltatások Adatgyűjtése:**
```
1. "Sorolja fel a fő szolgáltatási kategóriáit (3-6 db):"
   □ _________________
   □ _________________
   □ _________________

2. "Minden kategórián belül milyen al-szolgáltatások vannak?"
   [Kategória 1]: _________________
   [Kategória 2]: _________________
   [Kategória 3]: _________________

3. "Van-e speciális szolgáltatása (sürgősségi, 24/7, egyedi)?"
   □ Igen, melyik: _________________
   □ Nem

4. "Melyik a legfontosabb szolgáltatása (menü tetejére)?"
   □ _________________
```

### **Területek Adatgyűjtése:**
```
1. "Budapesten mely kerületeket szolgálja ki?"
   □ Minden kerület (I-XXIII)
   □ Válassza ki: □ I-V □ VI-IX □ X-XV □ XVI-XXIII
   □ Specifikus kerületek: _________________

2. "Pest megyében mely városokat/területeket?"
   □ Szentendre  □ Budakeszi  □ Gödöllő
   □ Dunakeszi   □ Érd       □ Cegléd
   □ Egyéb: _________________

3. "Van-e prioritási különbség a területek között?"
   □ Igen - Elsődleges területek: _________________
   □ Igen - Másodlagos területek: _________________
   □ Nem, minden egyforma

4. "Van-e különleges területi szolgáltatás?"
   □ Igen: _________________
   □ Nem
```

---

## 🎯 **Implementációs Template Minden Agent-hez**

### **Navigation HTML Template:**
```html
<nav class="nav-container">
  <a href="/" class="logo">{{COMPANY_NAME}}</a>

  <ul class="nav-menu">
    <li><a href="/">Főoldal</a></li>

    <!-- SERVICES DROPDOWN -->
    <li class="dropdown">
      <a href="/services/" class="dropdown-trigger">
        Szolgáltatások <span class="dropdown-arrow">▼</span>
      </a>
      <ul class="dropdown-menu">
        {{GENERATED_SERVICES_DROPDOWN}}
      </ul>
    </li>

    <!-- AREAS DROPDOWN -->
    <li class="dropdown">
      <a href="/service-areas/" class="dropdown-trigger">
        Szolgáltatási területek <span class="dropdown-arrow">▼</span>
      </a>
      <ul class="dropdown-menu dropdown-areas">
        {{GENERATED_AREAS_DROPDOWN}}
      </ul>
    </li>

    <li><a href="/about/">Rólunk</a></li>
    <li><a href="/gallery/">Galéria</a></li>
    <li><a href="/contact/" class="nav-cta">Kapcsolat</a></li>
  </ul>
</nav>
```

---

## ✅ **Agent Követelmények**

### **Minden Agent Kötelezően:**
1. **Adatgyűjtéskor** bekéri a szolgáltatások és területek listáját
2. **Dropdown generáláskor** követi a fenti algoritmusokat
3. **HTML implementáláskor** használja a navigation template-et
4. **CSS/JS-kor** implementálja a `dropdown-navigation-system.md` specifikációt
5. **Teszteléskor** ellenőrzi minden dropdown funkciót

**🚀 Így minden weboldal automatikusan generálódó, egyedi dropdown menüvel rendelkezik!**