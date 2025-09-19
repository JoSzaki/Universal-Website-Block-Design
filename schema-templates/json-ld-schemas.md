# JSON-LD Schema Templates - ProStone Megoldások
## Minden Oldalhoz Kötelező Schema Markup-ok

---

## 🏢 **LocalBusiness Schema (Minden oldalon kötelező)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ProStone Megoldások",
  "image": "https://prostonemegoldasok.hu/logo.jpg",
  "description": "Professzionális térkövezési szolgáltatások Budapesten és Pest megyében 25+ év tapasztalattal.",
  "url": "https://prostonemegoldasok.hu",
  "telephone": "+36-1-555-7283",
  "email": "info@prostonemegoldasok.hu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aszfalt utca 123",
    "addressLocality": "Budapest",
    "postalCode": "1011",
    "addressCountry": "HU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.4979",
    "longitude": "19.0402"
  },
  "openingHours": [
    "Mo-Fr 07:00-18:00",
    "Sa 08:00-16:00"
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Budapest"
    },
    {
      "@type": "State",
      "name": "Pest"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "47.4979",
      "longitude": "19.0402"
    },
    "geoRadius": "50000"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "sameAs": [
    "https://www.facebook.com/prostonemegoldasok",
    "https://www.instagram.com/prostonemegoldasok"
  ]
}
</script>
```

---

## ❓ **FAQPage Schema (FAQ szekcióval rendelkező oldalakhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[KÉRDÉS 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[VÁLASZ 1]"
      }
    },
    {
      "@type": "Question",
      "name": "[KÉRDÉS 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[VÁLASZ 2]"
      }
    },
    {
      "@type": "Question",
      "name": "[KÉRDÉS 3]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[VÁLASZ 3]"
      }
    }
  ]
}
</script>
```

---

## 🔧 **Service Schema (Szolgáltatások oldalhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Térkövezési Szolgáltatások",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ProStone Megoldások",
    "url": "https://prostonemegoldasok.hu"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Budapest"
    },
    {
      "@type": "State",
      "name": "Pest"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Térkövezési Szolgáltatások",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Térkő Telepítés és Burkolás",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Beton Térkövek"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gránit Térkövek"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Kőművesség és Falazás",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Támfalak Építése"
            }
          }
        ]
      }
    ]
  }
}
</script>
```

---

## 🏢 **Organization Schema (Rólunk oldalhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProStone Megoldások",
  "alternateName": "ProStone",
  "url": "https://prostonemegoldasok.hu",
  "logo": "https://prostonemegoldasok.hu/logo.jpg",
  "description": "Professzionális térkövezési vállalkozás 25+ év tapasztalattal Budapesten és Pest megyében.",
  "foundingDate": "1999",
  "numberOfEmployees": "15",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aszfalt utca 123",
    "addressLocality": "Budapest",
    "postalCode": "1011",
    "addressCountry": "HU"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+36-1-555-7283",
    "contactType": "customer service",
    "email": "info@prostonemegoldasok.hu",
    "availableLanguage": "Hungarian"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Hungary"
  },
  "knowsAbout": [
    "Térkövezés",
    "Támfal építés",
    "Kőművesség",
    "Térburkolat javítás"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Better Business Bureau"
  }
}
</script>
```

---

