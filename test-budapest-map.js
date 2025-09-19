const { chromium } = require('playwright');
const path = require('path');

async function testBudapestMap() {
    console.log('🗺️ Budapest kerületek térkép tesztelése...\n');

    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 800
    });

    const context = await browser.newContext({
        viewport: { width: 1400, height: 900 }
    });

    const page = await context.newPage();

    try {
        // HTML fájl megnyitása
        const filePath = path.resolve(__dirname, 'budapest-map.html');
        const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;
        
        console.log(`📄 Budapest térkép betöltése: ${fileUrl}`);
        await page.goto(fileUrl);

        // Oldal betöltésének várakozása
        await page.waitForTimeout(3000);

        // Címek ellenőrzése
        const title = await page.title();
        const headerText = await page.textContent('h1');
        console.log(`📋 Oldal címe: ${title}`);
        console.log(`🏛️ Főcím: ${headerText}`);

        // Térkép konténer ellenőrzése
        const mapExists = await page.isVisible('#map');
        console.log(`🗺️ Térkép konténer: ${mapExists ? '✅ Megtalálható' : '❌ Hiányzik'}`);

        // Várakozás a térkép betöltésére
        console.log('\n⏳ Várakozás a térkép betöltésére (8 másodperc)...');
        await page.waitForTimeout(8000);

        // Ellenőrizzük, hogy betöltődött-e a Google Maps vagy az alternatív térkép
        const googleMapsExists = await page.evaluate(() => {
            return typeof google !== 'undefined' && google.maps;
        });

        const openStreetMapExists = await page.isVisible('iframe');

        console.log('\n🔍 Térkép állapot ellenőrzése:');
        console.log(`📍 Google Maps API: ${googleMapsExists ? '✅ Betöltődött' : '❌ Nem elérhető'}`);
        console.log(`🌍 OpenStreetMap fallback: ${openStreetMapExists ? '✅ Aktív' : '❌ Nem aktív'}`);

        if (googleMapsExists) {
            // Google Maps specifikus tesztek
            console.log('\n🎯 Google Maps specifikus tesztek:');
            
            // Marker számolás
            const markerCount = await page.evaluate(() => {
                return window.markers ? window.markers.length : 0;
            });
            console.log(`📍 Kerület markerek száma: ${markerCount}/23`);

            if (markerCount > 0) {
                console.log('✅ Markerek sikeresen betöltődtek!');
            }
        }

        // Kerületek listájának ellenőrzése
        const districtItems = await page.$$('.district-item');
        console.log(`🏘️ Kerület lista elemek: ${districtItems.length}/23`);

        if (districtItems.length > 0) {
            console.log('\n🔘 Kerület lista tesztelése:');
            
            // Első kerületre kattintás (I. Budavári)
            await page.click('.district-item:first-child');
            console.log('👆 I. Budavári kerületre kattintottam');
            await page.waitForTimeout(2000);

            // Másik kerületre kattintás (V. Belváros-Lipótváros)
            if (districtItems.length >= 5) {
                await page.click('.district-item:nth-child(5)');
                console.log('👆 V. Belváros-Lipótváros kerületre kattintottam');
                await page.waitForTimeout(2000);
            }
        }

        // Képernyőkép készítése
        console.log('\n📸 Képernyőkép készítése...');
        await page.screenshot({ 
            path: 'budapest-map-screenshot.png',
            fullPage: true
        });
        console.log('💾 Képernyőkép elmentve: budapest-map-screenshot.png');

        // Részletes térkép információk
        console.log('\n📊 Térkép részletek:');
        
        const mapContent = await page.$('#map');
        if (mapContent) {
            const mapHTML = await mapContent.innerHTML();
            
            if (mapHTML.includes('iframe')) {
                console.log('🌍 OpenStreetMap embed térkép aktív');
                console.log('📍 Budapest központ marker megjelenítve');
            } else if (mapHTML.includes('gm-style')) {
                console.log('🗺️ Google Maps sikeresen betöltődött');
                console.log('📍 Kerület markerek interaktívak');
            } else if (mapHTML.includes('Térkép betöltése')) {
                console.log('⏳ Térkép még betöltés alatt');
            }
        }

        // Várakozás a végső állapot megtekintésére
        console.log('\n⏰ 5 másodperc várakozás a végső állapot megtekintéséhez...');
        await page.waitForTimeout(5000);

        // Összefoglaló
        console.log('\n✅ Budapest térkép teszt befejezve!');
        console.log('📋 Eredmények:');
        console.log(`   - Térkép konténer: ${mapExists ? '✅' : '❌'}`);
        console.log(`   - Google Maps: ${googleMapsExists ? '✅' : '❌'}`);
        console.log(`   - OpenStreetMap fallback: ${openStreetMapExists ? '✅' : '❌'}`);
        console.log(`   - Kerület lista: ${districtItems.length}/23 ✅`);
        console.log('   - Képernyőkép készítve ✅');

        if (googleMapsExists || openStreetMapExists) {
            console.log('\n🎉 SIKER: Térkép sikeresen megjelenítve!');
        } else {
            console.log('\n⚠️ FIGYELEM: Térkép nem töltődött be teljesen');
        }

    } catch (error) {
        console.error('❌ Hiba történt:', error.message);
    } finally {
        console.log('\n🔚 Böngésző bezárása...');
        await browser.close();
    }
}

testBudapestMap().catch(console.error);