## 📍 **Place Schema (Szolgáltatási területek oldalhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": "https://prostonemegoldasok.hu/service-areas",
  "name": "ProStone Megoldások Szolgáltatási Területek",
  "description": "Budapest és Pest megye területén nyújtunk térkövezési szolgáltatásokat.",
  "containedInPlace": [
    {
      "@type": "City",
      "name": "Budapest",
      "containsPlace": [
        {
          "@type": "Place",
          "name": "I. kerület"
        },
        {
          "@type": "Place",
          "name": "II. kerület"
        }
      ]
    },
    {
      "@type": "State",
      "name": "Pest megye",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Szentendre"
        },
        {
          "@type": "City",
          "name": "Budakeszi"
        }
      ]
    }
  ]
}
</script>
```

---

## 📞 **ContactPage Schema (Kapcsolat oldalhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://prostonemegoldasok.hu/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "ProStone Megoldások",
    "telephone": "+36-1-555-7283",
    "email": "info@prostonemegoldasok.hu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aszfalt utca 123",
      "addressLocality": "Budapest",
      "postalCode": "1011",
      "addressCountry": "HU"
    },
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+36-1-555-7283",
        "email": "info@prostonemegoldasok.hu"
      },
      {
        "@type": "ContactPoint",
        "contactType": "emergency",
        "telephone": "+36-1-555-7283",
        "availableLanguage": "Hungarian"
      }
    ]
  }
}
</script>
```

---

## 💰 **PriceSpecification Schema (Árak oldalhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Térkő Telepítés",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "15000",
            "priceCurrency": "HUF",
            "unitText": "m²-től"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Támfal Építés",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "25000",
            "priceCurrency": "HUF",
            "unitText": "m²-től"
          }
        }
      }
    }
  ]
}
</script>
```

---

## 🖼️ **ImageGallery Schema (Galéria oldalhoz)**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "ProStone Megoldások Projekt Galéria",
  "description": "Befejezett térkövezési projektek galériája",
  "url": "https://prostonemegoldasok.hu/gallery",
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://prostonemegoldasok.hu/gallery/project1.jpg",
      "description": "Térkövezési projekt Budapest II. kerület"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://prostonemegoldasok.hu/gallery/project2.jpg",
      "description": "Támfal építés Budakeszi"
    }
  ],
  "author": {
    "@type": "Organization",
    "name": "ProStone Megoldások"
  }
}
</script>
```

---

## 📝 **FAQ Szekció Template - HTML Struktúra**

```html
<!-- FAQ Szekció - Minden oldalra kötelező -->
<section class="block block-alt" id="gyakori-kerdesek">
    <div class="container">
        <div style="text-align: center; margin-bottom: 60px;">
            <h2>Gyakori Kérdések</h2>
            <p>A leggyakrabban felmerülő kérdések [OLDAL TÉMÁJÁHOZ] kapcsolódóan</p>
        </div>

        <div class="faq-container" style="max-width: 800px; margin: 0 auto;">
            <div class="faq-item" style="margin-bottom: 30px; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                <h3 style="color: var(--primary-blue); margin-bottom: 16px; cursor: pointer;">[KÉRDÉS 1]</h3>
                <div class="faq-answer">
                    <p>[VÁLASZ 1]</p>
                </div>
            </div>

            <div class="faq-item" style="margin-bottom: 30px; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                <h3 style="color: var(--primary-blue); margin-bottom: 16px; cursor: pointer;">[KÉRDÉS 2]</h3>
                <div class="faq-answer">
                    <p>[VÁLASZ 2]</p>
                </div>
            </div>

            <div class="faq-item" style="margin-bottom: 30px; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                <h3 style="color: var(--primary-blue); margin-bottom: 16px; cursor: pointer;">[KÉRDÉS 3]</h3>
                <div class="faq-answer">
                    <p>[VÁLASZ 3]</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🎯 **Oldal-Specifikus Schema Kombinációk**

### **Főoldal:**
- LocalBusiness + Organization + FAQPage

### **Szolgáltatások oldal:**
- LocalBusiness + Service + FAQPage

### **Szolgáltatási területek:**
- LocalBusiness + Place + FAQPage

### **Rólunk oldal:**
- LocalBusiness + Organization + FAQPage

### **Galéria oldal:**
- LocalBusiness + ImageGallery + FAQPage

### **Kapcsolat oldal:**
- LocalBusiness + ContactPage + FAQPage

### **Árak oldal:**
- LocalBusiness + PriceSpecification + FAQPage

---

**🚀 Minden agent kötelezően implementálja a megfelelő schema kombinációkat és FAQ szekciót!**